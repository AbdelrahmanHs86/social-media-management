import { createSlice } from '@reduxjs/toolkit';

// interface Post {
//   id: number;
// }

// interface PostsState {
//   posts: Post[];
// }

const PostsSlice = createSlice({
  name: 'posts',
  initialState: { posts: [] },
  reducers: {},
  extraReducers: {},
});
