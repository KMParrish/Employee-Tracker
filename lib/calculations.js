const { promptUser } = require('../index');
const inquirer = require('inquirer');
const mysql = require('mysql2');

const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
database: 'employees',
password: 'fireplacefrank',
});

const addTotal = () => {
    connection.query(`SELECT * FROM department`,
        function (err, results) {
            if (err) {
                console.log("error");
                return;
            }

            totArr = [];
            results.forEach(item => {
                totArr.push(item.name);
            });

            inquirer
                .prompt({
                    type: 'list',
                    name: 'dep_selection',
                    message: 'Select a Department to view.',
                    choices: totArr
                })
                .then((data) => {
                    let department_id;
                    for (let i = 0; i < totArr.length; i++) {
                        if (totArr[i] === data.dep_selection) {
                            department_id = i + 1;
                        };
                    };
                        connection.query(
                        `SELECT department.name AS department, SUM(roles.salary) AS total_salary
                        FROM employee
                        LEFT JOIN roles
                        ON employee.role_id = roles.id
                        LEFT JOIN department
                        ON roles.department_id = department.id
                        WHERE department_id = ?`,
                        [department_id],
                        function (err, results) {
                            if (err) {
                                console.log("error");
                                return;
                            }
                            console.table(results);
                            promptUser();
                        }
                    );
                });
        }
    )
};

module.exports = { addTotal };