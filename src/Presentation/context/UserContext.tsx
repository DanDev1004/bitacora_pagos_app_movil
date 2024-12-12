import { Children, createContext, useEffect, useState } from "react";
import { User } from "../../Domain/entities/User";
import { SaveUserLocalUseCase } from "../../Domain/useCases/userLocal/SaveUserLocal";
import { GetUserLocalUseCase } from "../../Domain/useCases/userLocal/GetUserLocal";
import { RemoveUserLocalUseCase } from "../../Domain/useCases/userLocal/RemoveUserLocal";

export const userInitialState: User = {
    nombres:            "",
    apellidos:          "",
    telefono:           "",
    email:              "",
    password:           "",
    confirmPassword:    "",
    imagen:             "",
    session_token:      "",
    roles:              []
}

export interface UserContextProps{
    user: User,
    saveUserSession: (user: User) => Promise<void>;
    getUserSession: () => Promise<void>;
    removeUserSession: () => Promise<void>;
}

export const UserContext = createContext( {} as UserContextProps); 

export const UserProvider = ({Children}: any) =>{
    const [user, setUser] = useState(userInitialState);

    useEffect(() => {
     getUserSession();
    }, [])
    

    const saveUserSession = async (user: User) => {
        await SaveUserLocalUseCase(user);
        setUser(user);
    }

    const getUserSession = async() => {
        const user = await GetUserLocalUseCase();
        setUser(user);
    }

    const removeUserSession = async()=>{
        await removeUserSession();
        setUser(userInitialState);
    }

    return(
        <UserContext.Provider value={{
            user,
            saveUserSession,
            getUserSession,
            removeUserSession
        }}>
            { Children }
        </UserContext.Provider>
    )
}