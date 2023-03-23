import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';

const EventScrollTracker = ({ targetRef, action, ...props }) => {
  useEffect(() => {
    const opts = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    };
    const callback = (list) => {
      list.forEach((entry) => {
        if (entry.isIntersecting) {
          ReactGA.event({
            category: 'Scroll',
            action: action,
            value: entry.intersectionRatio,
          });
        }
      });
    };

    const observerScroll = new IntersectionObserver(callback, opts);

    observerScroll.observe(targetRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{props.children}</>;
};

export default EventScrollTracker;
