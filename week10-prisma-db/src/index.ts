import { PrismaClient } from "@prisma/client";
import { get } from "http";

const prisma = new PrismaClient();

async function getUser(username: string) {
    const res=await prisma.user.findUnique({
        where: {
            username
        }
    });
    console.log(res);
}

getUser("admin1")