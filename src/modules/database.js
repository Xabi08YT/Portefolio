import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export async function getAllLang() {
    await prisma.$connect()
    let res = await prisma.T_Languages_LNG.findMany();
    await prisma.$disconnect();
    return res;
}