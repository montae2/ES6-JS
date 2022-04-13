class Employee {
    constructor (empName, idNumber, empPermissions, storeNumber, empType) {
        this.empName = empName;
        this.idNumber = idNumber;
        this.empPermissions = empPermissions;
        this.storeNumber = storeNumber;
        this.empType = empType;
        }    
}
console.log(Employee);  


class Manager extends Employee {
    constructor (empName, idNumber, empPermissions, storeNumber, empType) {
        super (empName, idNumber, empPermissions, storeNumber, empType);
        this.empManaged = {
            addEmp : function (empName) {
                this.empManaged.push(empName);
                return empManaged;
            }
        }
        this.empType = "Manager";
    }
}        
console.log(Manager);


const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
console.log('countries', countries);
/*Destructure and assign the elements of 
countries array to fin, est, sw, den, nor*/
const [fin, est, sw, den, nor] = countries
console.log('fin:', fin);
console.log('est:', est);
console.log('sw:', sw);
console.log('den:', den);
console.log('nor:', nor);


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
    const message = 'My properties (width, height, area, perimeter) are: ' + width + ',' + height + ','  + area + ',' + perimeter;
console.log(message);
}


const evens = [0, 2, 4, 6, 8, 10];
const odds = [1, 3, 5, 7, 9];
/*Using the spread operator, the Array .map() method, 
and at least one arrow function
 to place the values from evens and odds into an array 
 and display the values on a html screen in numerical order*/

 //spread operator to join arrays
const numbers = [...evens,...odds];
console.log('numbers', numbers);

//.map to form new array
const newNumbs = numbers.map(a => a);
console.log('newNumbs', newNumbs);

//Sort new array
newNumbs.sort((a,b) => a - b)
console.log('sort newNumbs', newNumbs);

//Display new array
document.getElementById("numbs").innerHTML = newNumbs;
