INSERT INTO department (name)
VALUES ('Legal'),
    ('Sales'),
    ('Engineering');
INSERT INTO roles (title, salary, department_id)
VALUES ('Customer Manager', 90000, 1),
    ('Lawyer', 170000, 1),
    ('Sales Director', 180000, 2),
    ('Salesperson', 70000, 2),
    ('Project Manager', 150000, 3),
    ('Engineer', 120000, 3);
INSERT INTO employee (
        first_name,
        last_name,
        role_id,
        manager_id,
        manager_confirm
    )
VALUES ('Summer', 'Howe', 1, null, true),
    ('Manha', 'Flynn', 2, 1, false),
    ('Connah', 'Gross', 2, 1, false),
    ('Ajay', 'Jackson', 3, null, true),
    ('Gerrard', 'Haley', 4, 2, false),
    ('Avery', 'Stark', 4, 2, false),
    ('Tony', 'Ramirez', 4, 2, false),
    ('Nick', 'Walker', 5, null, true),
    ('Phil', 'Heath', 6, 3, false),
    ('Andrew', 'Jacked', 6, 3, false);
INSERT INTO manager (first_name, last_name)
SELECT first_name,
    last_name
FROM employee