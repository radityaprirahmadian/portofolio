import React, { useLayoutEffect, Fragment } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop({ children }) {
  const location = useLocation();

  useLayoutEffect(() => {
    setTimeout(() => {
      document.documentElement.scrollTo(0, 0);
    }, [500]);
  }, [location.pathname]);

  return <Fragment>{children}</Fragment>;
}

export default ScrollToTop;
