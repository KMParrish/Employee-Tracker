const { promptUser } = require('../index');
const inquirer = require('inquirer');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'employees',
    password: 'fireplacefrank',
    });
const viewRoles = () => {
    connection.query(
        `SELECT roles.id, roles.title, roles.salary, department.name
            FROM roles
            LEFT JOIN department
            ON roles.department_id = department.id `,
        function (err, results, fields) {
            if (err) {
                console.log("error");
                return;
            }

            console.table(results);
            promptUser();
        }
    );
};

const newRole = () => {
    connection.query(
        `SELECT * FROM department`,
        function (err, results, fields) {
            if (err) {
                console.log(err);
                return;
            }

            let totArr = [];
            results.forEach(item => {
                totArr.push(item.name)
            })

            inquirer
                .prompt([
                    {
                        type: 'text',
                        name: 'new_role',
                        message: 'What will be the new role?'
                    },
                    {
                        type: 'number',
                        name: 'salary',
                        message: 'Enter the salary.'
                    },
                    {
                        type: 'list',
                        name: 'department',
                        message: 'Enter the department',
                        choices: totArr
                    }
                ])
                .then((data) => {
                    let department_id;

                    for (let i = 0; i < totArr.length; i++) {
                        if (totArr[i] === data.department) {
                            department_id = i + 1;
                        };
                    };

                    connection.query(
                        `INSERT INTO roles (title, salary, department_id)
                            VALUES(?,?,?)`,
                        [data.new_role, data.salary, department_id],
                        function (err, results, fields) {
                            if (err) {
                                console.log("error");
                                return;
                            }

                            console.log('New role successfully added.')
                            promptUser();
                        }
                    );
                });
        }
    );
};

module.exports = { viewRoles, newRole };