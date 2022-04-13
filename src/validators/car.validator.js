import Joi from "joi";

export const carValidator = Joi.object({
    model:Joi.string().min(1).max(20).alphanum().required().messages({
        'string.empty':`Model can't be empty`,
        'string.min':`Model should be at least 2 characters`,
        'string.max':`Model should be at max 20 characters `
    }),

    price:Joi.number().min(0).max(1000000).required().messages({
        'number.min':'Min price is 0'
    }),

    year:Joi.number().min(1990).max(new Date().getFullYear()).required()
});

