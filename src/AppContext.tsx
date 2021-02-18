import { createContext } from 'react';
import { RedditData, RedditResponse } from './httpservice/response';

export const AppContext = createContext<{ data: RedditResponse<RedditData> | null, setData: React.Dispatch<React.SetStateAction<RedditResponse<RedditData> | null>>}>({
    data: null,
    setData: () => { }
});