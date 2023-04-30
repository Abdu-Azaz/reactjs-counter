import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [editable, setEditable] = useState(false);
  const [step, setStep] = useState(1);
  const handleIncrement = (e) =>
    e.target.textContent === "+"
      ? setCount(Math.min(count + step, 100))
      : setCount(Math.max(count - step, 0));

  const handleInputChange = (e) => {
    let value = parseInt(e.target.value);
    if (value !== isNaN && value >= 0) setCount(value);
  };

  return (
    <div className="container">
      <h1>Click The button below to change the count!</h1>
      <button onClick={handleIncrement} className="button">
        +
      </button>

      {editable ? (
        <input
          type="number"
          value={count}
          onChange={handleInputChange}
          onBlur={(e) => {
            setEditable(false);
          }}
          className="input"
        />
      ) : (
        <span onClick={() => setEditable(true)}>
          {count === 0 ? "zero" : count}
        </span>
      )}
      <button onClick={handleIncrement} className="button">
        -
      </button>
      <button onClick={() => setCount(0)} className="button">
        Reset
      </button>
      <div>
        <input
          value={step}
          type="number"
          max={10}
          min={0}
          onChange={(e) => setStep(parseInt(e.target.value))}
          className="input"
        />
      </div>
    </div>
  );
};

export default Counter;
