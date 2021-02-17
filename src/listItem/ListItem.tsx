import { RedditPost } from "../httpservice/response";
import reddit from './reddit.png';
import './ListItem.css';
const isValidHttpUrl = (string: string): boolean => {
    let url;

    try {
        url = new URL(string);
    } catch (_) {
        return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
}
const ListItem = ({ id, thumbnail }: RedditPost) =>
    (<img id={id} src={isValidHttpUrl(thumbnail) ? thumbnail : reddit} />)


export default ListItem;