// import React from 'react';
import { GraduationCap, Plus, Trash2 } from 'lucide-react';

const EducationForm = ({ data, onChange }) => {
    const addEducation = () => {
        const newEducation = { institution: "", degree: "", field: "", graduation_date: "", gpa: "" };
        onChange([...data, newEducation]);
    };

    const removeEducation = (index) => {
        onChange(data.filter((_, i) => i !== index));
    };

    const updateEducation = (index, field, value) => {
        const updated = [...data];
        updated[index] = { ...updated[index], [field]: value };
        onChange(updated);
    };

    return (
        <div className='space-y-5 text-left'>
            <div className='flex items-center justify-between border-b border-slate-100 pb-3'>
                <div>
                    <h3 className='text-base font-bold text-slate-900 dark:text-white'>Education History</h3>
                    <p className='text-xs font-semibold text-slate-400 mt-0.5'>Add academic milestones and degrees</p>
                </div>
                <button 
                    onClick={addEducation} 
                    className='flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-green-50 text-green-700 border border-green-200/40 rounded-xl hover:bg-green-100 transition-colors shadow-sm'
                >
                    <Plus className="size-3.5"/>Add Block
                </button>
            </div>

            {data.length === 0 ? (
                <div className='text-center py-10 bg-slate-50/50 dark:bg-slate-900/40 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl'>
                    <GraduationCap className="w-10 h-10 mx-auto mb-2 text-slate-300 dark:text-slate-700"/>
                    <p className="text-xs font-bold text-slate-500">No academic structures populated yet.</p>
                </div>
            ) : (
                <div className='space-y-4'>
                    {data.map((education, index) => (
                        <div key={index} className="p-4 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-xl space-y-4 shadow-sm relative group">
                            <div className='flex justify-between items-center'>
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Institution Entry #{index + 1}</h4>
                                <button onClick={() => removeEducation(index)} className='text-slate-400 hover:text-red-600 p-1 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors'>
                                    <Trash2 className="size-3.5"/>
                                </button>
                            </div>

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-3.5'>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-slate-500">Institution</label>
                                    <input value={education.institution || ""} onChange={(e) => updateEducation(index, "institution", e.target.value)} type="text" placeholder="e.g. Stanford University" className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-lg outline-none focus:border-indigo-50"/>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-slate-500">Degree</label>
                                    <input value={education.degree || ""} onChange={(e) => updateEducation(index, "degree", e.target.value)} type="text" placeholder="e.g. Bachelor of Science" className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-lg outline-none focus:border-indigo-50"/>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-slate-500">Field of Study</label>
                                    <input value={education.field || ""} onChange={(e) => updateEducation(index, "field", e.target.value)} type="text" placeholder="e.g. Computer Science" className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-lg outline-none focus:border-indigo-50"/>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-slate-500">Graduation Date</label>
                                    <input value={education.graduation_date || ""} onChange={(e) => updateEducation(index, "graduation_date", e.target.value)} type="month" className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-lg outline-none focus:border-indigo-50"/>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500">GPA / Grade Performance (Optional)</label>
                                <input value={education.gpa || ""} onChange={(e) => updateEducation(index, "gpa", e.target.value)} type="text" placeholder="e.g. 3.9 / 4.0" className="w-full md:w-1/2 px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-lg outline-none focus:border-indigo-50"/>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default EducationForm;