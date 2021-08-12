export interface UsersRepository {
    findUserByEmail(email: string): User;
}