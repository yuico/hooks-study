import './App.css';
import { useEffect, useRef } from 'react';
import Parent from './components/parent';

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const submitRef = useRef(null);
  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <input
          type='text'
          onKeyDown={firstKeyDown}
          ref={firstNameRef}
          placeholder='Enter first name'
        />
        <input
          type='text'
          onKeyDown={lastKeyDown}
          ref={lastNameRef}
          placeholder='Enter last name'
        />
        <button onKeyDown={submitKeyDown} ref={submitRef}>
          Submit
        </button>
      </header>
      <Parent />
    </div>
  );
}

export default App;
