INSERT INTO department(id, department_name)
VALUES
    (1, "Product Development"),
    (2, "Sales"),
    (3, "IT");

INSERT INTO role (id, title, salary, department_id)
VALUES 
    (1, "Team Lead", 150000, 1), 
    (2, "Principal Engineer", 130000, 1),
    (3, "Senior Engineer", 110000, 1),
    (4, "Software Engineer", 90000, 1),
    (5, "Junior Engineer", 70000, 1),
    (6, "Sales Consultant", 40000, 2),
    (7, "IT Technician", 50000, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
    (1, "Phil", "Brooks", 1, null),
    (2, "Tina", "Grey", 2, 1),
    (3, "Kobe", "Bryant", 3, 1),
    (4, "John", "Jacob", 4, 1),
    (5, "Kristen", "Apple", 4, 1),
    (6, "Mark", "Calloway", 5, 1),
    (7, "Goblin", "Man", 6, null),
    (8, "Glasses", "MaHoney", 7, null);