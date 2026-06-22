import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  const { user, token } = useSelector((state) => state.auth);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const performancePillars = [
    { title: "Smart AI Parsing", desc: "Extracts deep structural data assets using Gemini LLM layers automatically.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-indigo-600"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> },
    { title: "ATS Optimization Check", desc: "Live calculation indices evaluating parameter densities match vacancy filters.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-indigo-600"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg> },
    { title: "Instant PDF Generation", desc: "Compiles multi-page structures conforming seamlessly to recruiter filters.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-indigo-600"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg> }
  ];

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCtaRouting = () => {
    if (user && token) {
      navigate('/app');
    } else {
      navigate('/app/auth?state=register');
    }
  };

  return (
    <div className="w-full bg-slate-50 antialiased selection:bg-indigo-500 selection:text-white">
      <style>{`html { scroll-behavior: smooth !important; }`}</style>

      <div className="min-h-screen pb-20 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/50 overflow-hidden relative">
        {/* Navbar */}
        <nav className="sticky top-0 z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 backdrop-blur-xl bg-white/75 border-b border-slate-200/40 shadow-sm transition-all">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="flex items-center gap-1">
              <span className="font-black text-2xl text-slate-950 tracking-tight">resume<span className="text-indigo-600">.</span></span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8 font-semibold text-slate-600 text-sm">
            <a href="#" className="hover:text-indigo-600 transition-colors">Home</a>
            <a href="#features" onClick={(e) => handleSmoothScroll(e, 'features')} className="hover:text-indigo-600 transition-colors">Features</a>
            <a href="#testimonials" onClick={(e) => handleSmoothScroll(e, 'testimonials')} className="hover:text-indigo-600 transition-colors">Testimonials</a>
            <a href="#cta" onClick={(e) => handleSmoothScroll(e, 'cta')} className="hover:text-indigo-600 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            {!(user && token) ? (
              <>
                <Link to='/app/auth?state=login' className="hidden md:block px-5 py-2 text-slate-700 font-semibold hover:text-indigo-600 hover:bg-slate-50 border border-transparent rounded-full transition-all text-xs">
                  Login
                </Link>
                <Link to='/app/auth?state=register' className="hidden md:block px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-xs shadow-md hover:shadow-indigo-200 transition-all">
                  Get started
                </Link>
              </>
            ) : (
              <Link to='/app' className='hidden md:block px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-xs shadow-md hover:shadow-indigo-200 transition-all'>
                Dashboard
              </Link>
            )}
          </div>
        </nav>

        {/* Hero Body Content */}
        <div className="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-40 text-black mt-16 sm:mt-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black max-w-5xl text-center leading-[1.05] tracking-tight mt-8 text-slate-900"
          >
            Build ATS-Optimized <br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">AI Resumes</span> in Minutes
          </motion.h1>

          <p className="max-w-2xl text-center text-sm sm:text-lg text-slate-500 mt-6 mb-10 leading-relaxed font-medium">
            Create professional resumes, optimize ATS score indices, generate tailored content using AI and download print-ready PDF structures instantly.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mb-16">
            <button onClick={handleCtaRouting} className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Start Building Free
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl w-full">
            {performancePillars.map((item, index) => (
              <div key={index} className="bg-white/75 backdrop-blur-xl rounded-2xl p-6 text-left shadow-sm border border-slate-200/50 flex flex-col gap-3">
                <div className="size-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                  <p className="text-slate-500 text-xs font-medium mt-1 leading-normal">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;