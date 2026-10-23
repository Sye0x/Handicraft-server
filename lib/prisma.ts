import "dotenv/config";
import { readFileSync } from "node:fs";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/xxx-client/client.js";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is missing");
}

const ca = readFileSync("/etc/secrets/aiven-ca.pem", "utf8");

console.log(
  "Aiven CA certificate loaded:",
  ca.startsWith("-----BEGIN CERTIFICATE-----"),
);

const adapter = new PrismaPg({
  connectionString,
  ssl: {
    ca,
    rejectUnauthorized: true,
  },
});

const prisma = new PrismaClient({ adapter });

export { prisma };
