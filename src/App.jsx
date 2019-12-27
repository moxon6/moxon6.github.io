import React, { useEffect, useState } from 'react';
import './App.scss';
import { getProjects } from './api/github';

import fallback from './placeholder.jpg';
import octocat from './github.png';

export default function App() {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    getProjects().then(setProjects)
  }, [])

  return (
    <div className="App">
      <div className="project-grid">
        {
          projects.map(project => (
            <div className="project">
              <img className="icon" src={project.icon} alt="" onError={e => e.target.src =   fallback }/>
                <div className="corner-container" >
                  <img className="octocat" src={octocat} alt="" />
                </div>
                <div className="project-title">{project.title} </div>
              </div>
          ))
        }
      </div>
    </div>
  );
}