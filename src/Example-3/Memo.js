import React from 'react';
import { MemoizedCount } from './Count';
import './Memo3.css';

function Memo() {
  const [text, setText] = React.useState("");
  return (
    <div className="Memo">
      <input className="input" value={text} onChange={e => setText(e.target.value)} />
        <div className="Count">
          <h2>React Memo</h2>
          <MemoizedCount onOdd={() => {
            setText('');
          }} />
        </div>
    </div>
  );
}

export default Memo;
