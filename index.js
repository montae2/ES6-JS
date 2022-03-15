class Employee {
    constructor (employee) {
        this.empName = employee;
        this.idNumber = employee;
        this.empPermissions = employee; {
            addBook: 'Add';
            editBook: 'Edit'; 
        }
        this.storeNumber = employee;
    }
}

class Manager extends Employee {
    constructor (employee, manager) {
        super (Employee);
        this.empManaged = manager;
            empList: 'Employees Managed';
        this.permissionsEdit = manager; {
            addEmployee: 'Add Employee';
            delEmployee: 'Delete Employee';
            resEmployee: 'Restrict Access';
        }
    }
}



const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
/*Destructure and assign the elements of 
countries array to fin, est, sw, den, nor*/
const [fin, est, sw, den, nor] = countries


const rectangle = {
    width: '20',
    height: '10',
    area: '200',
    perimeter: '60'
}
//Destructure the rectangle object by its properties
rectProperties(rectangle);
function rectProperties ({width, height, area, perimeter}) {
    const message = 'Properties (width, height, area, perimeter)' + width + height + area + perimeter;
}


const evens = [0, 2, 4, 6, 8, 10];
const odds = [1, 3, 5, 7, 9];
/*Using the spread operator, the Array .map() method, 
and at least one arrow function
 to place the values from evens and odds into an array 
 and display the values on a html screen in numerical order*/
const numbers = [...evens,...odds];
console.log(numbers);

numbers.sort((a,b) => a - b)
console.log(numbers);

function list () {
document.getElementById("numbs").innerHTML = numbers.map();
}
