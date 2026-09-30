//Component that increments a number every time a button is clicked.
import { useState } from 'react';
import { Button } from 'react-bootstrap';
const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  //decrement function that decrements the count by 1
  const decrement = () => {
    setCount(count - 1);
  };
  //reset function that resets the count to 0
  const reset = () => {
    setCount(0);
  };
  return (
    <div className="d-flex gap-3 mt-5">
      <h2>Counter: {count}</h2>
      <br />
      <Button variant="primary" onClick={increment}>
        Increment
      </Button>
      <Button variant="secondary" onClick={decrement}>
        Decrement
      </Button>
      <Button variant="danger" onClick={reset}>
        Reset
      </Button>
    </div>
  );
};

export default Counter;