import React from 'react';
import Title from '../components/Title';
import NavBar from '../components/NavBar';


function About({ setPage }) {
  return (
    <div className="About">
        <Title />

        <NavBar setPage={setPage} />
    </div>
  );
}

export default About;