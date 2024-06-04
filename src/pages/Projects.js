/* Project.js
 * File name: Project.js
 * Student's Name: Ajmal Afzalzada
 * StudentID: 301413451
 * Date: June/4th/2024
 */

import React from 'react';

const projects = [
  {
    title: 'Web Application Development Portfolio Site',
    description: 'Create a personal portfolio website using React for COMP229 course.',
    image: '/images/image1.jpg',
  },
  {
    title: 'Single-row functions & Subquery SQL Assignment',
    description: 'Working on SQL queries involving single-row functions and subqueries for an assignment.',
    image: '/images/image2.jpg',
  },
  {
    title: 'Requirements Analysis Document for COMP 246',
    description: 'Preparing a Requirements Analysis Document for COMP 246 course project.',
    image: '/images/image3.jpg',
  },
];

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
