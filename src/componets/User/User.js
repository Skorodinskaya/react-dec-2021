import {Button} from "../Button/Button";

export const User = ({user}) => {
    const {id, name} = user;
    return (
        <div>
            <div>
                <div>id:{id}</div>
                <div>name:{name}</div>
                <Button state={user} to={id.toString()}>Details</Button>
            </div>
            <br/>
        </div>
    );
}