import ReactGA from 'react-ga';

export const eventTracker = ({ category, action, label }) => {
  ReactGA.event({ category, action, label });
};

export const pageViewTracker = (path) => {
  ReactGA.pageview(path);
};
