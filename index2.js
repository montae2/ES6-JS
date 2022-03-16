
class Employee {
    constructor (_employee) {
        this.Emp = {
            Name: 'Jane Doe',
            IdNumber : '123',
            StoreNumber : '1',
            EmpPermissions :  {
                addBook: 'Add',
                editBook: 'Edit', 
            },
            
        }    
    }
}
console.log(Employee);

class Manager extends Employee {
    constructor (_employee, _manager) {
        super (Employee);
        this.empManaged = {
            empList: 'Employees Managed',
            PermissionsEdit : {
                addEmployee: 'Add Employee',
                delEmployee: 'Delete Employee',
                resEmployee: 'Restrict Access',
            }
        }
    }
}
console.log(Manager);


const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
console.log('countries', countries);
/*Destructure and assign the elements of 
countries array to fin, est, sw, den, nor*/
const [fin, est, sw, den, nor] = countries
console.log('est', est);

const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}
console.log(rectangle);
//Destructure the rectangle object by its properties
rectProperties(rectangle);

function rectProperties({height, area, width, perimeter}) {
    const message = 'My properties (width, height, area, perimeter) are:' + width + ',' + height + ','  + area + ',' + perimeter;
console.log(message);
}


const evens = [0, 2, 4, 6, 8, 10];
const odds = [1, 3, 5, 7, 9];
/*Using the spread operator, the Array .map() method, 
and at least one arrow function
 to place the values from evens and odds into an array 
 and display the values on a html screen in numerical order*/
const numbers = [...evens,...odds];
console.log(numbers);

//CORRECT METHOD TO SORT
/*numbers.sort((a,b) => a - b)
console.log(numbers);*/

//TRY CREATING A FUNCTION AND CALLING IT WITH .map
function numSort() {
    return (
        numbers.sort((a,b) => a - b)
    )
}
console.log(numSort);

numbers.map(numSort, numbers);
console.log(numbers);


//document.getElementById('numbs').innerHTML = numbers.map(numSort, numbers);
//
