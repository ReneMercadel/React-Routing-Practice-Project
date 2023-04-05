import { Outlet } from 'react-router-dom';

import MainNavigation from '../MainNavigation';

const EventRoutes = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default EventRoutes;
