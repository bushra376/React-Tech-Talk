import React from "react";
import './Memo.css';

// Example # 1
export function Count(){
  const [count, setCount] = React.useState(0);
  const renders = React.useRef(0);

  return (
    <div className="CountDisplay">
      <div>count: {count}</div>
      <div>renders: {renders.current++}</div>
      <button className="button" onClick={() => setCount(c => c + 1)} >increment</button>
    </div>
  );
};
