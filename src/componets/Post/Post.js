import css from './Post.module.css'
import {Button} from "../index";

export const Post = ({post, flag}) => {
    const {id, title} = post;
    return (
        <div className={css.wrapper}>
            <div>{id} -- {title}</div>
            {
                flag && <div><Button to={`${id}`} state={post}>get Details</Button></div>
            }
        </div>
    );
}