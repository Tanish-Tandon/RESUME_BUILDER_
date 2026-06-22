import  { useState } from 'react';
import { Plus, Sparkles, X } from 'lucide-react';

const SkillsForm = ({ data, onChange }) => {
    const [newSkill, setNewSkill] = useState("");

    const addSkill = () => {
        if (newSkill.trim() && !data.includes(newSkill.trim())) {
            onChange([...data, newSkill.trim()]);
            setNewSkill("");
        }
    };

    const removeSkill = (indexToRemove) => {
        onChange(data.filter((_, index) => index !== indexToRemove));
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            addSkill();
        }
    };

    return (
        <div className='space-y-4 text-left'>
            <div>
                <h3 className='text-base font-bold text-slate-900 dark:text-white'>Core Tech & Soft Competencies</h3>
                <p className='text-xs font-semibold text-slate-400 mt-0.5'>Inject searchable terms and tool parameters</p>
            </div>

            <div className="flex gap-2 max-w-lg">
                <input 
                    type="text" 
                    placeholder="e.g., JavaScript, Docker, Agile Scrum" 
                    className='flex-1 px-3 py-2 text-xs bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-indigo-50 shadow-sm'
                    onChange={(e) => setNewSkill(e.target.value)}
                    value={newSkill}
                    onKeyDown={handleKeyPress}
                />
                <button 
                    onClick={addSkill} 
                    disabled={!newSkill.trim()} 
                    className='flex items-center gap-1.5 px-4 py-2 text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-md shadow-indigo-100'
                >
                    <Plus className="size-3.5"/> <span>Inject</span>
                </button>
            </div>

            {data.length > 0 ? (
                <div className='flex flex-wrap gap-2 pt-2 max-w-2xl'>
                    {data.map((skill, index) => (
                        <span key={index} className='flex items-center gap-1.5 px-3 py-1 bg-indigo-50 text-indigo-700 border border-indigo-100/40 font-bold rounded-full text-xs shadow-sm'>
                            <span>{skill}</span>
                            <button onClick={() => removeSkill(index)} className="hover:bg-indigo-100 rounded-full p-0.5 transition-colors text-indigo-400 hover:text-indigo-900">
                                <X className="w-3 h-3" strokeWidth={3} />
                            </button>
                        </span>
                    ))}
                </div>
            ) : (
                <div className='text-center py-6 bg-slate-50/40 dark:bg-slate-900/20 border border-dashed border-slate-200 dark:border-slate-800 rounded-xl'>
                    <Sparkles className="w-8 h-8 mx-auto mb-2 text-slate-300 dark:text-slate-700"/>
                    <p className="text-xs font-bold text-slate-400">Keyword matrix data empty.</p>
                </div>
            )}

            <div className='bg-indigo-50/60 border border-indigo-100/30 p-3.5 rounded-xl max-w-xl'>
                <p className='text-xs text-indigo-900 font-semibold leading-relaxed'>
                    <strong>Structural Tip:</strong> Try adding 8-12 strict stack descriptors mapping keyword patterns of prospective vacancy screening systems precisely.
                </p>
            </div>
        </div>
    );
};

export default SkillsForm;