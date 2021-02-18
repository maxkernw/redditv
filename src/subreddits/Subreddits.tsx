import { useContext } from 'react';
import { AppContext } from '../AppContext';
import './Subreddits.css';

const subs = [
    'Videos',
    'Publicfreakout',
    'Sweden',
    'Documentaries',
    'Youtubememes',
    'Cringe',
    'Gaming',
    'ElectronicMusic'
]

const SubReddits = () => {
    const { data, setData } = useContext(AppContext);

    const subCategories = subs.map(e => (<span onClick={() => {
        console.log(e)
        setData(e)
    }}>{e}</span>))
    return (<div className="subs">{subCategories}</div>)
}


export default SubReddits;