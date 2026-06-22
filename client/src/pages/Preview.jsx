import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ResumePreview from '../components/ResumePreview';
import Loader from '../components/Loader';
import { ArrowLeftIcon } from 'lucide-react';
import api from '../configs/api';

const Preview = () => {
  const { resumeId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [resumeData, setResumeData] = useState(null);

  const loadResume = async () => {
    try {
      const { data } = await api.get('/api/resumes/public/' + resumeId);
      setResumeData(data.resume);
    } catch (error) {
      console.error("Failed to fetch public document link:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (resumeId) loadResume();
  }, [resumeId]);
  
  return resumeData ? (
    <div className='bg-slate-100/60 dark:bg-slate-950 min-h-screen py-12 px-4 print:p-0 print:bg-white'>
      <div className='max-w-4xl mx-auto print:max-w-none print:w-full'>
        {/* FIXED: Directly channels data to the central, error-free preview manager layout component */}
        <ResumePreview 
          data={resumeData} 
          template={resumeData.template} 
          accentColor={resumeData.accent_color} 
          classes='py-6 bg-white shadow-md rounded-2xl print:shadow-none print:border-none print:rounded-none'
        />
      </div>
    </div>
  ) : (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen flex items-center justify-center px-4">
      {isLoading ? <Loader /> : (
        <div className='text-center space-y-4 max-w-sm animate-in fade-in duration-200'>
          <h2 className='text-4xl font-black text-slate-300 dark:text-slate-800 tracking-tight'>Profile Missing</h2>
          <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 leading-normal">
            The requested shareable signature index token was either rotated, deleted, or marked private by owner nodes.
          </p>
          <a href="/" className='mx-auto bg-slate-900 dark:bg-slate-800 text-white rounded-full px-6 py-2 text-xs font-bold flex items-center justify-center gap-1.5 w-fit shadow transition-transform hover:scale-105'>
            <ArrowLeftIcon className='size-3.5' strokeWidth={2.5}/>
            <span>Return to Core Hub</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default Preview;