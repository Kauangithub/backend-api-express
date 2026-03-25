import { prisma } from "../helpers/dbConnection.js";

export const createPubli = async (publi) => {
    return await prisma.publication.create({
        data: publi
    })
}

export const getPubli = async () => {
    return await prisma.publication.findMany()
}

export const updatePubli = async (id, publi) => {
    return await prisma.publication.update({
        where: { id },
        data: publi
    })
}

export const deletePubli = async (id) => {
    return await prisma.publication.delete({
        where: { id }
    })
}