
export interface IUser {
    _id: string,
    nickname: string,
    password: string,
}

export interface IChat {
    _id: string,
    theme: string,
    users: string[]
}