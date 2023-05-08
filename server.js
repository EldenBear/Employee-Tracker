const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employees_db'
  },
  console.log(`Connected to the employees_db database.`)
);

const viewAllDepartments = "View all departments";
const viewAllRoles = "View all roles";
const viewAllEmployees = "View all employees";
const addDepartment = "Add a department";
const addRole = "Add a role";
const addEmployee = "Add an employee";
const updateEmployeeRole = "Update employee role";

const questions = [
    {
      type: "list",
      name: "directory",
      message: "What would you like to do?",
      choices:[viewAllDepartments, viewAllRoles, viewAllEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole] 
    },
  ];

const queryDepartments = () => {
    db.query("SELECT * FROM department;", function (err, results){
        console.log(results);
    });
}

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
 
 inquirer.prompt(questions).then((data) => {
    if (data.directory === viewAllDepartments){
        queryDepartments();
    }
  }); 

});
