#!/usr/bin/env node

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function setAdmin(email) {
  try {
    const updatedUser = await prisma.user.update({
      where: { email: email },
      data: { role: "ADMIN" }
    });
    console.log(`User ${updatedUser.email} set to admin.`);
  } catch (error) {
    console.error(`Error setting user ${email} to admin:`, error);
  } finally {
    await prisma.$disconnect();
  }
}

// Get email from command line arguments and run the function
const email = process.argv[2];
if (email) {
  setAdmin(email);
} else {
  console.error("Please provide an email address.");
}
