import {useForm} from "react-hook-form";
import {carsService} from "../../services";

export const CarForm = ({setNewCar}) => {
    const {register, reset, handleSubmit} = useForm();

    const submit = async (car) => {
        const {data} = await carsService.create(car);
        setNewCar(data);
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>Model: <input type="text" {...register('model')}/></label></div>
            <div><label>Price: <input type="text" {...register('price', {valueAsNumber: true})}/></label></div>
            <div><label>Year: <input type="text" {...register('year', {valueAsNumber: true})}/></label></div>
            <button>save</button>
        </form>
    );
}