// Calculator function
const calculator = (func, ...args) => {
    // Verify and validate the number of arguments allowed
    const expectedArgs = func.length; // Number of expected arguments for the provided function
    if (args.length !== expectedArgs) {
      throw new Error(`Expected ${expectedArgs} arguments, got ${args.length}`);
    }
  
    // Execute the provided function with the given arguments
    return func(...args);
  };
  
  // Test functions
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;
  
  const celsiusToFahrenheit = celsius => (celsius * 9/5) + 32;
  const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5/9;
  
  const square = x => x * x;
  const circleArea = radius => Math.PI * radius * radius;
  
  // Tests
  try {
    console.log(calculator(add, 5, 3)); // Output: 8
    console.log(calculator(subtract, 10, 4)); // Output: 6
    // console.log(calculator(multiply, 2, 6)); // Output: 12
    // console.log(calculator(divide, 20, 4)); // Output: 5
  
    // console.log(calculator(celsiusToFahrenheit, 0)); // Output: 32
    // console.log(calculator(fahrenheitToCelsius, 32)); // Output: 0
  
    // console.log(calculator(square, 4)); // Output: 16
    // console.log(calculator(circleArea, 5)); // Output: ~78.54
  } catch (error) {
    console.error(error.message);
  }
  