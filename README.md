# Employee-Observer

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Database Setup](#database-setup)
  - [Running the Application](#running-the-application)
- [Walkthrough Video](#walkthrough-video)
- [GitHub Repository](#github-repository)
- [Contribution](#contribution)
- [Acknowledgments](#acknowledgments)

## Description
Employee-Observer is a command-line application designed to manage an employee database for a company. It allows users to view and manage departments, roles, and employees, providing an intuitive interface for business owners to organize and plan their workforce.

## Features
- View all departments
- View all roles
- View all employees
- Add a new department
- Add a new role
- Add a new employee
- Update an employee's role

## Technologies Used
- Node.js
- Inquirer
- PostgreSQL
- dotenv (for managing environment variables)
- pg (PostgreSQL client for Node.js)

## Getting Started

### Installation
```bash
# 1. Clone the repository:
git clone https://github.com/awb2987/Employee-Observer.git

# 2. Navigate to the project directory:
cd Employee-Observer

# 3. Install the required packages:
npm install

# 4. Create a `.env` file in the root directory and add your database credentials:
echo "DB_USER=yourusername
DB_HOST=localhost
DB_NAME=yourdatabase
DB_PASSWORD=yourpassword
DB_PORT=5432" > .env
```

### Database Setup
```bash
# 1. Ensure PostgreSQL is installed and running on your system.

# 2. Create the database:
createdb yourdatabase

# 3. Navigate to the `seeds` folder and run the `seed.sql` file to set up the database schema:
psql -U yourusername -d yourdatabase -f seeds/seed.sql

# 4. (Optional) Run the seed data if you'd like to start with predefined data.
```

### Running the Application
```bash
# To start the application, use the following command:
node index.js

# Follow the prompts in the command-line interface to view, add, and update employee information.
```

## Walkthrough Video
[Walkthrough Video](https://drive.google.com/file/d/1sv84afBHYVp2gvwgRxeouajQHcJGcsKm/view)
[Walthrough Video Back-up](https://drive.google.com/file/d/1sv84afBHYVp2gvwgRxeouajQHcJGcsKm/view?usp=sharing)

## GitHub Repository
[GitHub Repository](https://github.com/awb2987/Employee-Observer)

## Contribution
If you would like to contribute to this project, please feel free to fork the repository and submit a pull request.

## Acknowledgments
Special thanks to the instructors and resources that guided the development of this project. I accidentally left all managers as null, but the video shows that everything works and I showed the postgreSQL tables at the end to let you know that all information was added to all 3 tables.
