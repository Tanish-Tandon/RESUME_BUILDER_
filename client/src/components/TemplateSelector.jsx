import React, { useState, useRef, useEffect } from 'react';
import { Check, Layout } from 'lucide-react';

const TemplateSelector = ({ selectedTemplate, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const templates = [
        { id: "classic", name: "Classic Corporate", preview: "Traditional clean layout." },
        { id: "modern", name: "Modern Developer", preview: "Sleek with header colors." },
        { id: "minimal", name: "Ultra Minimalist", preview: "Clean typography focused." },
        { id: "minimal-image", name: "Minimal Image", preview: "With profile picture." },
        { id: "deedy", name: "Deedy Minimalist", preview: "Technical enterprise layout." }
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className='relative inline-block text-left' ref={dropdownRef}>
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className='flex items-center gap-2 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200/60 shadow-sm hover:bg-blue-100 transition-all px-4 py-2.5 rounded-xl outline-none focus:ring-2 focus:ring-blue-400'
            >
                <Layout size={14} /> 
                <span>Active Canvas Blueprint</span>
            </button>

            {isOpen && (
                <div className='absolute left-0 mt-2 w-80 max-h-[420px] overflow-y-auto p-3 z-[150] bg-white rounded-2xl border border-slate-200 shadow-xl scrollbar-hide animate-in fade-in slide-in-from-top-1 duration-200'>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-1 mb-2">Select Layout Framework</p>
                    <div className="space-y-2">
                        {templates.map((template) => (
                            <div 
                                key={template.id} 
                                onClick={() => { onChange(template.id); setIsOpen(false); }} 
                                className={`relative p-3 border rounded-xl cursor-pointer transition-all ${selectedTemplate === template.id ? "border-blue-500 bg-blue-50/70 shadow-sm" : "border-slate-100 hover:border-slate-200 hover:bg-slate-50"}`}
                            >
                                {selectedTemplate === template.id && (
                                    <div className="absolute top-3 right-3 size-4 bg-blue-600 rounded-full flex items-center justify-center shadow-sm">
                                        <Check className="w-2.5 h-2.5 text-white" strokeWidth={4} />
                                    </div>
                                )}
                                <div className="text-left space-y-0.5 pr-4">
                                    <h4 className={`text-xs font-bold ${selectedTemplate === template.id ? "text-blue-900" : "text-slate-800"}`}>{template.name}</h4>
                                    <p className='text-[11px] text-slate-400 leading-normal font-medium'>{template.preview}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TemplateSelector;