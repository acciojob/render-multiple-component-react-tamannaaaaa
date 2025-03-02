import React from "react";
import '../styles/App.css';

const projects = [
  { name: "AI Assistant", description: "An AI-powered virtual assistant to help with daily tasks." },
  { name: "Smart Home Automation", description: "A system that automates home appliances using IoT." },
  { name: "E-Learning Platform", description: "An online platform offering courses and interactive learning." }
];

const Project = ({ name, description }) => {
  return (
    <div>
      <h1 data-ns-test="project-name">{name}</h1>
      <h6 data-ns-test="project-description">{description}</h6>
    </div>
  );
};

const App = () => {
  return (
    <div id="main">
      <div className="ns-wrapper">
        {projects.map((project, index) => (
          <Project key={index} name={project.name} description={project.description} />
        ))}
      </div>
    </div>
  );
};

export default App;
