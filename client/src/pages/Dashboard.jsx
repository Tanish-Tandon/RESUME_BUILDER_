import React, { useEffect, useState } from 'react';
import { FilePenLineIcon, LoaderCircleIcon, PlusIcon, TrashIcon, UploadCloud, XIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import api from '../configs/api';
import toast from 'react-hot-toast';
import pdfToText from 'react-pdftotext';
import { motion } from "framer-motion";

const Dashboard = () => {
  const { user, token } = useSelector(state => state.auth);
  const colors = ["#6366f1", "#d97706", "#dc2626", "#0284c7", "#16a34a"];
  
  const [allResumes, setAllResumes] = useState([]);
  const [showCreateResume, setShowCreateResume] = useState(false);
  const [showUploadResume, setShowUploadResume] = useState(false);
  const [title, setTitle] = useState('');
  const [resume, setResume] = useState(null);
  const [editResumeId, setEditResumeId] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const loadAllResumes = async () => {
    try {
      const { data } = await api.get('/api/users/resumes', { headers: { Authorization: token } });
      setAllResumes(data.resumes || []);
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  const createResume = async (event) => {
    event.preventDefault();
    if (!title.trim()) return;
    try {
      const { data } = await api.post('/api/resumes/create', { title }, { headers: { Authorization: token } });
      setAllResumes([...allResumes, data.resume]);
      setTitle('');
      setShowCreateResume(false);
      // FIXED FLOW: Removed automatic navigate() redirection. The card now populates the grid instead.
      toast.success("Resume entry created! Click on the card below anytime to open editor.");
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  const uploadResume = async (event) => {
    event.preventDefault();

    if (!resume || !title.trim()) {
       toast.error("Please provide both a title and a PDF file."); // Yahan add kar do
       return;
    }
    if (!resume || !title.trim()) return;
    setIsLoading(true);
    try {
      const resumeText = await pdfToText(resume);
      console.log("Text from PDF:", resumeText);
      // FIXED TIMEOUT PARSING: Override specific request config context to 60 seconds for AI modeling processing
      const { data } = await api.post('/api/ai/upload-resume', 
        { title, resumeText }, 
        { 
          headers: { Authorization: token },
          timeout: 60000 
        }
      );
      setTitle('');
      setResume(null);
      setShowUploadResume(false);
      loadAllResumes();
      toast.success("AI Parsing Completed! Card added to your workspace.");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Parsing timeout exceeded. Please simplify text layout or try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const editTitle = async (event) => {
    event.preventDefault();
    try {
      const { data } = await api.put(`/api/resumes/update`, { resumeId: editResumeId, resumeData: { title } }, { headers: { Authorization: token } });
      setAllResumes(allResumes.map(r => r._id === editResumeId ? { ...r, title } : r));
      setTitle('');
      setEditResumeId('');
      toast.success("Title Updated");
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  const deleteResume = async (resumeId) => {
    try {
      if (window.confirm('Are you sure you want to delete this resume configuration permanently?')) {
        await api.delete(`/api/resumes/delete/${resumeId}`, { headers: { Authorization: token } });
        setAllResumes(allResumes.filter(r => r._id !== resumeId));
        toast.success("Resume Workspace Deleted");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    if (token) loadAllResumes();
  }, [token]);

  return (
    <div className="min-h-screen py-10 relative">
      <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className='max-w-7xl mx-auto px-6'>
        <div className="mb-10 text-left">
          <motion.h1 className='text-3xl sm:text-4xl font-black tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent'>
            Welcome Back, {user?.name || "Applicant"}
          </motion.h1>
          <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-widest">Active Application Management Studio</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5'>
          <button onClick={() => setShowCreateResume(true)} className='w-full h-48 bg-white/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/80 backdrop-blur-md rounded-2xl shadow-sm hover:shadow-xl hover:border-indigo-500/40 hover:scale-[1.03] transition-all duration-300 flex flex-col items-center justify-center gap-3.5 group'>
            <div className="p-3 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-inner">
              <PlusIcon className='size-5' strokeWidth={3}/>
            </div>
            <span className='text-xs font-bold text-slate-700 dark:text-slate-300 tracking-tight'>Create Blank</span>
          </button>









          <button onClick={() => setShowUploadResume(true)} className='w-full h-48 bg-white/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/80 backdrop-blur-md rounded-2xl shadow-sm hover:shadow-xl hover:border-purple-500/40 hover:scale-[1.03] transition-all duration-300 flex flex-col items-center justify-center gap-3.5 group'
          >
            <div className="p-3 bg-purple-50 dark:bg-purple-950/40 rounded-xl text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-inner">
              <UploadCloud className='size-5' strokeWidth={2.5}/>
            </div>
            <span className='text-xs font-bold text-slate-700 dark:text-slate-300 tracking-tight'>Upload PDF Asset</span>
          </button>
        </div>

        <div className="w-full h-px bg-slate-200/60 dark:bg-slate-800/40 my-10"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {allResumes.map((resumeItem, index) => {
            const baseColor = colors[index % colors.length];
            return (
              <motion.div key={resumeItem._id} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.03 }} className='relative w-full h-48 flex flex-col items-center justify-center rounded-2xl border bg-white/90 dark:bg-slate-900/90 shadow-sm hover:shadow-xl hover:scale-[1.03] transition-all duration-300 group p-4 overflow-hidden' style={{ borderColor: `${baseColor}25` }}>
                <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] pointer-events-none transition-opacity" style={{ backgroundColor: baseColor }}></div>
                
                <div onClick={() => navigate(`/app/builder/${resumeItem._id}`)} className="w-full h-full flex flex-col items-center justify-center gap-3.5 cursor-pointer">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                    <FilePenLineIcon className="size-5" style={{ color: baseColor }} />
                  </div>
                  <h3 className='text-xs font-bold text-slate-800 dark:text-slate-200 tracking-tight text-center px-1 line-clamp-2'>{resumeItem.title}</h3>
                  <p className='text-[10px] font-bold text-slate-400 dark:text-slate-500 absolute bottom-3 uppercase tracking-wider'>
                    Updated: {new Date(resumeItem.updatedAt).toLocaleDateString("en-US", { month: 'short', day: 'numeric' })}
                  </p>
                </div>

                <div className="absolute top-2.5 right-2.5 flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg p-0.5 border border-slate-200/60 dark:border-slate-700">
                  <button onClick={() => { setEditResumeId(resumeItem._id); setTitle(resumeItem.title); }} className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M11 11h6M13.5 2.5a1.5 1.5 0 1 1 2.1 2.1L6.5 13.7l-2.5.8.8-2.5Z"/></svg>
                  </button>
                  <button onClick={() => deleteResume(resumeItem._id)} className="p-1 text-slate-400 hover:text-red-600 rounded transition-colors">
                    <TrashIcon className="size-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {showCreateResume && (
          <div onClick={() => setShowCreateResume(false)} className='fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-[200] flex items-center justify-center p-4 animate-in fade-in duration-200'>
            <form onSubmit={createResume} onClick={e => e.stopPropagation()} className='relative bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xl rounded-2xl w-full max-w-sm p-6 space-y-4 text-left'>
              <div className="space-y-1">
                <h2 className='text-sm font-black text-slate-900 dark:text-white uppercase tracking-wide'>Create Blank Profile</h2>
                <p className="text-[11px] font-bold text-slate-400">Initialize an empty workspace document layout</p>
              </div>
              <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder='e.g., Senior Software Architect Resume' className='w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none text-xs font-medium text-slate-800 dark:text-white' 
  required/>
              <button type="submit" className='w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-md shadow-indigo-500/10'>Initialize Workspace</button>
              <button type="button" className='absolute top-3 right-3 text-slate-400 hover:text-slate-600 p-1' onClick={() => { setShowCreateResume(false); setTitle(''); }}><XIcon className='size-4'/></button>
            </form>
          </div>
        )}











       {/* Upload Modal (FIXED) */}
        {showUploadResume && (
          <div onClick={() => setShowUploadResume(false)} className='fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-[200] flex items-center justify-center p-4 animate-in fade-in duration-200'>
            <form onSubmit={uploadResume} onClick={e => e.stopPropagation()} className='relative bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xl rounded-2xl w-full max-w-sm p-6 space-y-4 text-left'>
              <div className="space-y-1">
                <h2 className='text-sm font-black text-slate-900 dark:text-white uppercase tracking-wide'>Upload Existing Workspace</h2>
                <p className="text-[11px] font-bold text-slate-400">We'll auto-extract structural properties using AI optimization models</p>
              </div>
              
              {/* CSS FIXED: Added background, border, padding, and text-color */}
              <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder='e.g., AI Tailored Engineering Profile' className='w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none text-xs font-medium text-slate-800 dark:text-white' required />
              
              <label htmlFor="resume-input" className="block w-full cursor-pointer group">
                <div className='flex flex-col items-center justify-center gap-2 border border-slate-200 dark:border-slate-700 border-dashed rounded-xl p-6 text-slate-400 bg-slate-50/50 dark:bg-slate-800/40 group-hover:border-indigo-500 group-hover:bg-indigo-50/10 transition-all text-center shadow-inner'>
                  {resume ? (
                    <p className='text-xs font-bold text-indigo-600 dark:text-indigo-400 break-all px-2'>{resume.name}</p>
                  ) : (
                    <>
                      <UploadCloud className='size-7 stroke-[1.5]'/>
                      <p className="text-xs font-bold text-slate-500 dark:text-slate-400">Drop PDF file here</p>
                    </>
                  )}
                </div> 
              </label>
              <input type="file" id='resume-input' accept='.pdf' hidden onChange={(e) => setResume(e.target.files[0])} required/>

              <button type="submit" disabled={isLoading} className='w-full py-2.5 bg-indigo-600 text-white font-bold text-xs rounded-xl hover:bg-indigo-500 transition-colors flex items-center justify-center gap-2 shadow-md shadow-indigo-100'>
                {isLoading && <LoaderCircleIcon className='animate-spin size-3.5 text-white'/>}
                <span>{isLoading ? 'Parsing Framework Asset...' : 'Parse Configuration File'}</span>
              </button>
              <button type="button" className='absolute top-3 right-3 text-slate-400 hover:text-slate-600 p-1' onClick={() => { setShowUploadResume(false); setTitle(''); setResume(null); }}><XIcon className='size-4'/></button>
            </form>
          </div>
        )}

        {/* Edit Modal (FIXED) */}
        {editResumeId && (
          <div onClick={() => setEditResumeId('')} className='fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-[200] flex items-center justify-center p-4 animate-in fade-in duration-200'>
            <form onSubmit={editTitle} onClick={e => e.stopPropagation()} className='relative bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xl rounded-2xl w-full max-w-sm p-6 space-y-4 text-left'>
              <div className="space-y-1">
                <h2 className='text-sm font-black text-slate-900 dark:text-white uppercase tracking-wide'>Rename Workspace Title</h2>
                <p className="text-[11px] font-bold text-slate-400">Change document configuration metadata header</p>
              </div>
              
              {/* CSS FIXED: Added background, border, and padding */}
              <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder='Enter resume title' className='w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none text-xs font-medium text-slate-800 dark:text-white' required />
              
              <button type="submit" className='w-full py-2.5 bg-indigo-600 text-white font-bold text-xs rounded-xl hover:bg-indigo-500 transition-colors shadow-md shadow-indigo-100'>Update Signature</button>
              <button type="button" className='absolute top-3 right-3 text-slate-400 hover:text-slate-600 p-1' onClick={() => { setEditResumeId(''); setTitle(''); }}><XIcon className='size-4'/></button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}

export default Dashboard;