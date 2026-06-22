import React from 'react';

const PersonalInfoForm = ({ data, onChange, removeBackground, setRemoveBackground }) => {
    const handleChange = (field, value) => {
        onChange({ ...data, [field]: value });
    };

    const fields = [
        { key: "full_name", label: "Full Name", type: "text", required: true },
        { key: "email", label: "Email Address", type: "email", required: true },
        { key: "phone", label: "Phone Number", type: "tel" },
        { key: "location", label: "Location (e.g. San Francisco, CA)", type: "text" },
        { key: "profession", label: "Profession Title", type: "text" },
        { key: "website", label: "Personal Portfolio URL", type: "url" },
        { key: "linkedin", label: "LinkedIn Link", type: "url" },
        { key: "github", label: "GitHub Repository Link", type: "url" },
        { key: "leetcode", label: "LeetCode Handle Link", type: "url" }
    ];

    return (
        <div className="text-left space-y-4 animate-in fade-in duration-150">
            <div>
                <h3 className='text-base font-bold text-slate-900 dark:text-white'>Personal Details</h3>
                <p className='text-xs font-semibold text-slate-400 mt-0.5'>Populate key demographic identity endpoints</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {fields.map((field) => {
                    return (
                        <div key={field.key} className='space-y-1.5'>
                            <label className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
                                <span>{field.label}</span>
                                {field.required && <span className="text-red-500">*</span>}
                            </label>
                            <input 
                                type={field.type} 
                                value={data[field.key] || ""} 
                                onChange={(e) => handleChange(field.key, e.target.value)} 
                                className='w-full px-3 py-2 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white rounded-lg outline-none focus:border-indigo-50 text-xs font-medium transition-all shadow-sm' 
                                placeholder={`Enter your ${field.label.toLowerCase()}`} 
                                required={field.required}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PersonalInfoForm;