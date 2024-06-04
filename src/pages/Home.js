// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>
        Hi, I'm Aj Afzalzada, a 36-year-old full-time realtor and dedicated
        family man, happily married with two wonderful kids. 
        I have lived in Canada since September 1991, 
        where I've developed a deep passion for coding and technology.

        Currently, I'm enrolled in the Software Engineering Technology program 
        with a focus on Artificial Intelligence, 
        now in my third semester. My journey into the world of software engineering 
        has been fueled by my enthusiasm for solving complex problems 
        and creating innovative solutions. Balancing a busy professional life
        and family responsibilities, I am committed to advancing my skills 
        and knowledge in the field of technology.</p>
      <Link to="/about">Learn more about me</Link>
    </div>
  );
};

export default Home;
