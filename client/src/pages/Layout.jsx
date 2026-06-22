import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux';
import Loader from '../components/Loader';

// props add kiye hain taaki App.jsx se Navbar tak data jaye
const Layout = ({ darkMode, setDarkMode }) => {
  const { user, loading, token } = useSelector(state => state.auth);
  const location = useLocation();

  if (loading) {
    return <Loader />;
  }

  if (!user || !token) {
    return <Navigate to="/app/auth?state=login" state={{ from: location }} replace />;
  }

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className='min-h-screen flex flex-col'>
        {/* Props pass kiye Navbar ko */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="flex-1 w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;