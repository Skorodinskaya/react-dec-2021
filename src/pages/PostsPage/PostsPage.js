import {useEffect, useState} from "react";
import {postService} from "../../services";
import {Post} from "../Post/Post";

export const PostsPage = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    })
    console.log(posts);
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
}