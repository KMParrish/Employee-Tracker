const { promptUser } = require('../index');
const inquirer = require('inquirer');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'employees',
    password: 'fireplacefrank',
    });


// View department
const viewDep = () => {
    connection.query(
        `SELECT * FROM department`,
        function (err, results, fields) {
            if (err) {
                console.log(err.message);
                return;
            }

            console.table(results);
            promptUser();
        }
    )
}

const addDep = () => {
    inquirer
        .prompt({
            type: 'text',
            name: 'dep_type',
            message: 'Enter the name of the new department.'
        })
        .then((data) => {
            connection.query(
                `INSERT INTO department (name)
                VALUES(?)`,
                [data.dep_type],
                function (err, results, fields) {
                    if (err) {
                        console.log("error");
                        return;
                    }
                    console.log('Successfully input new department.');
                    promptUser();
                }
            )
        })
}

module.exports = { viewDep, addDep }