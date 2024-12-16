import { User } from "../../Domain/entities/User";
import { UserLocalRepository } from "../../Domain/repositories/UserLocalRepository";
import { LocalStorage } from "../sources/local/LocalStorage";

export class UserLocalRepositoryImpl implements UserLocalRepository{

    async save(user: User): Promise<void> {
        const { save } = LocalStorage();
        await save('user',JSON.stringify(user));
        console.log('User saved:', JSON.stringify(user));
    }

    async getUser(): Promise<User> {
        const { getItem } = LocalStorage();
        const data = await getItem('user');
        console.log('Data retrieved from storage:', data);  
        const user: User = JSON.parse(data as any);
        console.log('Parsed user:', user);
        return user;
    }

    async remove(): Promise<void> {
        const { remove } = LocalStorage();
        await remove('user');
        console.log('User removed');
    }

    
}