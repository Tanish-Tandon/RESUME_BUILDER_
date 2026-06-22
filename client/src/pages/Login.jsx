import React, { useState, useEffect } from 'react';
import { Lock, Mail, User2Icon } from 'lucide-react';
import api from '../configs/api';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../app/features/authSlice';
import { useNavigate, useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, token } = useSelector(state => state.auth);
  const [searchParams, setSearchParams] = useSearchParams();
  
  const urlState = searchParams.get('state');
  const [state, setState] = useState(urlState || 'login');
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  useEffect(() => {
    if (urlState) setState(urlState);
  }, [urlState]);

  useEffect(() => {
    if (user && token) navigate('/app');
  }, [user, token, navigate]);

  const validateForm = () => {
    const trimmedEmail = formData.email.trim();
    const trimmedPassword = formData.password.trim();

    const strictEmailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,4}$/;
    if (!strictEmailRegex.test(trimmedEmail)) {
      toast.error("Invalid email format!");
      return false;
    }
    if (trimmedPassword.length < 7) {
      toast.error("Password must be at least 7 characters long.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
        const { data } = await api.post(`/api/users/${state}`, {
          name: formData.name,
          email: formData.email.trim().toLowerCase(),
          password: formData.password
        });
        
        if (data && data.token) {
          localStorage.setItem('token', data.token);
          dispatch(login(data));
          toast.success("Authentication successful!");
          navigate('/app');
        }
    } catch (error) {
        const serverErrorMessage = error?.response?.data?.message || "Connection refused. Ensure server is running.";
        toast.error(serverErrorMessage);
    }
  };  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleStateToggle = () => {
    const nextState = state === 'login' ? 'register' : 'login';
    setSearchParams({ state: nextState });
    // Reset data on toggle to ensure clean slate
    setFormData({ name: '', email: '', password: '' });
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 px-4'>
      <div onClick={() => navigate('/')} className="flex items-center gap-1 font-black text-2xl text-slate-950 dark:text-white tracking-tight mb-6 cursor-pointer">
          <span>resume</span>
          <span className="size-2 rounded-full bg-indigo-600 inline-block mt-2"></span>
      </div>

      <form onSubmit={handleSubmit} className="sm:w-[380px] w-full text-center border border-slate-200 dark:border-slate-800 rounded-3xl p-8 bg-white dark:bg-slate-900 shadow-xl space-y-4">
        <div>
          <h1 className="text-slate-900 dark:text-white text-2xl font-black tracking-tight">
            {state === "login" ? "Welcome Back" : "Create Account"}
          </h1>
          <p className="text-slate-400 dark:text-slate-500 text-xs font-semibold mt-1">
            Manage your resumes safely through modern optimization gates
          </p>
        </div>

        {state !== "login" && (
          <div className="flex items-center w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl h-11 px-4 gap-2.5">
            <User2Icon size={14} className='text-slate-400'/>
            <input type="text" name="name" placeholder="Full Name" className="w-full border-none outline-none bg-transparent text-xs font-medium text-slate-800 dark:text-white" value={formData.name} onChange={handleChange} required />
          </div>
        )}

        <div className="flex items-center w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl h-11 px-4 gap-2.5">
          <Mail size={14} className='text-slate-400' />
          <input type="email" name="email" placeholder="Email Address" className="w-full border-none outline-none bg-transparent text-xs font-medium text-slate-800 dark:text-white" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="flex items-center w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl h-11 px-4 gap-2.5">
          <Lock size={14} className='text-slate-400'/>
          <input type="password" name="password" placeholder="Password (Min 7 chars)" className="w-full border-none outline-none bg-transparent text-xs font-medium text-slate-800 dark:text-white" value={formData.password} onChange={handleChange} required />
        </div>

        <button type="submit" className="w-full h-11 rounded-xl text-white bg-indigo-600 hover:bg-indigo-500 font-bold text-xs shadow-md shadow-indigo-500/10">
          {state === "login" ? "Login to Dashboard" : "Register Account"}
        </button>

        <div className="pt-2">
          <p onClick={handleStateToggle} className="text-slate-400 dark:text-slate-500 text-xs font-bold cursor-pointer select-none">
            {state === "login" ? "New to our platform?" : "Already have an account?"}{" "}
            <span className="text-indigo-600 dark:text-indigo-400 hover:underline">Click here</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;