import React, { useEffect } from 'react';

function Child({ title, forwardedRef }) {
  useEffect(() => {
    console.log(forwardedRef.current, 'child.js');
  }, []);

  return (
    <>
      <p ref={forwardedRef}>{title}</p>
    </>
  );
}

export default Child;
