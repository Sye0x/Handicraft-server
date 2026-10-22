import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../node_modules/@prisma/xxx-client/client";
import dotenv from "dotenv";

dotenv.config();

const adapter = new PrismaPg({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});
const prisma = new PrismaClient({ adapter });

export { prisma };
