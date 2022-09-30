import React, { useEffect } from 'react';
import { getPosts } from 'store/Slices/PostsSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import Card from './Card/Card';
import moment from 'moment';
import { Post } from 'commons/models';

const Cards: React.FC = () => {
  const posts = useAppSelector((state) => state.postsReducer);
  const dispatch = useAppDispatch();

  const handleDate = (date: string): string => {
    const [timeValues] = date.split(' ');
    const [hour, minute] = timeValues.split(':');
    let newDate = '';
    if (hour === '00' && minute === '00') {
      newDate = moment(date).format('DD MMMM YYYY');
    } else {
      newDate = moment(date).format('DD MMMM YYYY - HH:mm');
    }

    return newDate;
  };

  const postList = () => {
    const data: JSX.Element[] = [];
    for (const [key, value] of Object.entries(posts.postList)) {
      // map.set(key, value);

      if (value instanceof Array) {
        const data2 = value.map((post: Post, index: number) => (
          <Card key={index} post={post} handleDate={handleDate} />
        ));

        data.unshift(
          <ul>
            {moment(key).format('DD MMMM YYYY')}
            {data2}
          </ul>
        );
      }
    }
    return data;
  };

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <div>Cards</div>
      {postList()}
    </>
  );
};

export default Cards;
