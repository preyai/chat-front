import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material"
import { useUsers } from "../hooks/users"
import { IUser } from "../interfaces/services"

interface ContactItemProps {
    user: IUser
}

const Contacts = () => {
    const { users } = useUsers()

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <List>
                {users.map((user: IUser) => (
                    <ContactItem user={user} />
                ))}
            </List>
        </Box>
    )
}

const ContactItem = ({ user }: ContactItemProps) => {
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar alt={user.nickname} src={user.avatar} />
            </ListItemAvatar>
            <ListItemText primary={user.nickname} />
        </ListItem>
    )
}

export default Contacts