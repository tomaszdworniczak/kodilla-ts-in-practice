import {BaseRepository} from "../base-repository.interface";

export interface UsersRepository extends BaseRepository<User>{
    findUserByEmail(email: string): User;
}