// packages/db/src/index.ts


// Singleton instance
import { PrismaClient } from './generated/prisma'
console.log('PrismaClient:', PrismaClient) 
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

