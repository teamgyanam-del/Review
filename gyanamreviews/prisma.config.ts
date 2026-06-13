import 'dotenv/config';
import { defineConfig, env } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    // Use env() helper to ensure Prisma CLI errors when DATABASE_URL is missing.
    url: env('DATABASE_URL'),
  },
});
