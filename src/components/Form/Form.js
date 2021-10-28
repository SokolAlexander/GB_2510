import React, { useRef, useState } from 'react';

export const Form = () => {
  const [value, setValue] = useState('');
  const inputRef = useRef();

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);

    const refValue = inputRef.current.value;
    console.log(refValue);

    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" value={value} onChange={handleChange} />
      <input type="submit" />
    </form>
  )
}