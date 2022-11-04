
// Inital Prompt - Main Menu
const promptUser = () => {
    inquirer

        .prompt({
            type: 'list',
            name: 'begin choices',
            message: 'What would you like to do? (Select on of the following)',
            choices: ['View All Employees', 'View All Employees By Department', 'View All Employees By Manager', 'Add Employee', 'Update Employee Role', 'View Departments', 'Add Department', 'View Roles', 'Add Role', 'View totalized budget', 'I am finished']
        })
        .then((data) => {
            switch (data['begin choices']) {
                case 'View All Employees':
                    viewAllEmployees();
                    break;
                case 'View All Employees By Department':
                    viewEmployeeByDep();
                    break;
                case 'View All Employees By Manager':
                    viewEmployeeMng();
                    break;
                case 'Add Employee':
                    addEmp();
                    break;
                case 'Update Employee Role':
                    upEmp();
                    break;
                case 'View Departments':
                    viewDep();
                    break;
                case 'Add Department':
                    addDep();
                    break;
                case 'View Roles':
                    viewRoles();
                    break;
                case 'Add Role':
                    newRole();
                    break;
                case 'View totalized budget':
                    addTotal();
                    break;
                case 'I am finished':
                    break;
            }
        })
};

module.exports = { promptUser }
const inquirer = require('inquirer');
const { viewAllEmployees, viewEmployeeByDep, viewEmployeeMng, addEmp, upEmp } = require('./lib/employee');
const { viewDep, addDep } = require('./lib/department-methods');
const { viewRoles, newRole } = require('./lib/roles-methods');
const { addTotal } = require('./lib/calculations');
promptUser()
