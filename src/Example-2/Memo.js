import React from 'react';
import { Count } from './Count';

import './Memo.css';

class Memo extends React.Component {
  state = {
    text: '',
  };

  setText = t => {
    this.setState({ text: t });
  }

  render() {
    const { text } = this.state;
    return (
      <div className="Memo">
      <div className="blackboard">
          <p className="text-holder">
            <input type="text" placeholder="write something ..." value={text} onChange={e => this.setText(e.target.value)} />
          </p>
        <div className="CountContainer">
          <div className="Count">
            <h2>React Memo</h2>
            <Count />
          </div>

          <div className="Count">
            <h2>Without memoization</h2>
            <Count />
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Memo;
