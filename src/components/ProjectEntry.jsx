import React from 'react';
import './ProjectEntry.scss';

export default ({ project, index, setSelected }) => (
    <div
        className={`project-entry-container ${project.selected ? "selected" : ''}`}
        onClick={() => setSelected(index)}
    >
        <div className="line-number">
            {project.selected ? "> " : ""}
            {index + 1}
        </div>
        <div className="project-entry">
            {project.title}
        </div >
    </div>
)