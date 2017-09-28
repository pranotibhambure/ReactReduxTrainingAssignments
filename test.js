// "use strict"
// var message = 'Hello World';
// message = 10;
// console.log(message);


// var num =10;
// function test(){
//     num =100;
//     console.log('value of num in test() '+num);
// }
// console.log('value of num outside/before test() '+num);
// test();
// console.log('value of num outside/after test() '+num);


// var employee = {
//     name: 'Pranoti Bhambure',
//     salary: 10000,
//     showDetails: function(){
//         console.log('Name:'+this.name);
//         console.log('Salary:'+this.salary);
//     }
// }
// employee.showDetails();
// console.log(employee);
// console.log(typeof employee);
// employee.department = 'IT';
// console.log('UPDATED: '+employee.department);


// var car = new Object();
// car.make = 'Maruti';
// car.model = 'Maruti xyz 123';
// car.year = 2001;
// console.log(car);


// function Car(){
//     this.make = 'Maruti';
//     this.model = 'Maruti xyz 123';
//     this.year = 2001;
// }
// var car = new Car();
// console.log(car);
// console.log(typeof car);
// console.log(Car());
// console.log(typeof Car);


// var roles = {
//     type: 'Admin',
//     showType: function(){
//         console.log(this.type);
//     }
// }
// var super_role = Object.create(roles);
// super_role.showType();
// var manager_role = Object.create(roles);
// manager_role.type = 'Manager';
// manager_role.showType();


// var employee = new Object();
// employee.name = 'Pranoti';
// employee.salary = 10000;
// var employeeCopy = Object.assign({}, employee);
// console.log({employeeCopy});
// employeeCopy.id = 1234;
// console.log({employee});
// console.log({employeeCopy});


class Employee{
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
    }

    showEmployeeDetails(){
        console.log('Name:', this.name);
         console.log('Salary:', this.salary);
    }
}
var employee = new Employee('Pranoti', 10000);
employee.showEmployeeDetails();