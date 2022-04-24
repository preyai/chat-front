import { useEffect, useState } from "react"
import { getUsers } from "../helpers/users"
import { IUser } from "../interfaces/services"

export const useUsers = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(()=>{
        getUsers().then(res => setUsers(res.data))
    },[])

    return {users}
}