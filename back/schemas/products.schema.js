import { z } from 'zod';

export const createProductSchema = z.object({
    name: z.string({
        required_error: 'Name is required'
    }),
    description: z.string({
        required_error: 'Description is required'
    }),
    price: z.number({
        required_error: 'Price is required'
    }),
    pounds_per_yard: z.number({
        required_error: 'Pounds per yard is required'
    }),
    ounces_per_pound: z.number({
        required_error: 'Ounces per pound is required'
    })
});

export const updateProductSchema = z.object({
    name: z.string({
        required_error: 'Name is required'
    }).optional(),
    description: z.string({
        required_error: 'Description is required'
    }).optional(),
    price: z.number({
        required_error: 'Price is required'
    }).optional(),
    pounds_per_yard: z.number({
        required_error: 'Pounds per yard is required'
    }).optional(),
    ounces_per_pound: z.number({
        required_error: 'Ounces per pound is required'
    }).optional()
});