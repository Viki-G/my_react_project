import React, { useEffect, useState } from 'react';
import './Process.css'; 
import Navbar from './Navbar';

function Process()
{
 const [processSteps, setProcessSteps] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3005/process')
      .then((res) => res.json())
      .then((data) => setProcessSteps(data))
      .catch((err) => console.error("Error fetching process steps:", err));
  }, []);

  return (
    <>
    <Navbar/>
   <div className="process-container">
      <h1 className="process-title">Process of Animation</h1>
      <div className="process-list">
        {processSteps.map((step, index) => (
          <div key={index} className="process-card">
            {step.image && (
              <img
                src={step.image}
                alt={step.process}
                className="process-image"
              />
            )}
            <h2 className="process-step-title">
              {index + 1}. {step.process}
            </h2>
            <p className="process-description">{step.content}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};





export default Process;