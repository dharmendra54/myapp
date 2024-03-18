import React, { useRef } from 'react';
import Custominput from './Custominput';

const Parent = () => {
  const inputRef = useRef(null);
  const handleFocusButtonClick = () => {
    // Call the 'focusInput' method of the child component
    // if (inputRef.current) {
      inputRef.current.focusInput();
    // }
  };
  return (
    <div>
      {/* Child component with the ref */}
      <Custominput ref={inputRef} placeholder="Enter your name" />
      <button onClick={handleFocusButtonClick}>Focus Input</button>
    </div>
  );
};
export default Parent;