CREATE DATABASE studentdb
GO

USE studentdb
GO

CREATE TABLE student (
_id INT IDENTITY(1,1),
name VARCHAR(200),
email VARCHAR(200),
city VARCHAR(200)
)
GO

SELECT * FROM student
GO

INSERT INTO student (name, email, city) VALUES ('Scott', 'Scott@ef.com', 'Boston'),
                                               ('Adam', 'Adam@ef.com', 'Sydeny'),
											   ('Tuan', 'Tuan@ef.com', 'Hanoi')
GO

SELECT * FROM student WHERE _id=1
GO

UPDATE student SET name= 'Scott Desatnick', email='Scott.Desatnick@ef.com', city='Bengaluru' WHERE _id=1
GO

INSERT INTO student (name, email, city) VALUES ('kjdkjdskjf', 'dfsdf@ef.com', 'dfdsf')
GO

DELETE FROM student where _id=4
GO