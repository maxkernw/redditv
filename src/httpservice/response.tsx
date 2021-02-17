export interface RedditResponse<T> {
    kind: string;
    data: T;
}

export interface RedditData {
    after: string | null;
    before: string | null;
    children: RedditResponse<RedditPost>[];
    dist: number;
    modhash: string;
}

export interface RedditPost {
    author: string;
    domain: string;
    id: string;
    title: string;
    thumbnail: string;
    score: number;
    media: {
        type: string, oembed: {
            thumbnail_url: string;
        }
    } | null;
    media_embed: {
        content: string;
    }
}