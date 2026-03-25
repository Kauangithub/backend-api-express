import {prisma} from '../helpers/dbConnection.js';

export const createUser = async (user) => {
    return await prisma.users.create({
        data: user
    })
}

export const getUsers = async () => {
    return await prisma.users.findMany()
}

export const updateUser = async (id, user) => {
    return await prisma.users.update({
        where: { id },
        data: user
    })
}

export const deleteUser = async (id) => {
    return await prisma.users.delete({
        where: { id}
    })
}