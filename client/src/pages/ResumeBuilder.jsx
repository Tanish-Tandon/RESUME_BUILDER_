import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeftIcon, Briefcase, ChevronLeft, ChevronRight, DownloadIcon, EyeIcon, EyeOffIcon, FileText, FolderIcon, GraduationCap, Share2Icon, Sparkles, User } from 'lucide-react';
import PersonalInfoForm from '../components/PersonalInfoForm';
import ResumePreview from '../components/ResumePreview';
import TemplateSelector from '../components/TemplateSelector';
import ColorPicker from '../components/ColorPicker';
import ProfessionalSummaryForm from '../components/ProfessionalSummaryForm';
import ExperienceForm from '../components/ExperienceForm';
import EducationForm from '../components/EducationForm';
import ProjectForm from '../components/ProjectForm';
import SkillsForm from '../components/SkillsForm';
import { useSelector } from 'react-redux';
import api from '../configs/api';
import toast from 'react-hot-toast';

const ResumeBuilder = () => {
  const { resumeId } = useParams();
  const { token } = useSelector(state => state.auth);

  const [resumeData, setResumeData] = useState({
    _id: '', title: '', personal_info: {}, professional_summary: "",
    experience: [], education: [], project: [], skills: [],
    template: "deedy", accent_color: "#3B82F6", public: false,
  });

  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [removeBackground, setRemoveBackground] = useState(false);
  const [atsScore, setAtsScore] = useState(0);
  const [atsSuggestions, setAtsSuggestions] = useState([]);

  const sections = [
    { id: "personal", name: "Personal Info", icon: User },
    { id: "summary", name: "Summary", icon: FileText },
    { id: "experience", name: "Experience", icon: Briefcase },
    { id: "education", name: "Education", icon: GraduationCap },
    { id: "projects", name: "Projects", icon: FolderIcon },
    { id: "skills", name: "Skills", icon: Sparkles },
  ];

  const activeSection = sections[activeSectionIndex];

  // ResumeBuilder.jsx mein ye update karo:
const [isAtsLoading, setIsAtsLoading] = useState(false);

const fetchRealAtsScore = async (targetPayload) => {
    if (isAtsLoading) return; // Dubara request na jaye
    setIsAtsLoading(true);
    try {
        const { data } = await api.post('/api/ai/calculate-ats', { resumeData: targetPayload }, { headers: { Authorization: token } });
        setAtsScore(data.score || 0);
        setAtsSuggestions(data.criticalImprovements || []);
    } catch (error) {
        console.error("ATS failed:", error);
    } finally {
        setIsAtsLoading(false);
    }
};

  const loadExistingResume = async () => {
    try {
      const { data } = await api.get('/api/resumes/get/' + resumeId, { headers: { Authorization: token } });
      if (data.resume) {
        setResumeData(data.resume);
        document.title = `${data.resume.title} | Builder`;
        fetchRealAtsScore(data.resume);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    if (resumeId && token) loadExistingResume();
  }, [resumeId, token]);

  const changeResumeVisibility = async () => {
    try {
      // Create structural payload instead of empty multiform layers to bypass API parsing
      const { data } = await api.put('/api/resumes/update', {
         resumeId,
         resumeData: { ...resumeData, public: !resumeData.public }
      }, { headers: { Authorization: token } });
      
      setResumeData(prev => ({ ...prev, public: !prev.public }));
      toast.success("Visibility state updated successfully!");
    } catch (error) {
      toast.error("Failed to update visibility.");
    }
  };

  const handleShare = () => {
    const frontendUrl = window.location.href.split('/app/')[0];
    const resumeUrl = frontendUrl + '/view/' + resumeId;

    if (navigator.share) {
      navigator.share({ url: resumeUrl }).catch(err => console.log(err));
    } else {
      navigator.clipboard.writeText(resumeUrl);
      toast.success("Public shareable link copied to clipboard successfully!");
    }
  };

  const downloadResume = () => {
    window.print();
  };

  const saveResume = async () => {
    try {
      // 1. Deep clone to prevent mutations
      let payload = JSON.parse(JSON.stringify(resumeData));
      
      // 2. Remove File Object if it exists (cannot be sent via standard JSON API)
      if (payload.personal_info?.image && typeof payload.personal_info.image !== 'string') {
        delete payload.personal_info.image;
      }

      const { data } = await api.put('/api/resumes/update', {
        resumeId,
        resumeData: payload
      }, { headers: { Authorization: token } });
      
      setResumeData(data.resume);
      await fetchRealAtsScore(data.resume);
      toast.success("Workspace saved successfully!");
    } catch (error) {
      toast.error("Save failed. Please check your data.");
      throw error;
    }
  };
 
  return (
    <div className="bg-slate-50 dark:bg-slate-950 transition-colors duration-300 text-left min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link to={'/app'} className='inline-flex gap-2 items-center text-xs font-bold text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors'>
          <ArrowLeftIcon className="size-3.5" strokeWidth={2.5}/> <span>Back to Dashboard</span>
        </Link>

        <div className="flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-1.5 rounded-full shadow-sm">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Real AI ATS Index:</span>
          <span className={`text-xs font-black ${atsScore > 75 ? 'text-emerald-600' : atsScore > 55 ? 'text-amber-500' : 'text-red-500'}`}>
            {atsScore}%
          </span>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-6 pb-12'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-start'>
          
          <div className='lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 shadow-sm relative pt-4 overflow-visible'>
            <div className="absolute top-0 left-0 right-0 h-1 bg-slate-100 dark:bg-slate-800 rounded-t-2xl overflow-hidden">
              <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-500" style={{ width: `${(activeSectionIndex * 100) / (sections.length - 1)}%` }}></div>
            </div>

            <div className="flex items-center justify-between gap-2 mb-6 border-b border-slate-100 dark:border-slate-800 pb-3 mt-2">
              <div className='flex items-center gap-1.5 z-20 relative'>
                <TemplateSelector selectedTemplate={resumeData.template} onChange={(template) => setResumeData(prev => ({ ...prev, template }))} />
                <ColorPicker selectedColor={resumeData.accent_color} onChange={(color) => setResumeData(prev => ({ ...prev, accent_color: color }))} />
              </div>

              <div className='flex items-center gap-1 shrink-0'>
                {activeSectionIndex !== 0 && (
                  <button onClick={() => setActiveSectionIndex(prev => Math.max(prev - 1, 0))} className='p-2 text-slate-400 hover:text-slate-800 rounded-lg'><ChevronLeft className="size-4" strokeWidth={2.5}/></button>
                )}
                <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest px-1">{activeSectionIndex + 1}/{sections.length}</span>
                {activeSectionIndex !== sections.length - 1 && (
                  <button onClick={() => setActiveSectionIndex(prev => Math.min(prev + 1, sections.length - 1))} className='p-2 text-slate-400 hover:text-slate-800 rounded-lg'><ChevronRight className="size-4" strokeWidth={2.5}/></button>
                )}
              </div>
            </div>

            <div className='min-h-[420px] text-slate-900 dark:text-white'>
                {activeSection.id === 'personal' && <PersonalInfoForm data={resumeData.personal_info} onChange={(data) => setResumeData(prev => ({ ...prev, personal_info: data }))} removeBackground={removeBackground} setRemoveBackground={setRemoveBackground} />}
                {activeSection.id === 'summary' && <ProfessionalSummaryForm data={resumeData.professional_summary} onChange={(data) => setResumeData(prev => ({ ...prev, professional_summary: data }))} setResumeData={setResumeData} />}
                {activeSection.id === 'experience' && <ExperienceForm data={resumeData.experience} onChange={(data) => setResumeData(prev => ({ ...prev, experience: data }))} />}
                {activeSection.id === 'education' && <EducationForm data={resumeData.education} onChange={(data) => setResumeData(prev => ({ ...prev, education: data }))} />}
                {activeSection.id === 'projects' && <ProjectForm data={resumeData.project} onChange={(data) => setResumeData(prev => ({ ...prev, project: data }))} />}
                {activeSection.id === 'skills' && <SkillsForm data={resumeData.skills} onChange={(data) => setResumeData(prev => ({ ...prev, skills: data }))} />}
            </div>

            {atsSuggestions.length > 0 && (
              <div className="mt-5 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-left">
                <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest block mb-1">AI ATS Compliance Remedies</span>
                <ul className="list-disc list-inside text-xs font-semibold text-slate-500 space-y-0.5">
                  {atsSuggestions.map((suggestion, idx) => <li key={idx}>{suggestion}</li>)}
                </ul>
              </div>
            )}

            <div className="w-full h-px bg-slate-100 dark:bg-slate-800 mt-6 mb-4"></div>
            <button onClick={() => { toast.promise(saveResume(), { loading: 'Syncing modifications and calculating real ATS scores...', success: 'Workspace persistent state synced!', error: 'Sync transaction rejected.' }); }} className='w-full sm:w-auto px-6 py-2.5 bg-slate-900 dark:bg-slate-800 text-white font-bold text-xs rounded-xl shadow'>
              Save Workspace Changes
            </button>
          </div>

          <div className='lg:col-span-7 flex flex-col gap-4 sticky top-24 print:static print:w-full'>
              {/* FIXED SUBHEADER ROW CARD - FULL CONTROL BUTTONS FULLY RESTORED HERE */}
              <div className='w-full flex items-center justify-between bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-3 rounded-2xl shadow-sm z-10 print:hidden'>
                  <div className="text-left pl-1">
                    <h2 className="text-xs font-black text-slate-800 dark:text-white truncate max-w-[120px]">{resumeData.title || "Untitled Workspace"}</h2>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">Canvas Target Frame</p>
                  </div>
                  
                  {/* RESTORED UTILITIES HUB CONTROLS NODE */}
                  <div className='flex items-center gap-2 shrink-0'>
                      {resumeData.public && (
                        <button onClick={handleShare} className='flex items-center py-2 px-3 gap-1.5 text-[11px] font-bold bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 border border-blue-100/40 dark:border-blue-900/40 rounded-xl transition-all hover:bg-blue-100 shadow-sm'>
                          <Share2Icon className='size-3.5'/> <span>Share</span>
                        </button>
                      )}
                      <button onClick={changeResumeVisibility} className='flex items-center py-2 px-3 gap-1.5 text-[11px] font-bold bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-400 border border-purple-100/40 dark:border-purple-900/40 rounded-xl transition-all hover:bg-purple-100 shadow-sm'>
                        {resumeData.public ? <EyeIcon className="size-3.5"/> : <EyeOffIcon className="size-3.5"/>}
                        <span>{resumeData.public ? 'Public' : 'Private'}</span>
                      </button>
                      <button onClick={downloadResume} className='flex items-center gap-1.5 px-4 py-2 text-[11px] font-bold bg-green-600 hover:bg-green-500 text-white rounded-xl shadow-md shadow-green-100'>
                        <DownloadIcon className='size-3.5' strokeWidth={2.5}/> <span>Download</span>
                      </button>
                  </div>
              </div>

              <ResumePreview data={resumeData} template={resumeData.template} accentColor={resumeData.accent_color} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;