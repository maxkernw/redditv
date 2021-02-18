import { useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from '../AppContext';
import get from '../httpservice/http.service';
import { RedditData, RedditPost, RedditResponse } from '../httpservice/response';
import ListItem from '../listItem/ListItem';
import './ListView.css';

const ListView = () => {
    const [html, setHtml] = useState<string>('');
    const [active, setActive] = useState<string>('');
    const [redditData, setRedditData] = useState<RedditResponse<RedditData> | null>(null)
    const { data, setData } = useContext(AppContext);

    useEffect(() => {
        const get = async () => {
            const resp = await fetch();
            if (resp) {
                setRedditData(resp);
            }
        }
        get();
    }, [data]);

    const click = (data: RedditPost): void => {
        const decoded = decodeHTML(data.media_embed.content)
        setActive(data.id);
        setHtml(decoded);
    };

    const decodeHTML = (html: string) => {
        const txt = document.createElement('textarea');
        txt.innerHTML = html;
        txt.value = txt.value.replace('width=', 'width=100%').replace('height=', 'height=100%');
        return txt.value;
    };

    const fetch = async (params = '') => {
        const url = `https://www.reddit.com/r/${data}/hot/.json?limit=100${params}`
        const resp = await get<RedditResponse<RedditData>>(url);
        if (resp instanceof Error) {
            return;
        }
        return resp;
    }

    const handleScroll = async (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const div = event.target as HTMLDivElement;
        const loadMore = div.scrollWidth - div.clientWidth === div.scrollLeft;
        if (loadMore) {
            const resp = await fetch(`&after=${redditData?.data.after}&count=100`);
            if (resp?.data.children.length && redditData?.data.children.length) {
                const newData = [...redditData?.data.children, ...resp?.data.children]
                resp.data.children = newData;
                setRedditData(resp);
            }
        }
    }


    if (redditData?.data) {
        const items = redditData.data.children.reduce<JSX.Element[]>((acc, elem) => {
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
                <div onScroll={e => handleScroll(e)} className='videos'>{items}</div>
            </div>)
    }
    return (<h1>Loading</h1>)

};

export default ListView;