import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Movies from './Components/movies';
import Counters from './Components/counters';

function App() {
  return (
    <div className="col-md-12">
      <section>
        <div>
          <Movies />
        </div>
      </section>
      <section className="col-md-12">
        <div>
          <Counters />
        </div>
      </section>
    </div>
    
    
  );
}

export default App;
