import React, { useEffect, useState } from 'react';
import './App.scss';
import { getProjects } from './api/github';

export default function App() {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    getProjects().then(setProjects)     
  }, [])

  return (
    <div className="App">
      <pre>
        {JSON.stringify(projects, null, 2)}
      </pre>
    </div>
  );
}