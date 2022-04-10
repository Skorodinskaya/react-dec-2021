import {useEffect, useState} from "react";

import {usersService} from "../../services";
import {User} from "../User/User";

export const Users = ({setUser, setUserIdForPosts}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersService.getAllUsers().then(({data}) => setUsers(data))
    }, []);
    return (
        <div>
            {users.map((user) => <User key={user.id} user={user} setUser={setUser} setUserIdForPosts={setUserIdForPosts}/>)}
        </div>
    );
}
