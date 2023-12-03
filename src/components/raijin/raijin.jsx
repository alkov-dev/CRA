import React from 'react';
import './raijin.css';

export const Raijin = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="git">
      <a href="https://github.com/raijinhasarrived/raijinhasarrived">
        <h3>Raijin</h3>
      </a>
      <p>We R Testing Btn {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <p>Now text input</p>
      <input data-testid="rainput" type="text" defaultValue="raijinhasarrived" />
    </div>
  );
};
