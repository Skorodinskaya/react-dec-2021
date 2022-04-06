export const User = ({user}) => {
    return (
        <div>
        <div>{user.name}</div>
        <div>{user.username}</div>
        <div>{user.email}</div>
        </div>
    );
}