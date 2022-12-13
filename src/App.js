import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Calculator from './Components/Calculator';
import Home from './Components/Home';
import Quote from './Components/Quote';

const App = () => (
  <>
    <header>
      <h1>Math Magicians</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/calculator">Calculator</Link></li>
          <li><Link to="/quote">Quote</Link></li>
        </ul>
      </nav>
    </header>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </>
);
export default App;
