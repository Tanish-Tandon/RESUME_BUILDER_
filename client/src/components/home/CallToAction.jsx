// import React from 'react'

const CallToAction = () => {
  return (
    <div id='cta' className='w-full max-w-5xl mx-auto px-6 sm:px-10 mt-28'>
        <div className="relative overflow-hidden flex flex-col md:flex-row text-center md:text-left items-center justify-between gap-8 px-8 py-12 sm:py-14 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl shadow-xl border border-slate-800">
            {/* Ambient Background Light glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-[80px] -z-10"></div>
            
            <div className="space-y-2">
                <p className="text-xl sm:text-2xl font-bold max-w-md text-white tracking-tight">
                  Build a Professional Resume That Helps You Stand Out and Get Hired
                </p>
                <p className="text-xs text-slate-400 max-w-xs mx-auto md:mx-0">
                  Join over 10,000+ applicants passing ATS screening daily.
                </p>
            </div>
            
            <a href="https://prebuiltui.com" className="group shrink-0 flex items-center gap-2 rounded-full py-3.5 px-8 bg-green-600 hover:bg-green-500 shadow-md shadow-green-900/20 text-sm font-semibold transition-all hover:scale-105 active:scale-95 text-white">
                <span>Get Started Now</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
        </div>
    </div>
  )
}

export default CallToAction