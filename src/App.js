import React from 'react';
// import routes from './routes';
// import { RouterProvider } from 'react-router-dom';
import AvailableRoutes from './routes';
import ReactGA from 'react-ga';

function App() {
  ReactGA.initialize('G-VRKJYMEX2W');

  return (
    <AvailableRoutes />
    /* <RouterProvider router={routes} />; */
  );
}

export default App;
