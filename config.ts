import * as dotenv from 'dotenv'

dotenv.config()

type config = {
    PORT: number
    MONGO_CONNECTION: string

    MODULE_NAME: string
    MODULE_KEY: string

    SESSION_SECRET: string

    AI_ANALYSIS_MS: string
}

const env = process.env as any

export const variables: config = {
    PORT: env.PORT,
    MONGO_CONNECTION: env.MONGO_CONNECTION,
    MODULE_KEY: env.MODULE_KEY,
    MODULE_NAME: env.MODULE_NAME,
    SESSION_SECRET: env.SESSION_SECRET,
    AI_ANALYSIS_MS: env.AI_ANALYSIS_MS
}
