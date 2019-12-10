import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const btnText = 'Small Button';

function Person() {
  const btn = 'search button bozo';
  const name = 'Molly';
  const lastName = 'Moo';
  return (
    <section>
      <button>{btn}</button>
      <button>{btnText}</button>
      <h2>Bozo Beak</h2>
      <h2>{`${name} ${lastName}`}</h2>
      <h2>{`${name} ${btnText}`}</h2>
      <p>info</p>
      <p>{4 * 4}</p>
      {/* <p>{let x = 6}</p> */}
    </section>
  );
}

ReactDOM.render(<Person />, document.getElementById('root'));
