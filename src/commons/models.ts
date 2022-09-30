export interface Post {
  published_at: string;
  is_published: boolean;
  status: number;
  entry: {
    type: string;
    message: string;
    image: [string];
    video: string | null;
  };
  link: string;
  account: {
    name: string;
    link: string;
    channel: string;
  };
}

export type PostDates = {
  postDate: Post[];
};

export type PostsState = {
  postList: PostDates[];
  error: unknown;
};
