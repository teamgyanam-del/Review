import { PrismaClient } from '@/lib/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createClient() {
  const logs: ('query' | 'info' | 'warn' | 'error')[] =
    process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'];

  // In Prisma v7, PrismaClient always requires a driver adapter.
  // We use PrismaPg which connects via the DATABASE_URL env var.
  const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL ?? '',
  });

  return new PrismaClient({ adapter, log: logs });
}

export const db = globalForPrisma.prisma ?? createClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db;