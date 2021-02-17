import { useEffect, useState } from 'react';
import './App.css';
import { AppContext } from './AppContext';
import get from './httpservice/http.service';
import { RedditData, RedditResponse } from './httpservice/response';
import ListView from './listView/ListView';

function App() {
  const [data, setData] = useState<RedditResponse<RedditData> | null>(null);

  useEffect(() => {
    if (!data) {
      fetch();
    }
  });
  
  const fetch = async () => {
    const sub = "videos";
    const url = `https://www.reddit.com/r/${sub}/hot/.json?limit=100`
    const resp = await get<RedditResponse<RedditData>>(url);
    if (resp instanceof Error) {
      return;
    }
    return setData(resp);
  }

  return (
    <AppContext.Provider value={data}>
      <div className="App">

        <ListView></ListView>
      </div>
    </AppContext.Provider>

  );
}



export default App;
