// Helper functions in React can be used to encapsulate logic that can be reused throughout your application. Here are some best practices when it comes to using helper functions in React, along with examples:

// Use pure functions: Pure functions are functions that have no side effects and return the same output for the same input. This makes them easier to test and reason about.
// Example:

function sum(a, b) {
  return a + b;
}
// Keep helper functions separate from component logic: Keeping helper functions separate from component logic can make your code more modular and easier to read.
// Example:

// helper.js
export function formatName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// component.js
import { formatName } from "./helper";

function Greeting(props) {
  const { firstName, lastName } = props;
  const fullName = formatName(firstName, lastName);

  return <h1>Hello, {fullName}!</h1>;
}
// Use descriptive names: Using descriptive names for your helper functions can make your code more readable and easier to understand.
// Example:

function convertToCamelCase(str) {
  // function logic
}
// Use TypeScript for type safety: If you're using TypeScript, you can use interfaces and type annotations to ensure type safety when working with helper functions.
// Example:

interface Person {
  firstName: string;
  lastName: string;
}

function formatName(person: Person) {
  return `${person.firstName} ${person.lastName}`;
}
// By following these best practices, you can write helper functions that are easier to read, test, and maintain in your React applications.
