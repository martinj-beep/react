import React, { useState } from 'react';
import './App.css'; 

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const addProgress = () => {
    setProgress(prev => (prev < 100 ? prev + 10 : 100));
  };

  const removeProgress = () => {
    setProgress(prev => (prev > 0 ? prev - 10 : 0));
  };

  return (
    <div>
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="buttons-container">
        <button onClick={addProgress}>Add Progress</button>
        <button onClick={removeProgress}>Remove Progress</button>
      </div>
    </div>
  );
};

export default ProgressBar;