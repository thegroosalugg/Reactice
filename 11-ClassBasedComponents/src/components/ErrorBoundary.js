import { Component } from "react";

// Error boundaries are a feature in React that allow components to catch JavaScript errors anywhere in their child component tree,
// log those errors, and display a fallback UI instead of crashing the entire application.
// In class-based components, error boundaries are implemented using special lifecycle methods provided by React.

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>OOPS, YOU DUN GOOFED!</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
