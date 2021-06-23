import React, { useEffect } from 'react';

function Child({ title, forwardedRef, handleColor }) {
  useEffect(() => {
    console.log(forwardedRef.current, 'child.js');
  }, [forwardedRef]);

  return (
    <div>
      <p onClick={() => handleColor('red')} ref={forwardedRef}>
        {title}
      </p>
    </div>
  );
}

export default Child;
