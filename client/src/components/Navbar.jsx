import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../app/features/authSlice';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const logoutUser = () => {
      navigate('/');
      dispatch(logout());
  };

  return (
    <div className='shadow-sm bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 sticky top-0 z-50 transition-colors duration-300'>
      <nav className='flex items-center justify-between max-w-7xl mx-auto px-6 py-3.5 text-slate-800 dark:text-white'>
        <Link to='/' className="flex items-center gap-1 font-black text-xl text-slate-950 dark:text-white tracking-tight">
            <span>resume</span>
            <span className="size-2 rounded-full bg-indigo-600 inline-block mt-1"></span>
        </Link>

        <div className='flex items-center gap-4 text-xs font-semibold'>
          {user?.name && (
            <p className='max-sm:hidden text-slate-500 dark:text-slate-400 font-medium'>
              Logged as: <span className="text-slate-900 dark:text-white font-bold">{user.name}</span>
            </p>
          )}

          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

          <button
            onClick={logoutUser}
            className='bg-slate-900 dark:bg-slate-800 text-white dark:text-slate-200 hover:bg-slate-800 dark:hover:bg-slate-700 px-6 py-2 rounded-full shadow-sm active:scale-95 transition-all text-xs font-bold'
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;