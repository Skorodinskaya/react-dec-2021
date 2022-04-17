import css from './css.module.css'
import {Button} from "../index";
// import {useNavigate} from "react-router-dom";

export const Post = ({post}) => {
    // const navigate = useNavigate();
    const {id, title} = post;
    return (
        <div className={css.wrapper}>
            <div>{id} -- {title}</div>
            <div><Button to={`${id}`} state={post}>get Details</Button></div>

            {/*<div>{id} -- {title}</div>*/}
            {/*<button onClick={() => navigate(id.toString())}>go to users</button>*/}
        </div>
    );
}