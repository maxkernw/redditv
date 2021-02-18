import { useContext, useState } from 'react';
import { AppContext } from '../AppContext';
import './Subreddits.css';

const SUBREDDITS = [
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
    const [custom, setCustom] = useState('');
    const [subs, setSubs] = useState(SUBREDDITS)
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            setSubs([...subs, event.currentTarget.value]);
            event.currentTarget.value = '';
        }
    }
    const subCategories = subs.map(e => (<span onClick={() => {
        console.log(e)
        setData(e)
    }}>{e}</span>))
    return (
        <div className="container">
            <div className="subs">{subCategories}</div>
            <div className="custom-input">
                <label>
                    Add:
                 <input
                        type="text"
                        onKeyDown={handleKeyDown}
                    />
                </label>
            </div>
        </div>
    )
}


export default SubReddits;