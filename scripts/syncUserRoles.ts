import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();

const HASURA_ENDPOINT = process.env.HASURA_ENDPOINT!;
const HASURA_ADMIN_SECRET = process.env.HASURA_ADMIN_SECRET!;
const KRATOS_ADMIN_URL = process.env.KRATOS_ADMIN_URL!;

if (!HASURA_ENDPOINT || !HASURA_ADMIN_SECRET || !KRATOS_ADMIN_URL) {
  throw new Error("Missing required environment variables");
}

type User = {
  id: string;
  role: string | null;
  email: string;
};

async function fetchAllUsers(): Promise<User[]> {
  const query = `
    query {
      user {
        id
        role
        email
      }
    }
  `;
  const res = await axios.post(
    `${HASURA_ENDPOINT}/v1/graphql`,
    { query },
    {
      headers: {
        "x-hasura-admin-secret": HASURA_ADMIN_SECRET,
        "Content-Type": "application/json"
      }
    }
  );
  return res.data.data.user;
}

async function fetchKratosUserRole(userId: string): Promise<string | null> {
  try {
    const res = await axios.get(`${KRATOS_ADMIN_URL}/admin/identities/${userId}`);
    return res.data.metadata_public?.role ?? null;
  } catch (e) {
    console.error(`Failed to fetch Kratos user ${userId}:`, e.response?.data || e.message);
    return null;
  }
}

async function updateUserRoleInHasura(userId: string, role: string) {
  const mutation = `
    mutation UpdateUserRole($userId: uuid!, $role: String!) {
      updateUserByPk(pkColumns: {id: $userId}, _set: {role: $role}) {
        id
        role
      }
    }
  `;
  await axios.post(
    `${HASURA_ENDPOINT}/v1/graphql`,
    {
      query: mutation,
      variables: { userId, role }
    },
    {
      headers: {
        "x-hasura-admin-secret": HASURA_ADMIN_SECRET,
        "Content-Type": "application/json"
      }
    }
  );
}

async function main() {
  const users = await fetchAllUsers();
  for (const user of users) {
    if (user.id === user.email) continue;
    const kratosRole = await fetchKratosUserRole(user.id);
    if (!kratosRole) {
      console.warn(`No role found in Kratos for user ${user.id} (${user.email})`);
      continue;
    }
    if (user.role !== kratosRole) {
      console.log(`Updating user ${user.id} (${user.email}): ${user.role} -> ${kratosRole}`);
      await updateUserRoleInHasura(user.id, kratosRole);
    } else {
      console.log(`User ${user.id} (${user.email}) already has correct role: ${kratosRole}`);
    }
  }
  console.log("Done!");
}

main().catch((err) => {
  console.error("Script failed:", err);
  process.exit(1);
});
