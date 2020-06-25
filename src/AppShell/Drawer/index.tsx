import React from 'react';
import classNames from 'classnames';
import { Animated } from 'react-animated-css';
import { Drawer as DrawerType } from '../types';
import Account from 'features/Account';
import Search from 'features/Search';
import SnapMap from 'features/SnapMap';
import Snap from 'features/Snap';
import Archive from 'features/Archive';
import Chat from 'features/Chat';
import Discover from 'features/Discover';
import './index.scss';

interface Props {
  drawers: DrawerType[];
}

const Drawer: React.FC<Props> = ({ drawers }) => {
  const getComponent = (component, show) => {
    const componentMap = {
      account: <Account />,
      search: <Search show={show} />,
      snapMap: <SnapMap />,
      snap: <Snap />,
      archive: <Archive />,
      chat: <Chat />,
      discover: <Discover />
    };
    return componentMap[component];
  };
  return drawers
    ? (drawers as any).map(
        ({
          component,
          animationIn,
          animationOut,
          animationInDuration,
          animationOutDuration,
          show,
          theme,
          position
        }) => (
          <aside
            key={component}
            className={classNames('drawer', {
              dark: theme === 'dark',
              stripped: theme === 'stripped',
              back: position === 'back'
            })}
          >
            <Animated
              animationIn={animationIn}
              animationOut={animationOut}
              animationInDuration={animationInDuration}
              animationOutDuration={animationOutDuration}
              isVisible={show}
            >
              <section className="content" style={{ height: window.innerHeight + 'px' }}>
                {getComponent(component, show)}
              </section>
            </Animated>
          </aside>
        )
      )
    : null;
};

export default Drawer;
