console.log('TypeScript Syntax Revision Notes')

//console.log("\n");
console.log('============');
console.log('VARIABLES');
console.log('============');
// Variables
// const values can be modified but cannot be reassigned
const namedString: string = 'This is a const string';
// could not now do namedString= something else
// types allowed: string, number, boolean, any, void, null, undefined, never

console.log(`Formatted string with variable: ${namedString}`);
// let values can be reassigned, so you could do another count = something else and it would be valid
let count: number = 0;
console.log(`Your count of type ${typeof count} is ${count}`);
count += 1;
console.log(`Your updated count of type ${typeof count} is ${count}`);

console.log("\n");
console.log('============');
console.log('FUNCTIONS, UNIONS, CONDITIONALS, OPTIONALS');
console.log('============');

// you define with types, you can skip the return type to have it inferred instead
function addition(a: number, b: number): number {
    return a + b;
}
console.log(addition(9,10));

// you can also use the arrow function syntax, as functions are the same as variables
const additionArrow = (a: number, b: number): number => a + b;
// the type of the function is (a: number, b: number) => number
console.log(additionArrow(2,2));

// optionals are denoted with "?"
function optional(a: number, b?: number): number {
    if (b) { // if else example
        return a + b;
    } else {
        return a;
    }
}

console.log(optional(25));

// you can use "|" for multiple types (union)
export function getId(id: string | number): number { // "export" allows a function to be callable by other files importing this one
    if (typeof id === "string") { //this handles the string case
        return parseInt(id);
    }
    return id;
}

console.log(`The ID is ${getId(123)} and has type ${typeof getId(123)}.`);

// you can also do conditionals in line
export function calculateApiCost(numReqs: number, membership?: string) {
    if (!membership){
        return numReqs*0.10;
    }
    return numReqs * (membership === "pro" ? 0.03 : 0.05); //if "pro" use first value, otherwise second value
}

console.log(`The API cost for 100 requests for non-members is ${calculateApiCost(100)}`);
console.log(`The API cost for 100 requests for members is ${calculateApiCost(100,"member")}`);
console.log(`The API cost for 100 requests for pro members is ${calculateApiCost(100,"pro")}`);

//default parameters behave as expected
export function calculateApiCostDefault(numReqs: number, membership: string = "free") {
    return numReqs * (membership === "pro" ? 0.03 : 0.05);
}
console.log(`The default API cost for 100 requests is ${calculateApiCostDefault(100)}`);

// you can also use literal types instead of enums
export function move(direction: "up" | "down" | "left" | "right") {
    // some logic
    console.log(`Moving ${direction}`);
}
move("up");

// or define your own type for reuse
type Direction = "north" | "south" | "east" | "west";
function moveTyped(direction: Direction) {
    // logic
    console.log(`Moving ${direction}`);
}
let characterMove: Direction = "north";
moveTyped(characterMove);

// and you can reuse union types in other types
type WalkingDirection = `walk ${Direction}`; //auto expands to "walk north" | "walk south" | "walk east" | "walk west"
// though you can hit a limit of permutations where TypeScript shouts at you
let upWalk: WalkingDirection = "walk north";
console.log(upWalk);

console.log("\n");
console.log('============');
console.log('ARRAYS, TUPLES, LOOPS, HASHMAPS');
console.log('============');

// An array that can only hold numbers
let numbers: number[] = [10, 20, 30];
console.log(numbers[0]); //print element 0

// An array that can only hold strings
let fruits: string[] = ["apple", "banana", "cherry"];
console.log(fruits.slice(1)); //print from index 1 onward

// array methods:
/*
.length - get length of the array as number
.push - append to array
.unshift - prepend to array
.pop - remove the last element and return it
.shift - remove the first element and return it
.indexOf - gives index at which your desired value and be found, -1 if not present
.slice - returns a new array with elements starting from the index
.splice(startIndex, deleteCount, ...itemsToAdd)
 */

fruits = ["apple", "banana", "cherry", "date"];

// Example 1: Remove 1 element at index 2
fruits.splice(2, 1);
console.log(fruits);

// Example 2: Remove 1 element at index 1 and add "blueberry" in its place
let fruits2: string[] = ["apple", "banana", "cherry"];
fruits2.splice(1, 1, "blueberry");
console.log(fruits2);

// Example 3: Just add "apricot" at index 1 (delete 0 elements)
let fruits3: string[] = ["apple", "banana", "cherry"];
fruits3.splice(1, 0, "apricot");
console.log(fruits3);

// tuple is a specific array
let user: [string, number] = ["Alice", 30];

// Accessing index 0 (string)
console.log(user[0].toUpperCase());

// Accessing index 1 (number)
console.log(user[1] + 5);

// they can have more than 2 elements
let userProfile: readonly [string, number, boolean] = ["Max", 28, true];
// readonly prevents the value from being modified

// Destructuring the tuple
const [userName, userAge, isMember] = userProfile;

console.log(userName);  // Outputs: "Max"
console.log(userAge);   // Outputs: 28
console.log(isMember);  // Outputs: true

// loops
// for loop
for (let i = 0; i < 5; i++) {
    console.log(`Current count: ${i}`);
}

// while loop
let loopCount = 0;
while (loopCount < 3) {
    console.log(`Count is ${loopCount}`);
    loopCount++;
}

// do while loop - runs at least once
let doCount = 5;
do {
    console.log(`This runs at least once. Count: ${doCount}`);
    doCount++;
} while (doCount < 3);

// iterating over an array
const fruitList: string[] = ["apple", "banana", "cherry"];

// modern - just values
for (const fruit of fruitList) {
    console.log(fruit.toUpperCase());
    // can use break or continue keywords
}

// functional - with index
fruitList.forEach((fruit, index) => {
    console.log(`Item at index ${index} is ${fruit}`);
    // cannot break the loop early
});

// classic - c style
for (let i = 0; i < fruitList.length; i++) {
    console.log(`Item at index ${i} is ${fruitList[i]}`);
    if (fruitList[i] === "banana") {
        console.log("Found the banana!");
        break; // we can stop the loop
    }
}

// hashmaps
// you can do hashmaps the JS way, or the TS way with a map class

// JS way - keys must be strings, numbers, or symbols
// Define the type using 'Record'
const studentGrades: Record<string, number> = {}; // <keys type, values type>
// add items
studentGrades["Alice"] = 95;
studentGrades.Bob = 82; // dot notation works iff the key is a valid identifier
console.log(studentGrades["Alice"]); // Output: 95
console.log(studentGrades["Charlie"]); // Output: undefined!
// check existence
if ("Bob" in studentGrades) {
  console.log("Bob has a grade.");
}
// remove items
delete studentGrades["Bob"];
// iterating
for (const key in studentGrades) {
  console.log(`${key}: ${studentGrades[key]}`); //pretty obvious syntax
}

// TS way - keys can be any type, faster at adding and removing, preserves insert order
// Map<KeyType, ValueType>
const inventory = new Map<string, number>();
// add items
inventory.set("Apple", 50);
inventory.set("Banana", 100);
// chaining is possible!
inventory.set("Orange", 20).set("Mango", 5);
// retrieve items
console.log(inventory.get("Apple")); // Output: 50
console.log(inventory.get("Grapes")); // Output: undefined
// check existence
if (inventory.has("Banana")) {
    console.log("We have bananas!");
}
// delete items
inventory.delete("Apple");
// get size
console.log(inventory.size); // Output: 3
// iterating
for (const [fruit, count] of inventory) {
  console.log(`${fruit}: ${count}`);
}


console.log("\n");
console.log('============');
console.log('ENUMS, CLASSES, INTERSECTIONS, INTERFACES');
console.log('============');

// @ts-ignore unused enum values
enum Mode {
    online,
    offline
}

let gameMode: Mode = Mode.offline;
console.log(`Game mode is: ${gameMode}`); // Outputs: 1
console.log(`Game mode name: ${Mode[gameMode]}`); // Outputs: offline

// Enum with custom numeric values
// @ts-ignore unused enum values
enum HttpStatus {
    OK = 200,
    Created = 201,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404,
    InternalServerError = 500
}

function handleResponse(status: HttpStatus) {
    switch (status) { // switch statement example
        case HttpStatus.OK:
            console.log("Request successful!");
            break;
        case HttpStatus.NotFound:
            console.log("Resource not found.");
            break;
        case HttpStatus.InternalServerError:
            console.log("Server error occurred.");
            break;
        default:
            console.log(`Status code: ${status}`);
    }
}

handleResponse(HttpStatus.OK);
handleResponse(HttpStatus.NotFound);
handleResponse(401);

// Const enum - more performant, inlined at compile time
// @ts-ignore unused enum values
const enum Color {
    Red = "#FF0000",
    Green = "#00FF00",
    Blue = "#0000FF"
}

let backgroundColor = Color.Blue;
console.log(`Background color: ${backgroundColor}`);
// you can also mix value types, but not recommended practice

// Using enums in functions with reverse mapping (numeric enums only)
function getStatusName(code: number): string | undefined {
    return HttpStatus[code];
}

console.log(`Status 200 is: ${getStatusName(200)}`); // Outputs: OK
console.log(`Status 404 is: ${getStatusName(404)}`); // Outputs: NotFound


// Class - a blueprint for creating objects with properties AND methods
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hello, I'm ${this.name} and I'm ${this.age} years old.`;
    }
}

const person1 = new Person("Alice", 30); // syntax resembling C++ before C++11
console.log(person1.greet());

// TypeScript also has inheritance, as annoying as the existence of it is

class Warrior extends Person {
    weapon: string;

    constructor(name: string, age: number, weapon: string) {
        super(name,age);
        this.weapon = weapon;
    }

    // Override parent method
    greet(): string {
        return `Hello, I'm ${this.name}, I'm ${this.age} years old, and I wield a ${this.weapon}.`;
    }

    // Add a new method specific to Warrior
    attack(): string {
        return `${this.name} attacks with their ${this.weapon}!`;
    }
}

const warrior1 = new Warrior("Thor", 1500, "hammer");
console.log(warrior1.greet()); // Uses overridden method
console.log(warrior1.attack()); // Uses Warrior-specific method

// Interface - defines the structure/shape of an object WITHOUT methods
interface Product { // resembles C style structs
    id: number;
    name: string;
    price: number;
}

const laptop: Product = {
    id: 1,
    name: "MacBook Pro",
    price: 1999
};

console.log(`Product: ${laptop.name}, Price: $${laptop.price}`);

// Classes can also inherit (implement) interfaces
interface Drivable {
    speed: number;
    drive(): void;
}

class Car implements Drivable {
    speed: number;

    constructor(speed: number) {
        this.speed = speed;
    }

    drive(): void {
        console.log(`Driving at ${this.speed} km/h`);
    }
}

const myCar = new Car(120);
myCar.drive();

// Intersection - combines multiple types into one (must have ALL properties)
type HasName = {
    name: string;
};

type HasEmail = {
    email: string;
};

type User = HasName & HasEmail; // Intersection: must have both name AND email

const user1: User = {
    name: "Bob",
    email: "bob@example.com"
};

console.log(`User: ${user1.name}, Email: ${user1.email}`);

console.log("\n");
console.log('============');
console.log('GENERICS, CASTING, NULL, ASYNC, SPREAD');
console.log('============');

// Generics - reusable function for many types, without specifying unions
function identity<T>(arg: T): T { return arg; } // think C++ templates

console.log(identity(2));
console.log(identity("cat"));

// Casting - tell TypeScript you know the expected type so it does not need to check
let someValue: any = "hello";
let strLength: number = (someValue as string).length;
console.log(strLength);

// Async
async function fetchData(): Promise<string> {
    return "data";
}

console.log(`Data received: ${fetchData()}`);

// Spread operator - merge arrays and objects
let arr1 = [1,2,3]
let arr2 = [...arr1,4,5]
console.log(arr2)

// Null handling

// null and undefined are different types in TypeScript
let notAssigned: undefined = undefined;
let empty: null = null;

console.log(`undefined: ${notAssigned}, null: ${empty}`);

// Optional chaining (?.) - safely access nested properties
type Address = {
    street: string;
    city: string;
};

type Customer = {
    name: string;
    address?: Address; // address is optional
};

const customer1: Customer = { name: "John" };
const customer2: Customer = {
    name: "Jane",
    address: { street: "123 Main St", city: "Boston" }
};

// Without optional chaining (would cause error if the address is undefined)
// console.log(customer1.address.city); // ERROR!

// With optional chaining - returns undefined if the address doesn't exist
console.log(`Customer 1 city: ${customer1.address?.city}`); // undefined
console.log(`Customer 2 city: ${customer2.address?.city}`); // Boston

// Nullish coalescing (??) - provides a default value for null/undefined
const city1 = customer1.address?.city ?? "Unknown City";
const city2 = customer2.address?.city ?? "Unknown City";

console.log(`Customer 1 lives in: ${city1}`); // Unknown City
console.log(`Customer 2 lives in: ${city2}`); // Boston

// Difference between ?? and ||
// || treats 0, "", false as falsy and uses default
// ?? only treats null/undefined as nullish

let count1 = 0;
let count2: number | null = null;

console.log(`Using ||: ${count1 || 100}`); // 100 (wrong! 0 is valid)
console.log(`Using ??: ${count1 ?? 100}`); // 0 (correct!)
console.log(`Using ?? with null: ${count2 ?? 100}`); // 100 (correct!)

// Non-null assertion operator (!) - tells TypeScript "trust me, this isn't null"
// Use with caution - you're disabling type safety!
let maybeString: string | undefined = "Hello";
console.log(maybeString!.toUpperCase()); // HELLO
// If maybeString was actually undefined, this would crash at runtime!

console.log("\n");
console.log('============');
console.log('IMPORTS/EXPORTS');
console.log('============');

// You can import any functions or classes that have the export keyword
import { importedAddition } from './functions';

// You can also import multiple things at once:
// import { function1, function2, MyClass } from './functions';

// Or import everything as a namespace:
// import * as Functions from './functions';
// call it as Functions.importedAddition(5,7);

console.log(`Imported addition: 5 + 7 = ${importedAddition(5, 7)}`);

// default functions

// you can also have default imports, meant for when only one thing is meant to be imported from a file
// export default function.....

// you import them with giving them your own name for it
// import iNamedThisCarl from './functions';
// this will import the default function from functions.ts and name it iNamedThisCarl to use that as the function name in your code