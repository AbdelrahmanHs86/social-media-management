import React from 'react';
import { approve, cancel, remove, options } from 'commons/images';

const switchIcon = (stat: number) => {
  switch (stat) {
    case 0:
      return <img src={approve} alt="approve" />;
    case 1:
      return <img src={cancel} alt="cancel" />;
    default:
      return <></>;
  }
};

interface Props {
  status: number;
}

const Actions: React.FC<Props> = ({ status }) => {
  return (
    <ul>
      <a href="">{switchIcon(status)}</a>
      <a href="">
        <img src={remove} alt="delete" />
      </a>
      <a href="">
        <img src={options} alt="options" />
      </a>
    </ul>
  );
};

export default Actions;
