import { IUser } from "./services";

export interface authState {
    user?: IUser,
    setUser: Function
}