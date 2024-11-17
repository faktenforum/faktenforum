import { Command } from "commander";
import inquirer from "inquirer";
import axios from "axios";
import chalk from "chalk";
import ora from "ora";
import * as dotenv from "dotenv";

import { UserRole } from "~/models";

const program = new Command();

// Load environment variables from .env files
function loadEnvConfig() {
  // Try to load from different possible locations
  const envPaths = ["../.env"];

  for (const envPath of envPaths) {
    const result = dotenv.config({ path: envPath });
    if (result.parsed) {
      console.log(chalk.gray(`Loaded environment from ${envPath}`));
      break;
    }
  }

  // Verify required environment variables
  const requiredEnvVars = ["HASURA_ADMIN_SECRET", "HASURA_ENDPOINT", "HASURA_API_KEY"];
  const missing = requiredEnvVars.filter((env) => !process.env[env]);

  if (missing.length > 0) {
    console.error(chalk.red("Missing required environment variables:"));
    missing.forEach((env) => console.error(chalk.red(`- ${env}`)));
    process.exit(1);
  }
}

async function promptForDetails(email?: string, role?: string) {
  const questions = [];

  if (!email) {
    questions.push({
      type: "input",
      name: "email",
      message: "Enter user email:",
      validate: (input: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(input) || "Please enter a valid email address";
      }
    });
  }

  if (!role) {
    questions.push({
      type: "list",
      name: "role",
      message: "Select new role:",
      choices: Object.values(UserRole)
    });
  }

  const answers = await inquirer.prompt(questions);
  return {
    email: email || answers.email,
    role: role || answers.role
  };
}

async function updateUserRole(email: string, role: string) {
  const spinner = ora();
  try {
    const hasuraAdminSecret = process.env.HASURA_ADMIN_SECRET;
    if (!hasuraAdminSecret) {
      throw new Error("HASURA_ADMIN_SECRET environment variable is not set");
    }

    spinner.start("Finding user...");
    const getUserQuery = `
      query GetUserByEmail($email: String!) {
        user(where: {email: {_eq: $email}}) {
          id
        }
      }
    `;
    console.log("hasura endpoint", process.env.HASURA_ENDPOINT);
    const userResponse = await axios.post(
      process.env.HASURA_ENDPOINT + "/v1/graphql" || "http://localhost:8080/v1/graphql",
      {
        query: getUserQuery,
        variables: { email }
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-hasura-admin-secret": hasuraAdminSecret
        }
      }
    );
    const userId = userResponse.data.data.user[0]?.id;
    if (!userId) {
      spinner.fail();
      throw new Error(`User not found with email: ${email}`);
    }

    spinner.text = "Updating user role...";
    const response = await axios.post(
      "http://localhost:8083/api/v1/webhooks/update-user-role",
      {
        userId,
        role: role
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.HASURA_API_KEY
        }
      }
    );

    spinner.succeed("User role updated successfully");
    console.log(chalk.green("\nUpdated user details:"));
    console.log(chalk.cyan(JSON.stringify(response.data, null, 2)));
  } catch (error) {
    spinner.fail();
    console.error(chalk.red("\nError updating user role:"), error.response?.data?.message || error.message);
    process.exit(1);
  }
}

program
  .name("update-user-role")
  .description("Update a user's role by email address")
  .version("1.0.0")
  .argument("[email]", "user email address")
  .option("-r, --role <role>", "new role")
  .action(async (email: string | undefined, options: { role?: string }) => {
    try {
      loadEnvConfig();
      const details = await promptForDetails(email, options.role);
      await updateUserRole(details.email, details.role);
    } catch (error) {
      console.error(chalk.red("Error:"), error.message);
      process.exit(1);
    }
  });

program.parse();
