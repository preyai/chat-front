
export interface IUser {
    _id: string,
    nickname: string,
    password: string,
    avatar:string
}

export interface IChat {
    _id: string,
    theme: string,
    owner:string,
    users: string[],
    private:boolean
}

export interface IMessage {
    _id: string,
    user: IUser,
    chat: string,
    text: string,
    createdAt: Date
}