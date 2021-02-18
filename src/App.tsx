import { useState } from 'react';
import './App.css';
import { AppContext } from './AppContext';
import { RedditData, RedditResponse } from './httpservice/response';
import ListView from './listView/ListView';

function App() {
  const [data, setData] = useState<RedditResponse<RedditData> | null>(null);
  const value = { data, setData };

  return (
    <AppContext.Provider value={value}>
      <div className="App">

        <ListView></ListView>
      </div>
    </AppContext.Provider>

  );
}

export default App;
