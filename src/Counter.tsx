import React, { useEffect, useRef, useState } from "react";

const Counter: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  const increment = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const decrement = () => {
    setValue((prevValue) => prevValue - 1);
  };

  const renderTimes = useRef<number>(0);

  useEffect(() => {
    renderTimes.current = renderTimes.current + 1;
  }, [value]);

  const ref = useRef<HTMLInputElement>(null!);

  const focusInput = () => {
    ref.current.focus();
  };

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This component was re-render {renderTimes.current} times</div>
      <input type="text" ref={ref} />
      <button onClick={focusInput}>Click me</button>
    </div>
  );
};

export default Counter;
