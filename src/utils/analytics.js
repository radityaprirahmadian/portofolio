import ReactGA from 'react-ga';

const eventTracker = ({ category, action, label }) => {
  ReactGA.event({ category, action, label });
};

export default eventTracker;
