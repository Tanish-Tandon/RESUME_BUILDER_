// src/App.jsx
import  { useState,useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login, setLoading } from './app/features/authSlice';
import api from './configs/api';
import { Toaster } from 'react-hot-toast';

// Pages & Components
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ResumeBuilder from './pages/ResumeBuilder';
import Preview from './pages/Preview';
import Layout from './pages/Layout';
import Login from './pages/Login';

const App = () => {
  const dispatch = useDispatch();
  
  // 2. Dark Mode state manage karo
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  // 3. Dark mode state change hone par document class update karo
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Auth logic wahi rahega...
  useEffect(() => {
    const getUserData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        dispatch(setLoading(false));
        return;
      }
      try {
        const { data } = await api.get('/api/users/data', { 
            headers: { Authorization: token } 
        });
        if (data.user) dispatch(login({ token, user: data.user }));
      } catch (error) {
        localStorage.removeItem('token');
      } finally {
        dispatch(setLoading(false));
       
      }
    };
    getUserData();
  }, [dispatch]);

  return (
    // 4. Background aur text ko 'dark:' classes ke liye responsive banaya
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
      <Toaster position="top-center" />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='view/:resumeId' element={<Preview />} />
        <Route path='app/auth' element={<Login />} />
        {/* Layout ko darkMode props pass karo taaki Navbar mein toggle dikhe */}
        <Route path='app' element={<Layout darkMode={darkMode} setDarkMode={setDarkMode} />}>
          <Route index element={<Dashboard />} />
          <Route path='builder/:resumeId' element={<ResumeBuilder />} />
        </Route>
      </Routes>
    </div>
  );
};
export default App;