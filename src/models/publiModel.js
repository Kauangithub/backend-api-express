import { prisma } from "../helpers/dbConnection.js";

export const createPubli = async (publi) => {
    return await prisma.publication.create({
        data: publi
    })
}

export const getPubli = async () => {
    return await prisma.publication.findMany()
}