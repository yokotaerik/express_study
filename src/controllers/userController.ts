import { Request, Response } from "express";
import { UserService } from "../services/userService";

const userService = new UserService();

export class UserController {

    async createUser(req: Request, res: Response){

        console.log(req.body)

        const { name, email } = req.body || {}
        


        const user = await userService.createUser({name, email});

        return res.status(201).send(user)
    }
}   