import React, { useState, useRef, useEffect } from 'react';
import { Check, Palette } from 'lucide-react';

const ColorPicker = ({ selectedColor, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const colors = [
        "#3B82F6", "#10B981", "#6366F1", "#8B5CF6", "#EC4899", "#F59E0B", "#EF4444", "#090d16"
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
                className='p-2.5 text-slate-500 hover:text-slate-800 bg-slate-50 border border-slate-200 rounded-xl transition-all shadow-sm flex items-center gap-1.5 text-xs font-bold'
                style={{ borderColor: selectedColor + '30' }}
            >
                <Palette size={14} style={{ color: selectedColor }} />
                <span>Accent Tint</span>
            </button>

            {isOpen && (
                <div className='absolute left-0 mt-2 p-3 z-[150] bg-white rounded-2xl border border-slate-200 shadow-xl grid grid-cols-4 gap-2 animate-in fade-in slide-in-from-top-1 duration-200'>
                    {colors.map((color) => (
                        <div 
                            key={color} 
                            onClick={() => { onChange(color); setIsOpen(false); }} 
                            className='size-7 rounded-lg cursor-pointer transition-transform hover:scale-110 relative flex items-center justify-center border border-slate-100 shadow-sm'
                            style={{ backgroundColor: color }}
                        >
                            {selectedColor === color && <Check className="w-3 h-3 text-white stroke-[3.5]" />}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ColorPicker;