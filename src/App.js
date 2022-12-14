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
          <li><Link to="/math-magicians">Home</Link></li>
          <li><Link to="/math-magicians/calculator">Calculator</Link></li>
          <li><Link to="/math-magicians/quote">Quote</Link></li>
        </ul>
      </nav>
    </header>

    <Routes>
      <Route index element={<Home />} />
      <Route path="/math-magicians" element={<Home />} />
      <Route index element={<Home />} />
      <Route path="/math-magicians/calculator" element={<Calculator />} />
      <Route path="/math-magicians/quote" element={<Quote />} />
    </Routes>
  </>
);
export default App;
