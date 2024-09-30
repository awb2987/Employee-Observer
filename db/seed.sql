-- Insert departments
INSERT INTO department (name) VALUES 
('Sales'),
('Engineering'),
('HR');

-- Insert roles
INSERT INTO role (title, salary, department_id) VALUES 
('Sales Manager', 80000, (SELECT id FROM department WHERE name = 'Sales')),
('Sales Associate', 50000, (SELECT id FROM department WHERE name = 'Sales')),
('Software Engineer', 90000, (SELECT id FROM department WHERE name = 'Engineering')),
('HR Specialist', 60000, (SELECT id FROM department WHERE name = 'HR'));

-- Insert employees
-- Note: Replace the manager_id values with actual employee ids as needed for testing
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
('John', 'Jonas', (SELECT id FROM role WHERE title = 'Sales Manager'), NULL),
('Janis', 'Carmichael', (SELECT id FROM role WHERE title = 'Sales Associate'), (SELECT id FROM employee WHERE first_name = 'John' AND last_name = 'Doe')),
('Alex', 'McDougal', (SELECT id FROM role WHERE title = 'Software Engineer'), NULL),
('Bob', 'Blacksmith', (SELECT id FROM role WHERE title = 'HR Specialist'), NULL);
