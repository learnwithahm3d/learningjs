//variable declarations
let first_name = "Alice";
const last_name = "Smith";
const age = 30;
console.log(`Name: ${first_name} ${last_name}, Age: ${age}`);

//string, number, boolean
let isEmployed = true;
console.log(`Employed: ${isEmployed}`);
const height = 5.7; // in feet
console.log(`Height: ${height} feet`);
const greeting = "Hello, World!";
console.log(greeting);
const score = 95;
console.log(`Score: ${score}`);
const isPassed = true;
console.log(`Passed: ${isPassed}`);
const x = null;
console.log(typeof x);
const y = undefined;
console.log(typeof y);

//concatenation
let city = "New York";
let country = "USA";
let area = city + ", " + country;
console.log("Location: " + area);

//template literals
let fullName = `${first_name} ${last_name}`;
console.log(`Full Name: ${fullName}`);
console.log(city.length);
console.log(country.toUpperCase());
console.log(country.toLowerCase()); 
console.log(country.includes("US"));
console.log(greeting.replace("World", "Alice"));
console.log(greeting.split(", "));
console.log(greeting.substring(0, 5).toUpperCase());

//arrays
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);
fruits.push("Date");
console.log(fruits);
fruits[4] = "Elderberry";
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log(`First fruit: ${fruits[0]}`);
console.log(`Number of fruits: ${fruits.length}`);
fruits.sort();
console.log(`Sorted fruits: ${fruits}`);
console.log(`Is fruits an array? ${Array.isArray(fruits)}`);

//objects
let person = {
    firstName: "Bob",
    lastName: "Johnson",
    age: 35,
    isEmployed: false,
    movies: ["Inception", "The Matrix", "Interstellar"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA"
    }
};
console.log(person);
console.log(`Person's Name: ${person.firstName} ${person.lastName}`);
person.age = 36;
console.log(`Updated Age: ${person.age}`);
console.log(`Keys: ${Object.keys(person)}`);
console.log(`Values: ${Object.values(person)}`);
console.log(`Movies: ${person.movies.join(", ")}`);
console.log(`City: ${person.address.city}`);
const {address: {street, state}} = person;
console.log(`Street: ${street}, State: ${state}`);

//array of objects
let employees = [
    {name: "Charlie", position: "Manager", salary: 70000},
    {name: "Dana", position: "Developer", salary: 60000},
    {name: "Eli", position: "Designer", salary: 50000}
];  
console.log(employees);
employees.forEach(emp => {
    console.log(`Employee: ${emp.name}, Position: ${emp.position}, Salary: ${emp.salary}`);
});

//json
let jsonString = JSON.stringify(person);
console.log(`JSON String: ${jsonString}`);
let jsonObject = JSON.parse(jsonString);
console.log(`Parsed Object:`, jsonObject);

//loops
for(let i = 0; i < 5; i++) {
    console.log(`For Loop Iteration: ${i}`);
}
let count = 0;
while(count < 3) {
    console.log(`While Loop Count: ${count}`);
    count++;
}
let doCount = 0;
do {
    console.log(`Do-While Loop Count: ${doCount}`);
    doCount++;
} while(doCount < 2);
for(let emp of employees) {
    console.log(`For-Of Employee: ${emp.name}`);
    console.log(`Position: ${emp.position}`);
    console.log(`Salary: ${emp.salary}`);
}

employees.forEach(emp => {
    console.log(`ForEach Employee: ${emp.name}`);
    console.log(`Position: ${emp.position}`);
    console.log(`Salary: ${emp.salary}`);
});

//map,filter, reduce
let highEarners = employees.filter(emp => emp.salary > 55000);
console.log("High Earners:");
highEarners.forEach(emp => {
    console.log(`Name: ${emp.name}, Salary: ${emp.salary}`);
});
let employeeNames = employees.map(emp => emp.name);
console.log(`Employee Names: ${employeeNames.join(", ")}`);
let totalSalary = employees.reduce((total, emp) => total + emp.salary, 0);
console.log(`Total Salary: ${totalSalary}`);

//conditions
let testScore = 85;
if(testScore >= 90) {
    console.log("Grade: A");
} else if(testScore >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}
let my_age = 17;
let access = (my_age >= 18) ? "Granted" : "Denied";
console.log(`Access: ${access}`);
switch(my_age) {
    case 16:
        console.log("You can drive.");
        break;
    case 17:
        console.log("You can get a learner's permit.");
        break;
    case 18:
        console.log("You can vote.");
        break;
    default:
        console.log("Enjoy your youth!");
}

//functions
function add(a, b) {
    return a + b;
}
console.log(`Add Function: 5 + 3 = ${add(5, 3)}`);
const multiply = (a, b) => a * b;
console.log(`Multiply Function: 4 * 6 = ${multiply(4, 6)}`);
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}   
console.log(greet("Alice"));
const square = n => n * n;
console.log(`Square Function: 7^2 = ${square(7)}`);

//object-oriented programming
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getCarInfo() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}
let myCar = new Car("Toyota", "Camry", 2020);
console.log(myCar.getCarInfo());

class ElectricCar extends Car {
    constructor(make, model, year, batteryCapacity) {
        super(make, model, year);
        this.batteryCapacity = batteryCapacity;
    }
    getCarInfo() {
        return `${super.getCarInfo()}, Battery Capacity: ${this.batteryCapacity} kWh`;
    }   
}
let myElectricCar = new ElectricCar("Tesla", "Model 3", 2021, 75);
console.log(myElectricCar.getCarInfo());

//dom manipulation
//selecting elements
console.log(document.getElementById('my-form'));    
const items = document.querySelectorAll('.item');

items.forEach(item => console.log(item.textContent));

//modifying elements
const header = document.querySelector('h1');
header.textContent = "Updated Header";
header.style.color = "blue";

const ul = document.querySelector('.items');
ul.innerHTML += '<li class="item">Item 4</li>';
ul.firstElementChild.style.fontWeight = 'bold';
ul.lastElementChild.style.color = 'red';
ul.children[1].textContent = 'Updated Item 2';
ul.children[2].remove();


//event handling
const button = document.querySelector('.btn');    
button.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Button Clicked!');
    header.textContent = "Button was Clicked!";
    header.style.backgroundColor = "yellow";
});

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const form = document.getElementById('my-form');
form.addEventListener('submit', onSubmit);



function onSubmit(e) {
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === '') {
        alert('Please enter all fields');
    } else {
        ul.innerHTML += `<li>Name: ${nameInput.value}, Email: ${emailInput.value}</li>`;
        nameInput.value = '';
        emailInput.value = '';
    }
}