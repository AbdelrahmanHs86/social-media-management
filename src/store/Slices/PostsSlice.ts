import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import data from '../../assets/data.json';
import { PostDates, PostsState } from 'commons/models';

const initialState: PostsState = {
  postList: [],
  error: {},
};

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (arg, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      // const res = await fetch(
      //   'https://api.jsonbin.io/v3/b/62ed1523e13e6063dc6cd5ee', ////// Exausted Requests
      //   {
      //     method: 'GET',
      //     headers: {
      //       'X-ACCESS-KEY':
      //         '$2b$10$smpejxmp4gmvulslxzJAs.gQ4v4PXntI/WeSCOOFXAd3KZl7LFJcW',
      //     },
      //   }
      // );
      // const data = await res.json();
      // return data?.record?.posts_by_date;
      return data.posts_by_date;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const PostsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    //getPosts
    [getPosts.pending.type]: (state) => {
      console.log();
    },
    [getPosts.fulfilled.type]: (state, action: PayloadAction<PostDates[]>) => {
      state.postList = action.payload;
    },
    [getPosts.rejected.type]: (state, action: PayloadAction) => {
      state.error = action.payload;
    },
  },
});

export default PostsSlice.reducer;
