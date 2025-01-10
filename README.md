# Incorrect Usage of useState Hook in React
This repository demonstrates a common mistake when using the `useState` hook in React. Directly modifying the state variable without using the setter function (`setCount` in this case) will not trigger a re-render, leading to unexpected behavior.

## Bug Description
The `incrementCountWrong` function directly increments the `count` variable.  This does not update the React state, so the UI will not reflect the change. The `incrementCount` function shows the correct usage.

## How to Reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe that clicking "Increment (Wrong)" does not update the counter displayed on the screen.

## Solution
Always use the setter function provided by `useState` to update the state. This ensures that React knows to re-render the component and update the UI accordingly.