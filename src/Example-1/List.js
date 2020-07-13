import React from 'react';
import '../App.css';
import list from "./store";

export default function List() {
  return (
    <div className="list">
      {list.map(li => (
        <div id="card-body" key={li.id}>
          <div className="card">
            <h2>{li.name}</h2>
            <p>{li.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
