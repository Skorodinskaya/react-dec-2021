import {useForm} from "react-hook-form";
import {carsService} from "../../services";
import {useEffect, useState} from "react";
import {joiResolver} from '@hookform/resolvers/joi'
import {carValidator} from "../../validators";

export const CarForm = ({setNewCar, carForUpdate}) => {
    // const [formError, setFormError] = useState({});
    const {register, reset, handleSubmit, formState: {errors}, setValue} = useForm({
        resolver: joiResolver(carValidator),
        mode: 'onTouched'
    });

    useEffect(() => {
        if (carForUpdate) {
            const {model, price, year} = carForUpdate;
            setValue('model', model)
            setValue('price', price)
            setValue('year', year)
        }
    }, [carForUpdate])

    const submit = async (car) => {
        try {
            const {data} = await carsService.create(car);
            setNewCar(data);
            reset()
        } catch (e) {
            // setFormError(e.response.data)
        }
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>Model: <input type="text" {...register('model')}/></label></div>
            {errors.model && <span>{errors.model.message}</span>}
            {/*{formError.model && <span>*{formError.model[0]}</span>}*/}
            <div><label>Price: <input type="text" {...register('price', {valueAsNumber: true})}/></label></div>
            {errors.price && <span>{errors.price.message}</span>}
            {/*{formError.price && <span>*{formError.price}</span>}*/}
            <div><label>Year: <input type="text" {...register('year', {valueAsNumber: true})}/></label></div>
            {errors.year && <span>{errors.year.message}</span>}
            {/*{formError.year && <span>*{formError.year}</span>}*/}
            <button>save</button>
        </form>
    );
}