import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux';
import Loader from '../components/Loader';

const Layout = () => {
  const { user, loading, token } = useSelector(state => state.auth);
  const location = useLocation();

  if (loading) {
    return <Loader />;
  }

  // FIXED: Agar logged in nahi hai toh strictly /app/auth par redirect karo
  if (!user || !token) {
    return <Navigate to="/app/auth?state=login" state={{ from: location }} replace />;
  }

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className='min-h-screen flex flex-col'>
        <Navbar />
        <main className="flex-1 w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;