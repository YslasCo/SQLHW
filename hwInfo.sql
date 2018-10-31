-- Drops the animals_db if it exists currently --
DROP DATABASE IF EXISTS bamazon;
-- Creates the "animals_db" database --
CREATE DATABASE bamazon;

-- Makes it so all of the following code will affect animals_db --
USE bamazon;

-- Creates the table "people" within animals_db --
CREATE TABLE products(
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
  id INTEGER(10) AUTO_INCREMENT NOT NULL,
  -- Makes a string column called "name" which cannot contain null --
  product_name VARCHAR(30) NOT NULL,
  -- Makes a boolean column called "has_pet" which cannot contain null --
  department_name VARCHAR(30) NOT NULL,
  -- Makes a sting column called "pet_name" --
  price INTEGER(100) NOT NULL,
  -- Makes an numeric column called "pet_age" --
  stock_quantity INTEGER(100products) NOT NULL,
  -- Sets id as this table's primary key which means all data contained within it will be unique --
  PRIMARY KEY (id)
);

-- Creates new rows containing data in all named columns --
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Computer","Technology",100, 10);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Phone", "Technology", 50, 20);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Knife", "Kitchen", 10, 100);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Spoon", "Kitchen", 5, 100);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Coffee Maker", "Kitchen", 20, 10);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Microwave", "Kitchen", 35, 25);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Mattress", "Bedroom", 150, 5);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Alarm Clock", "Bedroom", 15, 100);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Mirror", "Bathroom", 40, 10);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Towel", "Bathroom", 5, 30);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Fork", "Kitchen", 5, 100);

