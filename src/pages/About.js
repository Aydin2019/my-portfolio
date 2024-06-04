/* About.js
 * File name: About.js
 * Student's Name: Ajmal Afzalzada
 * StudentID: 301413451
 * Date: June/4th/2024
 */

import React from 'react';
import profilePic from '../assets/profile.jpg';

const About = () => {
  return (
    <div>
      <h1>About Me</h1>
      <img src={profilePic} alt="Profile" />
      <p>Hi, I'm Aj Afzalzada. I'm a Realtor .</p>
      <a href="/resume.pdf" download>Download Resume</a> {/* Add your resume to the public folder */}
    </div>
  );
};

export default About;
