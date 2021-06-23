import React, { useRef, useEffect } from 'react';
import Child from './child';

function Parent() {
  const childRef = useRef(null);

  useEffect(() => {
    console.log(childRef.current, 'parent.js');
  }, []);

  return <Child forwardedRef={childRef} title='Passing refs' />;
}

export default Parent;
