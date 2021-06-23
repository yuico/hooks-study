import React, { useRef, useEffect } from 'react';
import Child from './child';

function Parent() {
  let childRef = useRef(null);

  const handleColor = (color) => {
    childRef.current.style.color = color;
  };

  useEffect(() => {
    console.log(childRef.current, 'parent.js');
  }, []);

  return (
    <Child
      handleColor={handleColor}
      forwardedRef={childRef}
      title='Passing refs'
    />
  );
}

export default Parent;
