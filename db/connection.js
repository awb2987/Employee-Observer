require('dotenv').config();

const { Pool } = require('pg');

// Create a new pool instance using env variables
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT || 5432
});

// Connect to the database and log the connection status
pool.connect()
    .then(() => console.log('Connected to the database!'))
    .catch(err => console.error('Connection error', err.stack));

// Export the pool instance
module.exports = pool;
