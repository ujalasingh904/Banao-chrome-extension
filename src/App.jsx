import React, { useState } from 'react';

const App = () => {
  const [tabTitle, setTabTitle] = useState('');

  const getTabTitle = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const title = tabs[0]?.title || 'No title found';
      setTabTitle(title);
    });
  };

  return (
    <div className="popup-container">
      <h1>Current Tab Title</h1>
      <button onClick={getTabTitle}>Get Tab Title</button>
      {tabTitle && <p>{tabTitle}</p>}
    </div>
  );
};

export default App;
