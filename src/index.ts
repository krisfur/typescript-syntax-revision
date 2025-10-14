console.log('TypeScript Syntax Revision Notes')

//console.log("\n");
console.log('============')
console.log('VARIABLES')
console.log('============')
// Variables
const namedString: string = 'This is a const string';
// types allowed: string, number, boolean, any, void, null, undefined, never

console.log(`Formatted string with variable: ${namedString}`);
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

// you can also use the arrow function syntax, as functions are the same as variables
const additionArrow = (a: number, b: number): number => a + b;
// the type of the function is (a: number, b: number) => number

// optionals are denoted with "?"
function optional(a: number, b?: number): number {
    if (b) {
        return a + b;
    } else {
        return a;
    }
}

// you can use "|" for multiple types (union)
export function getId(id: string | number): number {
    if (typeof id === "string") { //this handles the string case
        return parseInt(id);
    }
    return id;
}

console.log(`The ID is ${getId(123)} and has type ${typeof getId(123)}.`)

// you can also do conditionals in line
export function calculateApiCost(numReqs: number, membership?: string) {
    if (!membership){
        return numReqs*0.10
    }
    return numReqs * (membership === "pro" ? 0.03 : 0.05) //if "pro" use first value, otherwise second value
}

console.log(`The API cost for 100 requests for non-members is ${calculateApiCost(100)}`)
console.log(`The API cost for 100 requests for members is ${calculateApiCost(100,"member")}`)
console.log(`The API cost for 100 requests for pro members is ${calculateApiCost(100,"pro")}`)

//default parameters behave as expected
export function calculateApiCostDefault(numReqs: number, membership: string = "free") {
    return numReqs * (membership === "pro" ? 0.03 : 0.05)
}

// you can also use literal types instead of enums
export function move(directon: "up" | "down" | "left" | "right") {
    // some logic
}

// or define your own type for reuse
type Direction = "north" | "south" | "east" | "west";
function moveTyped(direction: Direction) {
    // logic
}

// and you can reuse union types in other types
type WalkingDirection = `walk ${Direction}`; //auto expands to "walk north" | "walk south" | "walk east" | "walk west"
// though you can hit a limit of permutations where TypeScript shouts at you

console.log("\n");
console.log('============')
console.log('ARRAYS, TUPLES, LOOPS')
console.log('============')

console.log("[TO DO]")

console.log("\n");
console.log('============')
console.log('ENUMS, CLASSES, INTERSECTIONS, INTERFACES')
console.log('============')

console.log("[TO DO]")

console.log("\n");
console.log('============')
console.log('BASIC REACT STUFF')
console.log('============')

console.log("[TO DO]")