USE employees;
INSERT INTO department
    (name)
VALUES
    ('Marketing'),
    ('Finance')
    ('Operations Management')
    ('Human Resources'),
    ('Information Technology'),

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Software Engineer', 125000, 5),
    ('Project Manager', 150000, 3),
    ('Customer Manager', 90000, 3),
    ('Sales Director', 180000, 1),
    ('IT Director', 130000, 5),
    ('Recruiter', 90000, 4),
    ('Financial Analyst', 115000, 2),
    ('Accountant', 75000, 2;

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Harris', 'McArthur', 1, NULL),
    ('Kayla', 'Carty', 2, 1),
    ('Chandler', 'Rankin', 3, NULL),
    ('Usamah', 'Floyd', 4, 3),
    ('Jaimee', 'Randall', 7, 3),
    ('Calista', 'McFarland', 5, NULL),
    ('Caolan', 'Evans', 8, 5),
    ('Alister', 'Leigh', 6, 5),