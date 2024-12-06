import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function getAllLang() {
    await prisma.$connect()
    let res = await prisma.t_Languages_LNG.findMany();
    await prisma.$disconnect();
    console.log(res);
    return res;
}

export async function login(username, password) {
    if (!username || !password) {return false}
    await prisma.$connect()
    let res = await prisma.t_Admin_ADM.findFirst({where: {username: username}});
    await prisma.$disconnect();
    let login = false;
    await bcrypt.compare(password, res.password, function (err, isMatch) {
        login = isMatch;
        if(err) {
            console.error(err);
        }
    });

    return login
}

export async function register(username, password) {
    await prisma.$connect()
    await bcrypt.genSalt(10, async function(err, salt) {
        await bcrypt.hash(password, salt, async function(err, hash) {
            await prisma.t_Admin_ADM.create({data: {username: username, password: hash}});
            if(err) {
                console.error(err);
            }
        });
    });
    await prisma.$disconnect();
}