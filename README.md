# Employee Observer

**Employee Observer** is a command-line application designed to manage and organize a company's employee database. It allows users to view, add, and update information about departments, roles, and employees using Node.js, Inquirer, and PostgreSQL.

## Table of Contents

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Database Schema](#database-schema)
- [Seeding the Database](#seeding-the-database)
- [Environment Variables](#environment-variables)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## User Story

As a user, I want to manage and organize employee data, so that I can keep track of departments, roles, and employees effectively.

## Acceptance Criteria

- Users should be able to view all departments, roles, and employees.
- Users should be able to add new departments, roles, and employees.
- Users should be able to update an employee's role.
- The application should provide confirmation messages for successful actions.
- The application should handle errors gracefully and provide feedback to the user.

## Features

- **View All Departments**: Display a table of all departments in the company.
- **View All Roles**: Show a table of roles with details including the department they belong to and their salary.
- **View All Employees**: List all employees with details including their role, department, and manager.
- **Add a New Department**: Add a new department to the database.
- **Add a New Role**: Create a new role with a title, salary, and associated department.
- **Add a New Employee**: Add a new employee with details including first name, last name, role, and manager.
- **Update an Employee Role**: Change an employee's role in the company.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/employee-observer.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd employee-observer
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

## Usage

```bash
node index.js
```

## Database Schema

- **Departments Table**: Contains department id and name.
- **Roles Table**: Contains role id, title, salary, and department id.
- **Employees Table**: Contains employee id, first name, last name, role id, manager id.

## Seeding the Database

To seed the database with initial data, run:

```bash
npm run seed
```

## Environment Variables

Ensure you have a `.env` file with the following variables:

```
DB_HOST=localhost
DB_USER=yourusername
DB_PASSWORD=yourpassword
DB_NAME=employeedb
```

## Testing

To run tests, use the following command:

```bash
npm test
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
