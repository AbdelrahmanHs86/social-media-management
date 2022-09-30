import React from 'react';
import Reactions from '../Reactions/Reactions';
import Actions from '../Actions/Actions';
import PostStatus from '../PostStatus/PostStatus';
import { Post } from 'commons/models';
import imagePlaceholder from 'assets/no-post-image.png';

interface Props {
  post: Post;
  // eslint-disable-next-line no-unused-vars
  handleDate(date: string): string;
}

const Card: React.FC<Props> = ({ post, handleDate }) => {
  const handleImage = (currentTarget: HTMLImageElement) => {
    currentTarget.onerror = null; // prevents looping
    currentTarget.src = imagePlaceholder;
  };

  return (
    <div>
      <PostStatus link={post.account.link} channel={post.account.channel} />
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
  );
};

export default Card;
