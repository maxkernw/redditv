import { createContext } from 'react';
import { RedditData, RedditResponse } from './httpservice/response';

export const AppContext = createContext<RedditResponse<RedditData> | null>(null);