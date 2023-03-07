// Testing is an important aspect of developing React applications, as it ensures that your code works as expected and helps catch bugs before they make it to production. Here are some best practices when it comes to testing React applications, along with examples:

// Use a testing library: React comes with a built-in testing library called React Testing Library that makes it easy to test your components. You can also use other testing libraries like Jest or Enzyme.
// Example using React Testing Library:

import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
// Write unit tests for components: Unit tests are small tests that ensure that individual components work as expected.
// Example:

import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("renders button text", () => {
  render(<Button text="Click me" />);
  const buttonElement = screen.getByText(/Click me/i);
  expect(buttonElement).toBeInTheDocument();
});
// Write integration tests for pages: Integration tests ensure that all the components on a page work together as expected.
// Example:

import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

test("renders homepage", () => {
  render(<HomePage />);
  const headerElement = screen.getByText(/Welcome to my app/i);
  const buttonElement = screen.getByText(/Click me/i);
  expect(headerElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});
// Use mock data: Using mock data can help ensure that your tests are consistent and not dependent on external APIs or databases.
// Example:

import { render, screen } from "@testing-library/react";
import { getProducts } from "./api";
import ProductList from "./ProductList";

jest.mock("./api");

test("renders product list", async () => {
  const mockProducts = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
  ];
  getProducts.mockResolvedValueOnce(mockProducts);

  render(<ProductList />);

  const product1Element = await screen.findByText(/Product 1/i);
  const product2Element = await screen.findByText(/Product 2/i);

  expect(product1Element).toBeInTheDocument();
  expect(product2Element).toBeInTheDocument();
});
// By following these best practices, you can ensure that your React applications are thoroughly tested and work as expected.
