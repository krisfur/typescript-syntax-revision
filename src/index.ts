console.log('TypeScript Syntax Revision Notes')

//console.log("\n");
console.log('============')
console.log('VARIABLES')
console.log('============')
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
console.log('============')
console.log('FUNCTIONS, UNIONS, CONDITIONALS, OPTIONALS')
console.log('============')

// you define with types, you can skip the return type to have it inferred instead
function addition(a: number, b: number): number {
    return a + b;
}
console.log(addition(9,10));

// you can also use the arrow function syntax, as functions are the same as variables
const additionArrow = (a: number, b: number): number => a + b;
// the type of the function is (a: number, b: number) => number
console.log(additionArrow(2,2))

// optionals are denoted with "?"
function optional(a: number, b?: number): number {
    if (b) {
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

console.log(`The ID is ${getId(123)} and has type ${typeof getId(123)}.`)

// you can also do conditionals in line
export function calculateApiCost(numReqs: number, membership?: string) {
    if (!membership){
        return numReqs*0.10;
    }
    return numReqs * (membership === "pro" ? 0.03 : 0.05); //if "pro" use first value, otherwise second value
}

console.log(`The API cost for 100 requests for non-members is ${calculateApiCost(100)}`)
console.log(`The API cost for 100 requests for members is ${calculateApiCost(100,"member")}`)
console.log(`The API cost for 100 requests for pro members is ${calculateApiCost(100,"pro")}`)

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
console.log('ARRAYS, TUPLES, LOOPS');
console.log('============');

// An array that can only hold numbers
let numbers: number[] = [10, 20, 30];
console.log(numbers[0]) //print element 0

// An array that can only hold strings
let fruits: string[] = ["apple", "banana", "cherry"];
console.log(fruits.slice(1)) //print from index 1 onward

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

console.log("\n");
console.log('============')
console.log('ENUMS, CLASSES, INTERSECTIONS, INTERFACES')
console.log('============')

console.log("[TO DO]")