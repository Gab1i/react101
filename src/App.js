import React, {useState} from 'react';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div>
      {page === 'home' && <Home setPage={setPage} />}
      {page === 'about' && <About setPage={setPage} />}
    </div>
  );
}

export default App;