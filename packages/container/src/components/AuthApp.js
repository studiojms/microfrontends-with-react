import React, { useEffect, useRef } from 'react';
import { mount } from 'auth/AuthApp';
import { useHistory } from 'react-router-dom';

const AuthApp = () => {
  const ref = useRef(null);
  //container history
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathName }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathName) {
          history.push(nextPathName);
        }
      },
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};

export default AuthApp;
