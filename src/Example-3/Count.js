import React from "react";
import './Memo3.css';

export function Count({ onOdd }){
  const [count, setCount] = React.useState(0);
  const renders = React.useRef(0);

  return (
    <div className="">
      <div>count: {count}</div>
      <div>renders: {renders.current++}</div>
      <button className="button" onClick={() => {
        if (count % 2 !== 0) {
          onOdd();
        }
        setCount(c => c + 1);
        }}
      >
          increment count
        </button>
    </div>
  );
};

export const MemoizedCount = React.memo(Count);