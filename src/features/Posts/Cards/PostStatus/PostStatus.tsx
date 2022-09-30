import React from 'react';
import { facebookLogo, twitterLogo } from 'commons/images';

const switchLogos = (channel: string) => {
  switch (channel) {
    case 'facebook':
      return <img src={facebookLogo} />;
    case 'instagrambusiness':
      return <img src={facebookLogo} />;
    case 'twitter':
      return <img src={twitterLogo} />;
  }
};

interface Props {
  link: string;
  channel: string;
}

const PostStatus: React.FC<Props> = ({ link, channel }) => {
  return (
    <div>
      <a href={link}>{switchLogos(channel)}</a>
    </div>
  );
};

export default PostStatus;
