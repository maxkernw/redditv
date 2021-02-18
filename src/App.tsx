import { useState } from 'react';
import './App.css';
import { AppContext } from './AppContext';
import ListView from './listView/ListView';
import SubReddits from './subreddits/Subreddits';

function App() {
  const [data, setData] = useState<string>('sweden');
  const value = { data, setData };

  return (
    <AppContext.Provider value={value}>
      <div className="App">
        <SubReddits></SubReddits>
        <ListView></ListView>
      </div>
    </AppContext.Provider>

  );
}

export default App;
