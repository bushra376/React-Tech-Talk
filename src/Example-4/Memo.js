import React from 'react';
import { MemoizedCount } from './Count';
import './Memo4.css';

function Memo() {
  const [text, setText] = React.useState("");
  const [isMorning, setTime] = React.useState(true);

  const onOdd = React.useCallback(() => setText(''), [setText]);
  const data = { isMorning: false };
  return (
    <>
      <div className="Memo">
        <input className="input" value={text} onChange={e => setText(e.target.value)} />
          <div className="Count">
            <h2>React Memo</h2>
            <MemoizedCount onOdd={onOdd} data={data} />
          </div>
      </div>
      
      <div className="toggleWrapper">
        <input type="checkbox" className="dn" id="dn" value={isMorning} onChange={e => setTime(!e.target.checked)}/>
        <label htmlFor="dn" className="toggle">
          <span className="toggle__handler">
            <span className="crater crater--1"></span>
            <span className="crater crater--2"></span>
            <span className="crater crater--3"></span>
          </span>
          <span className="star star--1"></span>
          <span className="star star--2"></span>
          <span className="star star--3"></span>
          <span className="star star--4"></span>
          <span className="star star--5"></span>
          <span className="star star--6"></span>
        </label>
      </div>
    </>
  );
}

export default Memo;
