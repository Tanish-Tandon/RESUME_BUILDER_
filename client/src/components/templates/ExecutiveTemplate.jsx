// import React from 'react';
import { Mail, Phone, MapPin, Globe } from "lucide-react";

const ExecutiveTemplate = ({ data, accentColor }) => {
    const formatDate = (dateStr) => {
        if (!dateStr) return "";
        const [year, month] = dateStr.split("-");
        return new Date(year, month - 1).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short"
        });
    };

    return (
        <div className="max-w-4xl mx-auto bg-white text-slate-800 text-left p-8 rounded-xl shadow-sm">
            {/* Header Layout */}
            <header className="border-b border-slate-200 pb-6 mb-6">
                <h1 className="text-3xl font-black text-slate-900 tracking-tight uppercase" style={{ color: accentColor }}>
                    {data.personal_info?.full_name || "Your Name"}
                </h1>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
                    {data.personal_info?.profession || "Executive Management"}
                </p>
            </header>

            {/* Split Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Left Column - Core Info */}
                <div className="md:col-span-4 space-y-6">
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Contact Details</h3>
                        <div className="space-y-2 text-xs font-medium text-slate-600">
                            {data.personal_info?.email && (
                                <div className="flex items-center gap-2"><Mail size={13} style={{ color: accentColor }} /><span className="break-all">{data.personal_info.email}</span></div>
                            )}
                            {data.personal_info?.phone && (
                                <div className="flex items-center gap-2"><Phone size={13} style={{ color: accentColor }} /><span>{data.personal_info.phone}</span></div>
                            )}
                            {data.personal_info?.location && (
                                <div className="flex items-center gap-2"><MapPin size={13} style={{ color: accentColor }} /><span>{data.personal_info.location}</span></div>
                            )}
                            {data.personal_info?.website && (
                                <div className="flex items-center gap-2"><Globe size={13} style={{ color: accentColor }} /><span className="break-all">{data.personal_info.website}</span></div>
                            )}
                        </div>
                    </div>

                    {/* Education block */}
                    {data.education && data.education.length > 0 && (
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Education</h3>
                            <div className="space-y-3">
                                {data.education.map((edu, index) => (
                                    <div key={index} className="text-xs">
                                        <p className="font-bold text-slate-800">{edu.degree}</p>
                                        <p className="text-slate-500 font-medium">{edu.institution}</p>
                                        <p className="text-[10px] text-slate-400 font-bold mt-0.5">{formatDate(edu.graduation_date)}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Skills System badges */}
                    {data.skills && data.skills.length > 0 && (
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">Expertise</h3>
                            <div className="flex flex-wrap gap-1.5">
                                {data.skills.map((skill, index) => (
                                    <span key={index} className="px-2 py-1 text-[10px] font-bold text-slate-700 bg-slate-100 border border-slate-200/60 rounded-md">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Main Content Column */}
                <div className="md:col-span-8 space-y-6 border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-6">
                    {data.professional_summary && (
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-wider mb-2.5" style={{ color: accentColor }}>Executive Summary</h3>
                            <p className="text-sm text-slate-600 leading-relaxed font-normal">{data.professional_summary}</p>
                        </div>
                    )}

                    {data.experience && data.experience.length > 0 && (
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: accentColor }}>Professional History</h3>
                            <div className="space-y-5">
                                {data.experience.map((exp, index) => (
                                    <div key={index} className="space-y-1">
                                        <div className="flex justify-between items-baseline gap-2">
                                            <h4 className="font-bold text-slate-900 text-sm">{exp.position}</h4>
                                            <span className="text-[10px] font-bold text-slate-400 whitespace-nowrap">
                                                {formatDate(exp.start_date)} — {exp.is_current ? "Present" : formatDate(exp.end_date)}
                                            </span>
                                        </div>
                                        <p className="text-xs font-bold opacity-80" style={{ color: accentColor }}>{exp.company}</p>
                                        {exp.description && (
                                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line mt-1">{exp.description}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ExecutiveTemplate;