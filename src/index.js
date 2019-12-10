import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const Person = ({ img, name, job, children }) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <article className="person">
      <img src={url} alt="person pic" />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

const PersonList = () => {
  return (
    <section className="person-list">
      <Person img="10" name="Bozo" job="Developer" />
      <Person img="20" name="Molly" job="Doggy">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, qui?
        </p>
      </Person>
      <Person img="30" name="Josey" job="Doggy Doo" />
    </section>
  );
};

ReactDOM.render(<PersonList />, document.getElementById('root'));
