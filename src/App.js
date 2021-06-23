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

  const firstKeyDown = (e) => {
    if (e.key === 'Enter' && e.target.value !== '') {
      lastNameRef.current.focus();
    }
  };
  const lastKeyDown = (e) => {
    if (e.key === 'Enter' && e.target.value !== '') {
      submitRef.current.focus();
    }
  };
  const submitKeyDown = () => {
    alert('Form submitted');
  };

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
