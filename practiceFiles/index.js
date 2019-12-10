import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

function Books() {
  return (
    <section className="books">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <CoverImage />
      <Title />
      <Author />
    </article>
  );
};

const CoverImage = () => (
  <img
    width="200"
    src="https://m.media-amazon.com/images/I/71N4oeWwYlL._AC_UY327_FMwebp_QL65_.jpg"
    alt="donkey book"
  />
);

const Title = () => <h1 style={{ fontSize: '2rem' }}>The Wonkey Donkey</h1>;

const authorStyle = {
  letterSpacing: '5px',
  color: 'green'
};

const Author = () => <p style={authorStyle}>by Craig Smith</p>;

ReactDOM.render(<Books />, document.getElementById('root'));
