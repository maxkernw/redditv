import { createContext } from 'react';

export const AppContext = createContext<{ data: string, setData: React.Dispatch<React.SetStateAction<string>>}>({
    data: '',
    setData: () => { }
});