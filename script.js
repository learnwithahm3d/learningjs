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