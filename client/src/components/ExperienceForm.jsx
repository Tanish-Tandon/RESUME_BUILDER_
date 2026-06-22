import React, { useState } from 'react';
import { Briefcase, Loader2, Plus, Sparkles, Trash2 } from 'lucide-react';
import { useSelector } from 'react-redux';
import api from '../configs/api';
import toast from 'react-hot-toast';

const ExperienceForm = ({ data, onChange }) => {
    const { token } = useSelector(state => state.auth);
    const [generatingIndex, setGeneratingIndex] = useState(-1);

    const addExperience = () => {
        const newExperience = { company: "", position: "", start_date: "", end_date: "", description: "", is_current: false };
        onChange([...data, newExperience]);
    };

    const removeExperience = (index) => {
        onChange(data.filter((_, i) => i !== index));
    };

    const updateExperience = (index, field, value) => {
        const updated = [...data];
        updated[index] = { ...updated[index], [field]: value };
        onChange(updated);
    };

    const generateDescription = async (index) => {
        setGeneratingIndex(index);
        const experience = data[index];
        const prompt = `enhance this job description ${experience.description} for the position of ${experience.position} at ${experience.company} using impactful metrics action verbs.`;

        try {
            const { data: resData } = await api.post('api/ai/enhance-job-desc', { userContent: prompt }, { headers: { Authorization: token } });
            updateExperience(index, "description", resData.enhancedContent);
            toast.success("AI Content generation synchronized.");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setGeneratingIndex(-1);
        }
    };

    return (
        <div className='space-y-5 text-left'>
            <div className='flex items-center justify-between border-b border-slate-100 pb-3'>
                <div>
                    <h3 className='text-base font-bold text-slate-900 dark:text-white'>Professional Experience</h3>
                    <p className='text-xs font-semibold text-slate-400 mt-0.5'>List relevant career records and history</p>
                </div>
                <button 
                    onClick={addExperience} 
                    className='flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-green-50 text-green-700 border border-green-200/40 rounded-xl hover:bg-green-100 transition-colors shadow-sm'
                >
                    <Plus className="size-3.5"/>Add Work Role
                </button>
            </div>

            {data.length === 0 ? (
                <div className='text-center py-10 bg-slate-50/50 dark:bg-slate-900/40 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl'>
                    <Briefcase className="w-10 h-10 mx-auto mb-2 text-slate-300 dark:text-slate-700"/>
                    <p className="text-xs font-bold text-slate-500">No organizational positions populated yet.</p>
                </div>
            ) : (
                <div className='space-y-4'>
                    {data.map((experience, index) => (
                        <div key={index} className="p-4 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-xl space-y-4 shadow-sm relative">
                            <div className='flex justify-between items-center'>
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Role Entry #{index + 1}</h4>
                                <button onClick={() => removeExperience(index)} className='text-slate-400 hover:text-red-600 p-1 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors'>
                                    <Trash2 className="size-3.5"/>
                                </button>
                            </div>

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-3.5'>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-slate-500">Company Name</label>
                                    <input value={experience.company || ""} onChange={(e) => updateExperience(index, "company", e.target.value)} type="text" placeholder="e.g. Google Inc." className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-lg outline-none focus:border-indigo-50"/>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-slate-500">Job Title / Designation</label>
                                    <input value={experience.position || ""} onChange={(e) => updateExperience(index, "position", e.target.value)} type="text" placeholder="e.g. Frontend Engineer" className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-lg outline-none focus:border-indigo-50"/>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-slate-500">Start Date</label>
                                    <input value={experience.start_date || ""} onChange={(e) => updateExperience(index, "start_date", e.target.value)} type="month" className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-lg outline-none focus:border-indigo-50"/>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-slate-500">End Date</label>
                                    <input value={experience.end_date || ""} onChange={(e) => updateExperience(index, "end_date", e.target.value)} type="month" disabled={experience.is_current} className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-lg outline-none focus:border-indigo-50 disabled:bg-slate-100/50 dark:disabled:bg-slate-800/40"/>
                                </div>
                            </div>

                            <label className='flex items-center gap-2 w-fit cursor-pointer select-none'>
                                <input type="checkbox" checked={experience.is_current || false} onChange={(e) => updateExperience(index, "is_current", e.target.checked)} className='rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 size-3.5'/>
                                <span className='text-xs font-bold text-slate-600'>I am currently executing responsibilities here</span>
                            </label>

                            <div className="space-y-1.5">
                                <div className='flex items-center justify-between'>
                                    <label className='text-xs font-bold text-slate-500'>Roles Description & Metrics Achievements</label>
                                    <button 
                                        onClick={() => generateDescription(index)} 
                                        disabled={generatingIndex === index || !experience.position || !experience.company} 
                                        className='flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200/40 rounded-lg hover:bg-purple-100 transition-colors disabled:opacity-40 disabled:cursor-not-allowed'
                                    >
                                        {generatingIndex === index ? <Loader2 className="w-3 h-3 animate-spin"/> : <Sparkles className='w-3 h-3'/>}
                                        <span>AI Core Alignment</span>
                                    </button>
                                </div>
                                <textarea value={experience.description || ""} onChange={(e) => updateExperience(index, "description", e.target.value)} rows={4} className="w-full text-xs px-3 py-2 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl resize-none outline-none focus:border-indigo-50" placeholder="e.g., Pioneered scalable structural architectures generating 25% computational latency gains..."/>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ExperienceForm;