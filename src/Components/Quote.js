import React, { useEffect, useState } from 'react';

const quotes = [
  {
    paragraph: 'The art of doing mathematics is finding that special case that contains all the germs of generality.',
    author: 'David Gilbert',
  },

  {
    paragraph: 'So far as the theories of mathematics are about reality, they are not certain; so far as they are certain, they are not about reality.',
    author: 'Albert Einstein',
  },

  {
    paragraph: 'You know, for a mathematician, he did not have enough imagination. But he has become a poet and now he is fine.',
    author: 'David Hilbert',
  },

  {
    paragraph: 'Some people believe in imaginary friends. I believe in imaginary numbers.',
    author: 'R.M. ArceJaeger',
  },

  {
    paragraph: 'Do not ask whether a statement is true until you know what it means.',
    author: 'Errett Bishop',
  },

  {
    paragraph: 'Calculus is all about making curvy things look straight',
    author: 'Anonymous Professor',
  },
];

const Quote = () => {
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 6),
  );

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 6);
    setRandomNumber(randomNumber);
  }, []);

  return (
    <section className="quoteSection">
      <p>
        &#34;
        {quotes[randomNumber].paragraph}
        &#34;
        &#160;
        <span>
          &#45;&#45;
          {quotes[randomNumber].author}
          ;
        </span>
      </p>
    </section>
  );
};
export default Quote;
