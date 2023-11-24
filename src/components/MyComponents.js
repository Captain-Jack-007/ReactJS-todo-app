import { useState } from 'react';

function MyComponent({ image, buttonName }) {
  const [number, setNumber] = useState(100);

  function HandleNumber() {
    const randomNumber = Math.floor(Math.random() * 100);
    setNumber(randomNumber);
  }
  return (
    <div className="card">
      <img src={image} />
      <h1>{number}</h1>

      <h1>{buttonName}</h1>
    </div>
  );
}
export default MyComponent;
