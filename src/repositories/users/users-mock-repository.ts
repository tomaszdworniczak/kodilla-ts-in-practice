import {UsersRepository} from "./users-repository.interface";
import {nanoid} from "nanoid";

export class UsersMockRepository implements UsersRepository{
    private users: Array<User> = [];

    addItem(item: User): User {
        item.id = nanoid(10);
        this.users.push(item);
        return item;
    }

    deleteItem(id: string): boolean {
        const item = this.getItemById(id);
        if (item) {
            this.users = this.users.filter(item => item.id !== id);
            return true;
        }
        return false;
    }

    findUserByEmail(email: string): User {
        return this.users.find(item => item.email = email);
    }

    getAllItems(): Array<User> {
        return this.users;
    }

    getItemById(id: string): User {
        return this.users.find(item => item.id === id);
    }

    updateItem(id: string, item: User): User {
        this.users = this.users.map(i => {
            if (i.id === id) {
                return {
                    ...item,
                    id: i.id,
                };
            }
            return i;
        });
        return this.getItemById(id);
    }

}