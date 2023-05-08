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

