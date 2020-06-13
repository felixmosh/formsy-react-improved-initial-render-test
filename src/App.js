import React, { useState } from 'react';
import './styles.css';
import Input from './Input';
import CurrentFormsy from 'formsy-react';
import ImprovedFormsy from './improved-formsy/formsy-react.umd';

export default function App() {
  const [isValid, setValid] = useState(false);
  const [counter, setCounter] = useState(150);

  const Formsy = window.location.search.includes('improved') ? ImprovedFormsy : CurrentFormsy;

  return (
    <div className="App">
      <div>{isValid ? 'valid' : 'invalid'}</div>
      <div>total: {counter}</div>
      <button onClick={() => setCounter(counter + 1)}>Add item</button>
      <Formsy onValid={() => setValid(true)} onInvalid={() => setValid(false)}>
        {Array.from(Array(counter)).map((_, i) => (
          <Input name={'name_' + i} required={true} validations="isNumeric" key={i}
                 value={i === 0 ? undefined : `${i}`} />
        ))}
      </Formsy>
    </div>
  );
}
