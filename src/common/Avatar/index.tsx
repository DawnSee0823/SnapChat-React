import React from 'react';
import './index.scss';

interface Props {
  src: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: 50,
  md: 100,
  lg: 150
};

const Avatar: React.FC<Props> = ({ src, size = 'md' }) => (
  <img src={src} className="avatar" alt="" width={sizeMap[size]} />
);

export default Avatar;
