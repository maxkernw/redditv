import { useContext, useState } from 'react';
import { AppContext } from '../AppContext';
import { RedditPost } from '../httpservice/response';
import ListItem from '../listItem/ListItem';
import './ListView.css';

const ListView = () => {
    const [html, setHtml] = useState<string>('null');
    const [active, setActive] = useState<string>('null');

    const click = (data: RedditPost): void => {
        const decoded = decodeHTML(data.media_embed.content)
        setActive(data.id);
        setHtml(decoded)
    };

    const decodeHTML = (html: string) => {
        const txt = document.createElement('textarea');
        txt.innerHTML = html;
        txt.value = txt.value.replace('width=', 'width=100%').replace('height=', 'height=100%');
        return txt.value;
    };

    const msg = useContext(AppContext)

    if (msg?.data) {
        const items = msg.data.children.reduce<JSX.Element[]>((acc, elem) => {
            if (!elem.data.thumbnail) {
                return acc;
            }
            return [...acc, (
                <div className={elem.data.id === active ? 'video active' : 'video'} id={`${elem.data.id}-container`} onClick={() => click(elem.data)}>
                    <ListItem {...elem.data} />
                </div>)]
        }, []);
        return (
            <div className='test'>
                <div className='video-container' dangerouslySetInnerHTML={{ __html: html }} />
                <div className='videos'>{items}</div>
            </div>)
    }
    return (<h1>Loading</h1>)

};

export default ListView;