export const Post = ({post}) => {
    return (
        <div>
            <hr/>
            <div>UserId: {post.userId}</div>
            <div>Id: {post.id} </div>
            <div> Title: {post.title}</div>
            <hr/>
        </div>
    );
}