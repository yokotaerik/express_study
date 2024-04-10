import prismaClient from "../prisma";

interface CreateUserDTO {
    email: string;
    name: string;
}

export class UserService {

    async createUser(data: CreateUserDTO) {
        return await prismaClient.user.create({data: data,  select: { id: true, name: true, email: true }})
    }
}