import { ResponseApiBitacoraPagos } from "../../Data/sources/remote/models/ResponseApiBitacoraPagos";
import { User } from "../entities/User";

export interface AuthRepository{
    register(user: User): Promise<ResponseApiBitacoraPagos>
}