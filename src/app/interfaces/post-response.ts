// Generated by https://quicktype.io

export interface PostResponse {
    total: number;
    limit: number;
    skip:  number;
    data:  Posts[];
}

export interface Posts {
    _id:       string;
    title:     string;
    content:   string;
    createdAt: string;
    updatedAt: string;
    __v:       number;
    userId?:   string;
}