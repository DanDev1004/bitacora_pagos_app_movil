import React, { createContext, useEffect, useState } from "react";
import { User } from "../../Domain/entities/User";
import { SaveUserLocalUseCase } from "../../Domain/useCases/userLocal/SaveUserLocal";
import { GetUserLocalUseCase } from "../../Domain/useCases/userLocal/GetUserLocal";
import { RemoveUserLocalUseCase } from "../../Domain/useCases/userLocal/RemoveUserLocal";

export const userInitialState: User = {
    id: '',
    nombres: '',
    apellidos: '',
    telefono: '',
    email: '',
    password: '',
    confirmPassword: '',
    imagen: '',
    session_token: '',
    roles: [],
}

export interface UserContextProps {
    user: User;
    saveUserSession: (user: User) => Promise<void>;
    getUserSession: () => Promise<void>;
    removeUserSession: () => Promise<void>;
}


export const UserContext = createContext({} as UserContextProps);

export const UserProvider = ({ children }: any) => {

    const [user, setUser] = useState(userInitialState);

    useEffect(() => {
        console.log("UserProvider Mounted");
        getUserSession();
    }, [])


    const saveUserSession = async (user: User) => {
        console.log("Saving User:", user);
        await SaveUserLocalUseCase(user);
        setUser(user);
    }

    const getUserSession = async () => {
        const user = await GetUserLocalUseCase();
        console.log("Stored User in Context:", user);
        setUser(user);
    }

    const removeUserSession = async () => {
        await RemoveUserLocalUseCase();
        setUser(userInitialState);
    }

    return (
        <UserContext.Provider value={{
            user,
            saveUserSession,
            getUserSession,
            removeUserSession
        }}>
            {children}
        </UserContext.Provider>
    )
}