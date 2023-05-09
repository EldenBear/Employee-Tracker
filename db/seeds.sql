INSERT INTO department(department_name)
VALUES
    ("Product Development"),
    ("Sales"),
    ("IT");

INSERT INTO role (title, salary, department_id)
VALUES 
    ("Team Lead", 150000, 1), 
    ("Principal Engineer", 130000, 1),
    ("Senior Engineer", 110000, 1),
    ("Software Engineer", 90000, 1),
    ("Junior Engineer", 70000, 1),
    ("Sales Consultant", 40000, 2),
    ("IT Technician", 50000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ("Phil", "Brooks", 1, null),
    ("Tina", "Grey", 2, 1),
    ("Kobe", "Bryant", 3, 1),
    ("John", "Jacob", 4, 1),
    ("Kristen", "Apple", 4, 1),
    ("Mark", "Calloway", 5, 1),
    ("Goblin", "Man", 6, null),
    ("Glasses", "MaHoney", 7, null);