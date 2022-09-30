import React from 'react';
import { like, heart, comments, share, shareT, views } from 'commons/images';

const switchReactions = (channel: string) => {
  switch (channel) {
    case 'twitter':
      return (
        <>
          <img src={heart} alt="heart" />
          <img src={shareT} alt="share2" />
        </>
      );
    case 'instagrambusiness':
    case 'instagram':
    case 'facebook':
      return (
        <>
          <img src={like} alt="like" />
          <img src={share} alt="share" />
        </>
      );
    default:
      return <></>;
  }
};

interface Props {
  channel: string;
}

const Reactions: React.FC<Props> = ({ channel }) => {
  return (
    <ul>
      <a href="">{switchReactions(channel)}</a>
      <a href="">
        <img src={comments} alt="comments" />
      </a>
      <a href="">
        <img src={views} alt="views" />
      </a>
    </ul>
  );
};

export default Reactions;
