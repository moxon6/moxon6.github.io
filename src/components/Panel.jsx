import React from 'react';
import './Panel.scss';

const Panel = ({ children, title }) => (
    <div className="panel">
        <div className="title">
            {title}
        </div>
        <div className="content">
            {children}
        </div>
    </div>
)

export default Panel;