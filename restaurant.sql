CREATE DATABASE restaurant;
USE restaurant;

CREATE TABLE reservations (
customerId VARCHAR(100) NOT NULL,
name VARCHAR(100) NOT NULL,
phoneNum INTEGER(10) NOT NULL,
email VARCHAR(100) NOT NULL,
PRIMARY KEY (customerId)
);

INSERT INTO reservations (customerId, name, phoneNum, email)
VALUES ("1", "Dacia", "5125555555", "dacia@email.com");


INSERT INTO reservations (customerId, name, phoneNum, email)
VALUES ("2", "Andrew", "5556666666", "andrew@email.com");


INSERT INTO reservations (customerId, name, phoneNum, email)
VALUES ("3", "Erin", "5557777777", "erin@email.com");


INSERT INTO reservations (customerId, name, phoneNum, email)
VALUES ("4", "Liza", "5558888888", "liza@email.com");


INSERT INTO reservations (customerId, name, phoneNum, email)
VALUES ("5", "Karin", "5559999999", "karin@email.com");