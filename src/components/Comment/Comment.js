export const Comment = ({comment}) => {
    return (
        <div>{comment.id} - {comment.body}</div>
    );
}