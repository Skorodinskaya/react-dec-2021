export const UserInfo = ({user, setUserIdForPosts}) => {
    return (
        <div>
            <div>Id: {user.id}</div>
            <div>Name: {user.name} </div>
            <div>Username: {user.username} </div>
            <div>Email: {user.email}</div>
            <input type='button' value='posts' onClick={() => setUserIdForPosts(user.id)}/>
        </div>
    );
}