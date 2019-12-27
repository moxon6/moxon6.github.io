import React from 'react';
import './Panel.scss';

const Panel = ({ children, title, className }) => (
    <div className={`panel ${className}`}>
        <div className="title">
            {title}
        </div>
        {children}
    </div>
)

export default Panel;