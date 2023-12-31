import Joi from 'joi'

export const param = Joi.object({
    description: Joi.string().required(),
    type: Joi.string().required(),
    default: Joi.any().required(),
    required: Joi.boolean().required()
})

export const request = Joi.object({
    method: Joi.string().required(),
    url: Joi.string()
        .regex(/^https?:\/\/.+/)
        .required(),
    query: Joi.object().pattern(Joi.string(), param),
    params: Joi.object().pattern(Joi.string(), param)
})

export const query = Joi.object({
    name: Joi.string().required()
})

export const queryAll = Joi.object({
    name: Joi.string()
})

export const interaction = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    request: request.required()
})

export const interactionWithoutRequire = Joi.object({
    name: Joi.string(),
    description: Joi.string(),
    request: request
}).or('name', 'description', 'request')
