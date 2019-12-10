import React from 'react';
import ReactDOM from 'react-dom';

function People() {
  const friends = [
    {
      name: 'Bozo Beaker',
      job: 'Developer',
      age: 47,
      company: 'apple'
    },
    {
      name: 'Molly Moo',
      job: 'Doggy',
      age: 7,
      company: 'dog company'
    },
    {
      name: 'Josey',
      job: 'Doggy Doo',
      age: 1,
      company: 'dog company'
    }
  ];
  return (
    <section>
      <Person person={friends[0]}>
        <p>Some props.children info</p>
      </Person>
      <Person person={friends[1]} />
      <Person person={friends[2]} />
    </section>
  );
}

const Person = props => {
  const { name, job, age, company } = props.person;
  const { children } = props;

  console.log(props);

  return (
    <article>
      <h1>{name}</h1>
      <p>{job}</p>
      <p>{age}</p>
      <p>{company}</p>
      {children}
      <hr />
    </article>
  );
};

ReactDOM.render(<People />, document.getElementById('root'));
