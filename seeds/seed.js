require('dotenv').config();
const fs = require('fs');
const path = require('path');
const pool = require('../db/connection'); // Adjust the path as necessary

// Read the SQL file
const seedData = fs.readFileSync(path.join(__dirname, 'seed.sql'), 'utf8');

// Seed the database
const seedDatabase = async () => {
    try {
        await pool.query(seedData);
        console.log('Database seeded successfully!');
    } catch (error) {
        console.error('Error seeding database:', error.message);
    } finally {
        pool.end(); // Close the database connection
    }
};

// Execute the seeding function
seedDatabase();
