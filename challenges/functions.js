// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/
function consume(a, b, cb) {
  return cb(a, b);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add(num1, num2) {
  return num1 + num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function greeting(firstName, lastName) {
  return `Hello ${firstName} ${lastName}, nice to meet you!`;
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
// console.log(consume(2, 2, add)); // 4
// console.log(consume(10, 16, multiply)); // 160
// console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!
console.log(consume(2, 2, add));
console.log(consume(10, 16, multiply));
console.log(consume("Mary", "Poppins", greeting));

// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation: 
/*  
- First, We difined the 'myFunction()' function in the global scope and the we created the variable 'internal' inside its scope
- We then, difined the function 'nestedFunction()' inside its scope as well.
- Inside the function 'nestedFunction()' we're accessing the variable 'internal' which is outside of its scope.

- The reason why 'nestedFunction()' can access the variabel 'internal' is because,
we inclosed it into the function and made it private to that function.
So when the variable 'internal' gets destroyed in the outter scope, The function 'nestedFunction()'
still have access to it, Since it inclosed it. That's why it's called a Closure.
*/

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
