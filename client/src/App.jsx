// src/App.jsx
import React, { useEffect } from 'react';
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
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Toaster position="top-center" />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='view/:resumeId' element={<Preview />} />
        <Route path='app/auth' element={<Login />} />
        <Route path='app' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='builder/:resumeId' element={<ResumeBuilder />} />
        </Route>
      </Routes>
    </div>
  );
};
export default App;