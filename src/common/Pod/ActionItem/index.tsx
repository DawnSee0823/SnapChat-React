import React from 'react';
import classNames from 'classnames';
import Icon from 'common/Icon';
import './index.scss';

interface Props {
  leftIcon?: any;
  rightIcon?: any;
  label?: string;
  transparent?: boolean;
  children?: any;
}

const ActionItem: React.FC<Props> = ({ leftIcon, rightIcon, label, transparent }) => (
  <article className={classNames('pod-action-item', { transparent })}>
    <Icon icon={leftIcon} />
    {label}
    <Icon icon={rightIcon} className="right-icon" />
  </article>
);

export default ActionItem;
