import { z } from 'zod';

export const createMemberSchema = z.object({
    name: z.string({
        required_error: 'Name is required'
    }),
    last_name: z.string({
        required_error: 'Lasr Name is required'
    }),
    position: z.string({
        required_error: 'Position is required'
    }),
    imageURL: z.string({
        required_error: 'Image is required'
    })
});

export const updateMemberSchema = z.object({
    name: z.string({
        required_error: 'Name is required'
    }).optional(),
    last_name: z.string({
        required_error: 'Last Name is required'
    }).optional(),
    position: z.string({
        required_error: 'Position is required'
    }).optional(),
    imageURL: z.string({
        required_error: 'Image is required'
    }).optional()
});