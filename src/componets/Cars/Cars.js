import {useEffect, useState} from "react";

import {carsService} from "../../services";
import {Car} from "../Car/Car";

export const Cars = ({newCar, setCarForUpdate, updatedCar}) => {
    const [cars, setCars] = useState([]);
    const [deletedCarId, setDeletedCarId] = useState(null);

    useEffect(() => {
        carsService.getAllCars().then(({data}) => setCars(data));
    }, [newCar, deletedCarId, updatedCar])

    // useEffect(() => {
    //     if (newCar) {
    //         setCars(prevState => [...prevState, newCar])
    //     }
    //
    //     if(deletedCarId) {
    //         setCars(cars.filter(car => car.id !== deletedCarId))
    //     }
    // }, [newCar, deletedCarId])
    return (
        <div>
            {cars.map((car) => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate}
                                    setDeletedCarId={setDeletedCarId}/>)}
        </div>
    );
}