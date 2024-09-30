const pool = require('./db/connection');

// Get all departments
const getDepartments = async () => {
    try {
        const result = await pool.query('SELECT * FROM department');
        return result.rows;
    } catch (error) {
        console.error('Error retrieving departments:', error);
        throw error;
    }
};

// Get all roles
const getRoles = async () => {
    try {
        const result = await pool.query(`
            SELECT role.id, role.title, role.salary, department.name AS department
            FROM role
            JOIN department ON role.department_id = department.id
        `);
        return result.rows;
    } catch (error) {
        console.error('Error retrieving roles:', error);
        throw error;
    }
};

// Get all employees
const getEmployees = async () => {
    try {
        const result = await pool.query(`
            SELECT employee.id, employee.first_name, employee.last_name, role.title AS role, department.name AS department, role.salary, manager.first_name AS manager
            FROM employee
            JOIN role ON employee.role_id = role.id
            JOIN department ON role.department_id = department.id
            LEFT JOIN employee AS manager ON employee.manager_id = manager.id
        `);
        return result.rows;
    } catch (error) {
        console.error('Error retrieving employees:', error);
        throw error;
    }
};

// Add a new department
const addDepartment = async (name) => {
    try {
        if (!name) {
            throw new Error('Department name is required.');
        }
        await pool.query('INSERT INTO department (name) VALUES ($1)', [name]);
    } catch (error) {
        console.error('Error adding department:', error);
        throw error;
    }
};

// Add a new role
const addRole = async (title, salary, departmentId) => {
    try {
        if (!title || isNaN(salary) || isNaN(departmentId)) {
            throw new Error('Invalid input. Please provide a valid title, salary, and department ID.');
        }
        await pool.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [title, salary, departmentId]);
    } catch (error) {
        console.error('Error adding role:', error);
        throw error;
    }
};

// Add a new employee
const addEmployee = async (firstName, lastName, roleId, managerId) => {
    try {
        if (!firstName || !lastName || isNaN(roleId)) {
            throw new Error('Invalid input. Please provide a valid first name, last name, and role ID.');
        }
        await pool.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [firstName, lastName, roleId, managerId || null]);
    } catch (error) {
        console.error('Error adding new employee:', error);
        throw error;
    }
};

// Update an employee's role
const updateEmployeeRole = async (employeeId, newRoleId) => {
    try {
        if (isNaN(employeeId) || isNaN(newRoleId)) {
            throw new Error('Invalid input. Please provide a valid employee ID and role ID.');
        }
        await pool.query('UPDATE employee SET role_id = $1 WHERE id = $2', [newRoleId, employeeId]);
    } catch (error) {
        console.error('Error updating employee role:', error);
        throw error;
    }
};

module.exports = {
    getDepartments,
    getRoles,
    getEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole
};
