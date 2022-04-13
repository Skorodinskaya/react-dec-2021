import {carsService} from "../../services";

export const Car = ({car, setCarForUpdate, setDeletedCarId}) => {
    const {id, model, price, year} = car;

    const deleteCar = async () => {
        await carsService.deleteById(id)
        setDeletedCarId(id)
    }

    return (
        <div>
            <div>ID: {id}</div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={() => deleteCar()}>Delete</button>
            <button onClick={() => setCarForUpdate(car)}>Update</button>
            <br/>
            <br/>
        </div>
    );
}