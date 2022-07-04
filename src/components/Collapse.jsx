import React, { useState } from 'react';
import '../styles/Collapse.css';

export function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <div className="collapse">
      <button className="btn" onClick={() => setIsOpen(false)}>
        {props.title} <i className="fas fa-chevron-up"></i>
      </button>
      {props.content}
    </div>
  ) : (
    <div className="collapse">
      <button className="btn" onClick={() => setIsOpen(true)}>
        {props.title} <i className="fas fa-chevron-down"></i>
      </button>
    </div>
  );
}
