import React, { useRef } from 'react';

export default function App25() {
  const divRef = useRef(null);
  const handleColorChange = () => {
    divRef.current.style.color = 'blue';
  };
  return (
    <div ref={divRef}>
      <p>Hello! Welcom to Mars</p>
      <button onClick={handleColorChange}>Click</button>
    </div>
  );
};
