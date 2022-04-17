import {useEffect, useState} from "react";
import {Outlet} from 'react-router-dom';

import css from './UsersPage.module.css'
import {userService} from "../../services";
import {Loading, User} from "../../componets";

export const UsersPage = () => {
    const [users, setUsers] = useState(null);
    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    })
    return (
        <div>
            <div className={css.wrapper}>
                <div>
                    {users ? users.map(user => <User key={user.id} user={user}/>)
                    : <Loading/>
                    }</div>
                <Outlet/>
            </div>
        </div>
    );
}