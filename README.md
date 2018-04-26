# Small Business JSON Database

## Requirements:

A small business wants to keep track of its employees and the computers that they use. Each employee is assigned to a department, and they each get assigned a computer when they join the company.

## Currently Working On:

## Remaining Features:

1. Once your data is normalized, use your DOM skills to display a card for each employee. It should display the employee name, the name of their department, and which computer they are using

## Stretch Goals:

* Styles

## Completed Features:

1. Build arrays of objects that represent Employees, Departments, and Computers.
1. Assign every resource a unique id property.
1. Assign each employee to a department using a foreign key.
1. Assign each employee a computer using a foreign key.

## Data Structure:

* Employees
  * employeeId
  * name
* Departments
  * departmentId
  * name
* Computers
  * computerId
  * computerName
* EmployeeDepartments
  * employeeId
  * departmentId
* EmployeeComputers
  * employeeId
  * computerId
