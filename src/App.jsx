import React, { useEffect, useState, useCallback } from 'react';
import './App.scss';
import { getProjects } from './api/github';
import background2 from './background2.jpg';
import Panel from './components/Panel';
import ProjectEntry from './components/ProjectEntry';

document.addEventListener('keyup', (e) => {
  if (e.code === "ArrowUp") window.decrement()
  else if (e.code === "ArrowDown") window.increment()
});

export default function App() {

  const [_projects, setProjects] = useState([])
  const [selected, setSelected] = useState(2)
  window.increment = useCallback(() => setSelected((selected + 1) % _projects.length), [_projects.length, selected])
  window.decrement = useCallback(() => setSelected((selected + _projects.length - 1) % _projects.length), [_projects.length, selected])

  useEffect(() => {
    getProjects().then(setProjects)
  }, [])

  const projects = _projects.map((project, i) => (i === selected ? { ...project, selected: true } : project))

  return (
    <div className="App" style={{ background: `url(${background2})` }}>
      <div className="projects">
        <Panel className="" title="Projects">
          {
            projects.map((project, index) => (
              <ProjectEntry project={project} index={index} setSelected={setSelected} />
            ))
          }
        </Panel>
        <Panel title="Preview Panel">

        </Panel>
      </div>
    </div>
  );
}