import {useEffect, useState} from "react";
import {userService} from "../../services";
import {useLocation, useParams, Outlet} from "react-router-dom";
import {Loading, UserDetails} from "../../componets";

export const SingleUserPage = () => {
    const {state} = useLocation();
    const [user, setUser] = useState(state);
    const {userId} = useParams();
    useEffect(() => {
        if (!state) {
            userService.getById(userId).then(({data}) => setUser(data))
        } else {
            setUser(state)
        }
    }, [userId, state])
    return (
        <div>
            <div>
                {
                    user
                        ? <UserDetails key={user.id} user={user}/>
                        : <Loading/>
                }
            </div>
            <div><Outlet/></div>
        </div>

    );
}