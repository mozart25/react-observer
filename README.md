# react-observer-pattern

A simple Observer pattern implementation for React applications. This library provides `Subject` and `Observer` classes that allow you to implement the observer pattern and manage state updates across multiple React components without a global state management library.

## Installation

You can install this package via npm:

```bash
npm install @mozart25/react-observer
```

Usage

1. Example: Using react-observer-pattern in a React application
   Here’s an example of how you can use the Subject and Observer classes in a React application to manage shared state between components.

```javascript
// App.js
import React, { useEffect, useState } from "react";
import { Subject, Observer } from "@mozart25/react-observer";

// Create a subject instance
const subject = new Subject();

// ObserverComponent: A component that subscribes to the Subject
const ObserverComponent = ({ label }) => {
  const [state, setState] = useState("Initial State");

  useEffect(() => {
    // Create a new Observer for each component and subscribe it to the Subject
    const observer = new Observer(setState);
    subject.subscribe(observer);

    // Cleanup function to unsubscribe the observer when the component unmounts
    return () => {
      subject.unsubscribe(observer);
    };
  }, []);

  return (
    <div>
      <p>
        {label}: {state}
      </p>
    </div>
  );
};

// App component
const App = () => {
  return (
    <div>
      <h1>Observer Pattern Example in React</h1>

      {/* Components that listen to the same Subject */}
      <ObserverComponent label="Component 1" />
      <ObserverComponent label="Component 2" />

      {/* Button to trigger state change */}
      <button onClick={() => subject.notify("Updated State")}>
        Notify All
      </button>
    </div>
  );
};

export default App;
```

Key Features:

- Subject: Manages a list of Observers and notifies them when state changes.
- Observer: Each observer subscribes to the Subject and updates its state when notified.
- This example demonstrates how multiple React components can subscribe to the same Subject and respond to state changes.
