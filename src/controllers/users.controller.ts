import BaseController from "./base-controller";
import {UsersRepository} from "../repositories/users/users-repository.interface";
import {User} from "../interfaces/user.interface";

export class UsersController extends BaseController<User> {
    constructor(private usersRepository: UsersRepository) {
        super(usersRepository);
    }

    findUserByEmail(email: string): User {
        return this.usersRepository.findUserByEmail(email);
    }
}