import { Zap } from 'lucide-react';
// import React from 'react'
import Title from './Title';

const Features = () => {
  return (
    <div id='features' className='flex flex-col items-center my-16 scroll-mt-12 w-full max-w-6xl mx-auto px-4'>

        <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-100/60 rounded-full px-4 py-1.5 uppercase tracking-wider">
            <Zap width={12} className="fill-indigo-600"/>
            <span>Simple Process</span>
        </div>
        
        <Title 
          title='Build your resume' 
          description='Our streamlined process helps you create a professional resume in minutes with intelligent AI-powered tools and features.'
        />

        <div className="flex flex-col lg:flex-row items-center gap-12 mt-12 w-full">
            {/* Left Side Graphic Preview */}
            <div className="w-full lg:w-1/2 flex justify-center">
                <img className="max-w-xl w-full h-auto object-cover rounded-2xl shadow-xl border border-slate-100" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/group-image-1.png" alt="Features preview" />
            </div>
            
            {/* Right Side Feature Cards */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
                {/* Card 1 - Fixed Text */}
                <div className="p-5 bg-white border border-slate-100 shadow-sm rounded-xl flex gap-4 transition-all duration-300 hover:border-indigo-200 hover:shadow-md cursor-pointer group">
                    <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg shrink-0 h-fit group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-base font-bold text-slate-800">AI-Powered Suggestion Engine</h3>
                        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">Get tailoring keyword metrics matching top vacancies and industry trends instantly.</p>
                    </div>
                </div>

                {/* Card 2 - Fixed Text */}
                <div className="p-5 bg-white border border-slate-100 shadow-sm rounded-xl flex gap-4 transition-all duration-300 hover:border-green-200 hover:shadow-md cursor-pointer group">
                    <div className="p-3 bg-green-50 text-green-600 rounded-lg shrink-0 h-fit group-hover:bg-green-600 group-hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-base font-bold text-slate-800">Real-Time ATS Checker</h3>
                        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">Analyze formatting issues, compliance rules, and layout constraints before submission.</p>
                    </div>
                </div>

                {/* Card 3 - Fixed Text */}
                <div className="p-5 bg-white border border-slate-100 shadow-sm rounded-xl flex gap-4 transition-all duration-300 hover:border-orange-200 hover:shadow-md cursor-pointer group">
                    <div className="p-3 bg-orange-50 text-orange-600 rounded-lg shrink-0 h-fit group-hover:bg-orange-600 group-hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5" /></svg>
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-base font-bold text-slate-800">Instant Premium Formats Export</h3>
                        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">Download completely parsed single-page structures safe for enterprise HR platforms.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features