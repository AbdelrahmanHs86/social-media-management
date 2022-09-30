import React, { useEffect } from 'react';
import { getPosts } from 'store/Slices/PostsSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import Reactions from './Reactions/Reactions';
import Actions from './Actions/Actions';
import PostStatus from './PostStatus/PostStatus';
import moment from 'moment';
import { Post } from 'commons/models';
import imagePlaceholder from 'assets/no-post-image.png';

const Cards: React.FC = () => {
  const posts = useAppSelector((state) => state.postsReducer);
  const dispatch = useAppDispatch();

  const handleImage = (currentTarget: HTMLImageElement) => {
    currentTarget.onerror = null; // prevents looping
    currentTarget.src = imagePlaceholder;
  };

  const handleDate = (date: string) => {
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
          <div key={index}>
            <PostStatus
              link={post.account.link}
              channel={post.account.channel}
            />
            <div>
              <li>{handleDate(post.published_at)}</li>
              <Actions status={post.status} />
              <div>{post.entry.message}</div>
              <img
                src={post.entry.image[0]}
                onError={({ currentTarget }) => {
                  handleImage(currentTarget);
                }}
              />
              <Reactions channel={post.account.channel} />
            </div>
          </div>
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
