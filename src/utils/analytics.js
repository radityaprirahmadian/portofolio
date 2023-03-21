import ReactGA from 'react-ga4';

export const eventTracker = ({ category, action, label }) => {
  ReactGA.event({ category, action, label });
};

export const pageViewTracker = (path) => {
  ReactGA.send({ hitType: 'pageview', page: path, title: path });
};
