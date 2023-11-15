import { z } from 'zod';

export const createCaseSchema = z.object({
    title: z.string({
        required_error: 'Title is required'
    }),
    description: z.string({
        required_error: 'Description is required'
    }),
    tag: z.string({
        required_error: 'Tag is required'
    }),
    imageURL: z.string({
        required_error: 'Image is required'
    })
});

export const updateCaseSchema = z.object({
    title: z.string({
        required_error: 'Title is required'
    }).optional(),
    description: z.string({
        required_error: 'Description is required'
    }).optional(),
    tag: z.string({
        required_error: 'Tag is required'
    }).optional(),
    imageURL: z.string({
        required_error: 'Image is required'
    }).optional()
});