```javascript
// Wrong usage of useState hook
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1); // This is correct
  };

  const incrementCountWrong = () => {
    count++; // This is wrong. It doesn't trigger re-render
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment (Correct)</button>
      <button onClick={incrementCountWrong}>Increment (Wrong)</button>
    </div>
  );
}

export default MyComponent;
```