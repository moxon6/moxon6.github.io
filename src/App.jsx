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
    getProjects().then(projects => setProjects([...projects, ...projects, ...projects, ...projects]))
  }, [])

  const projects = _projects.map((project, i) => (i === selected ? { ...project, selected: true } : project))

  return (
    <div className="App" style={{ background: `url(${background2})` }}>
      <div className="projects">
        <div className="projects-panel-container">
          <Panel title="Projects">
            {
              projects.map((project, index) => (
                <ProjectEntry project={project} index={index} setSelected={setSelected} />
              ))
            }
          </Panel>
        </div>
        <div className="details-panel-container">

          <Panel title="Details">
            <div className="detail-panel-image">
              <img src={(projects[selected] || {}).icon} alt=""/>
            </div>
          </Panel>
        </div>
        <div className="preview-panel-container">

          <Panel title="Preview">

          </Panel>
        </div>

      </div>
    </div>
  );
}