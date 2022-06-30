import React, { useState } from 'react';
import '../styles/Accordion.css';

export function Accordion(props) {
  const [isOpen, setIsOpen] = useState(true);

  return isOpen ? (
    <div className="accordion">
      <button className="btn" onClick={() => setIsOpen(false)}>
        {props.title} <i className="fas fa-chevron-down"></i>
      </button>
    </div>
  ) : (
    <div className="accordion">
      <button className="btn" onClick={() => setIsOpen(true)}>
        {props.title} <i className="fas fa-chevron-up"></i>
      </button>
      {props.content}
    </div>
  );
}
