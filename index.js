const inquirer = require('inquirer');
const queries = require('./db/queries');

// Main Menu function
const mainMenu = async () => {
    try {
        const { choice } = await inquirer.prompt({
            type: 'list',
            name: 'choice',
            message: 'What are you trying to accomplish today?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a new department',
                'Add a new role',
                'Add a new employee',
                'Update an employee role',
                'Exit'
            ]
        });

        switch (choice) {
            case 'View all departments':
                const departments = await queries.getDepartments();
                console.table(departments);
                break;

            case 'View all roles':
                const roles = await queries.getRoles();
                console.table(roles);
                break;

            case 'View all employees':
                const employees = await queries.getEmployees();
                console.table(employees);
                break;

            case 'Add a new department':
                const { departmentName } = await inquirer.prompt({
                    type: 'input',
                    name: 'departmentName',
                    message: 'Enter the name of the new department:'
                });
                await queries.addDepartment(departmentName);
                console.log('Department added.');
                break;

            case 'Add a new role':
                const { roleName, salary, departmentId } = await inquirer.prompt([
                    { type: 'input', name: 'roleName', message: 'Enter the name of the new role:' },
                    { type: 'input', name: 'salary', message: 'Enter the salary for the designated role:', validate: value => !isNaN(value) || 'Please enter a valid number.' },
                    { type: 'input', name: 'departmentId', message: 'Enter the department ID for the designated role:', validate: value => !isNaN(value) || 'Please enter a valid number.' }
                ]);
                await queries.addRole(roleName, parseFloat(salary), parseInt(departmentId, 10));
                console.log('Role added.');
                break;

            case 'Add a new employee':
                const { firstName, lastName, roleId, managerId } = await inquirer.prompt([
                    { type: 'input', name: 'firstName', message: 'Enter the first name of this employee:' },
                    { type: 'input', name: 'lastName', message: 'Enter the last name of this employee:' },
                    { type: 'input', name: 'roleId', message: 'Enter the Role ID for this employee:', validate: value => !isNaN(value) || 'Please enter a valid number.' },
                    { type: 'input', name: 'managerId', message: 'Enter the manager ID for this employee (or leave blank if not currently assigned):', default: null }
                ]);
                await queries.addEmployee(firstName, lastName, parseInt(roleId, 10), managerId ? parseInt(managerId, 10) : null);
                console.log('Employee added.');
                break;

            case 'Update an employee role':
                const { employeeId, newRoleId } = await inquirer.prompt([
                    { type: 'input', name: 'employeeId', message: 'Enter the ID of the employee to update:', validate: value => !isNaN(value) || 'Please enter a valid number.' },
                    { type: 'input', name: 'newRoleId', message: 'Enter the new role ID for the employee:', validate: value => !isNaN(value) || 'Please enter a valid number.' }
                ]);
                await queries.updateEmployeeRole(parseInt(employeeId, 10), parseInt(newRoleId, 10));
                console.log('Employee role updated.');
                break;

            case 'Exit':
                console.log('Exiting now...');
                process.exit();         
        }

        // Return to main menu after the action is completed
        mainMenu();
    } catch (error) {
        console.error('An error has occurred:', error);
        process.exit(1);
    }
};

// Initialize the application
mainMenu();
