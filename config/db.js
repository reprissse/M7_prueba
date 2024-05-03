import pg from 'pg'
import dotenv from 'dotenv'
const { Pool } = pg

dotenv.config()

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env

const config = {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    allowExitOnIdle: true
}

export const pool = new Pool(config)

export default pool
