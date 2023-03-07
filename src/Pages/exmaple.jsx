// When it comes to building pages in React, there are several best practices that can help make your code more efficient, maintainable, and scalable. Here are some examples:

// Use a component-based architecture: Breaking your page down into smaller, reusable components makes your code more modular and easier to manage. It also makes it easier to reuse components across different pages.
// Example:

function Header() {
  return <h1>My Page</h1>;
}

function Sidebar() {
  return (
    <div>
      <ul>
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
      </ul>
    </div>
  );
}

function Content() {
  return <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>;
}

function Page() {
  return (
    <div>
      <Header />
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <Content />
        </div>
      </div>
    </div>
  );
}
// Use routing to manage navigation: Using a routing library like React Router makes it easy to manage navigation between different pages in your application. It also allows you to easily pass parameters and query strings between pages.
// Example:

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Page() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}
// Use lazy loading for performance: Lazy loading components that are not immediately needed can improve the performance of your application by reducing the amount of code that needs to be loaded upfront.
// Example:

import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Suspense>
    </Router>
  );
}
