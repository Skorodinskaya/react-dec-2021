import {useEffect, useState} from "react";
import {postsService} from "../../services";
import {Post} from "../Post/Post";

export const Posts = ({userIdForPosts}) => {
    const [posts, setPosts] = useState(null);
    useEffect(() => {
        postsService.getPostsOfUser(userIdForPosts).then(({data}) => setPosts(data))
    })
    return (
        <div>
            {posts && posts.map((post) => <Post key={post.id} post={post}/>)}
        </div>
    );
}