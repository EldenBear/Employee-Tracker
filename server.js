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
    password: 'root',
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

    {
      type: "input",
      name: "department",
      message: "Please input new department name",
      when: (answers) => answers.directory === addDepartment
    },

    {
      type: "input",
      name: "role",
      message: "Please input new role name",
      when: (answers) => answers.directory === addRole
    },
    {
      type: "input",
      name: "roleSalary",
      message: "Please input new role salary",
      when: (answers) => answers.directory === addRole
    },
    {
      type: "input",
      name: "roleDepartmentId",
      message: "Please input new role department ID",
      when: (answers) => answers.directory === addRole
    },

    {
      type: "input",
      name: "newFirstName",
      message: "Please input the new employee's first name",
      when: (answers) => answers.directory === addEmployee
    },
    {
      type: "input",
      name: "newLastName",
      message: "Please input the new employee's last name",
      when: (answers) => answers.directory === addEmployee
    },
    {
      type: "input",
      name: "newRoleId",
      message: "Please input the new employee's Role ID",
      when: (answers) => answers.directory === addEmployee
    },
    {
      type: "input",
      name: "newManagerId",
      message: "Please input the new employee's manager's ID",
      when: (answers) => answers.directory === addEmployee
    },

    {
      type: "input",
      name: "oldEmployeeId",
      message: "Please enter employee's ID you wish to update",
      when : (answers) => answers.directory === updateEmployeeRole
    },

    {
      type: "input",
      name: "updatedRole",
      message: "Please enter employee's new role ID",
      when : (answers) => answers.directory === updateEmployeeRole
    }
  ];

const queryDepartments = () => {
    db.query("SELECT * FROM department;", function (err, results){
        console.log(results);
    });
};

const queryRole = () => {
    db.query("SELECT * FROM role;", function (err, results){
        console.log(results);
    });
};

const queryEmployee = () => {
    db.query("SELECT * FROM employee;", function (err, results){
        console.log(results);
    });
};

const appendDepartment = (departmentName) => {
  db.execute(`INSERT INTO department(department_name) VALUES ("${departmentName}");`);
};

      

const appendRole = (roleName, roleMoney, roleId) => {
  db.execute(`INSERT INTO role(title, salary, department_id) VALUES ("${roleName}", ${roleMoney}, ${roleId});`);
};

const appendEmployee = (first_name, last_name, role_id, manager_id) => {
  db.execute(`INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("${first_name}", "${last_name}", ${role_id}, ${manager_id});`);
};

const updateRole = (newRole, oldEmployeeId) => {
  db.execute(`UPDATE employee SET role_id = ${newRole} WHERE id = ${oldEmployeeId}`)
};


const askQuestions = () => {
  inquirer.prompt(questions).then((data) => {
     if (data.directory === viewAllDepartments){
         queryDepartments();
     } else if (data.directory === viewAllRoles) {
       queryRole();
     } else if (data.directory === viewAllEmployees) {
       queryEmployee();
     } else if (data.directory === addDepartment) {
       appendDepartment(data.department);
     } else if (data.directory === addRole) {
       appendRole(data.role, data.roleSalary, data.roleDepartmentId);
     } else if (data.directory === addEmployee) {
       appendEmployee(data.newFirstName, data.newLastName, data.newRoleId, data.newManagerId);
     } else if (data.directory === updateEmployeeRole) {
       updateRole(data.updatedRole, data.oldEmployeeId);
     }
     askQuestions();
   }); 
  
}

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  
 askQuestions();
});