import {prisma} from '../helpers/dbConnection.js';

export const createUser = async (user) => {
    return await prisma.users.create({
        data: user
    })
}

export const getUsers = async () => {
    return await prisma.users.findMany()
}