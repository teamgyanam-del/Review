import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createClient() {
  const logs: ('query' | 'info' | 'warn' | 'error')[] =
    process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'];

  // If DATABASE_URL is set, use the PrismaPg adapter for pg connections.
  if (process.env.DATABASE_URL) {
    try {
      const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
      return new PrismaClient({ adapter, log: logs });
    } catch {
      // Fallback to default constructor if adapter creation fails
      // This keeps behavior safe in environments where adapter isn't available.
      return new PrismaClient({ log: logs });
    }
  }

  return new PrismaClient({ log: logs });
}

export const db = globalForPrisma.prisma ?? createClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db;