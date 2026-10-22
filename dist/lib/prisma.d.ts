import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/xxx-client/client.js";
declare const prisma: PrismaClient<{
    adapter: PrismaPg;
}, never, import("@prisma/xxx-client/runtime/client").DefaultArgs>;
export { prisma };
//# sourceMappingURL=prisma.d.ts.map