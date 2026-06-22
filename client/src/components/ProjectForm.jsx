// import React from 'react';
import { Plus, FolderGit2, Trash2 } from 'lucide-react';

const ProjectForm = ({ data, onChange }) => {
    const addProject = () => {
        const newProject = { name: "", type: "", description: "" };
        onChange([...data, newProject]);
    };

    const removeProject = (index) => {
        onChange(data.filter((_, i) => i !== index));
    };

    const updateProject = (index, field, value) => {
        const updated = [...data];
        updated[index] = { ...updated[index], [field]: value };
        onChange(updated);
    };

    return (
        <div className="space-y-5 text-left">
            <div className='flex items-center justify-between border-b border-slate-100 pb-3'>
                <div>
                    <h3 className='text-base font-bold text-slate-900 dark:text-white'>Technical & Core Projects</h3>
                    <p className='text-xs font-semibold text-slate-400 mt-0.5'>Demonstrate your skill applications via live works</p>
                </div>
                <button 
                    onClick={addProject} 
                    className='flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-green-50 text-green-700 border border-green-200/40 rounded-xl hover:bg-green-100 transition-colors shadow-sm'
                >
                    <Plus className="size-3.5"/>Add Project Asset
                </button>
            </div>

            {data.length === 0 ? (
                <div className='text-center py-10 bg-slate-50/50 dark:bg-slate-900/40 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl'>
                    <FolderGit2 className="w-10 h-10 mx-auto mb-2 text-slate-300 dark:text-slate-700"/>
                    <p className="text-xs font-bold text-slate-500">No functional tracking blueprints added yet.</p>
                </div>
            ) : (
                <div className='space-y-4'>
                    {data.map((project, index) => (
                        <div key={index} className="p-4 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-xl space-y-4 shadow-sm relative">
                            <div className='flex justify-between items-center'>
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Project Block #{index + 1}</h4>
                                <button onClick={() => removeProject(index)} className='text-slate-400 hover:text-red-600 p-1 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors'>
                                    <Trash2 className="size-3.5"/>
                                </button>
                            </div>

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-3.5'>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-slate-500">Project Title / Name</label>
                                    <input value={project.name || ""} onChange={(e) => updateProject(index, "name", e.target.value)} type="text" placeholder="e.g. AI-Powered Platform" className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-lg outline-none focus:border-indigo-50"/>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-slate-500">Deployment Type / Domain</label>
                                    <input value={project.type || ""} onChange={(e) => updateProject(index, "type", e.target.value)} type="text" placeholder="e.g. NextJS web architecture / Open-Source" className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-lg outline-none focus:border-indigo-50"/>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500">Core Architecture Breakdown</label>
                                <textarea rows={4} value={project.description || ""} onChange={(e) => updateProject(index, "description", e.target.value)} placeholder="Elaborate features execution parameters, scaling limits, tools used..." className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl resize-none outline-none focus:border-indigo-50"/>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProjectForm;