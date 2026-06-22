// import React from 'react';
import { Mail, Phone, MapPin, Globe } from "lucide-react";

const ModernTemplate = ({ data, accentColor }) => {
    const formatDate = (dateStr) => {
        if (!dateStr) return "";
        const [year, month] = dateStr.split("-");
        return new Date(year, month - 1).toLocaleDateString("en-US", { year: "numeric", month: "short" });
    };

    return (
        <div className="max-w-4xl mx-auto bg-white text-slate-800 rounded-xl overflow-hidden shadow-sm text-left">
            <header className="p-8 text-white" style={{ backgroundColor: accentColor }}>
                <h1 className="text-4xl font-light tracking-wide mb-3">{data.personal_info?.full_name || "Your Name"}</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium opacity-90">
                    {data.personal_info?.email && (
                        <div className="flex items-center gap-2"><Mail className="size-3.5" /><span>{data.personal_info.email}</span></div>
                    )}
                    {data.personal_info?.phone && (
                        <div className="flex items-center gap-2"><Phone className="size-3.5" /><span>{data.personal_info.phone}</span></div>
                    )}
                    {data.personal_info?.location && (
                        <div className="flex items-center gap-2"><MapPin className="size-3.5" /><span>{data.personal_info.location}</span></div>
                    )}
                    {data.personal_info?.website && (
                        <div className="flex items-center gap-2"><Globe className="size-3.5" /><span className="break-all">{data.personal_info.website}</span></div>
                    )}
                </div>
            </header>

            <div className="p-8 space-y-6">
                {data.professional_summary && (
                    <section>
                        <h2 className="text-lg font-bold uppercase tracking-wider mb-2.5 pb-1 border-b border-slate-100" style={{ color: accentColor }}>Professional Summary</h2>
                        <p className="text-sm text-slate-600 leading-relaxed font-normal">{data.professional_summary}</p>
                    </section>
                )}

                {data.experience && data.experience.length > 0 && (
                    <section>
                        <h2 className="text-lg font-bold uppercase tracking-wider mb-4 pb-1 border-b border-slate-100" style={{ color: accentColor }}>Experience</h2>
                        <div className="space-y-4">
                            {data.experience.map((exp, index) => (
                                <div key={index} className="pl-4 border-l-2" style={{ borderLeftColor: `${accentColor}30` }}>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                                        <div>
                                            <h3 className="text-base font-bold text-slate-900">{exp.position}</h3>
                                            <p className="text-xs font-bold" style={{ color: accentColor }}>{exp.company}</p>
                                        </div>
                                        <span className="text-xs font-bold text-slate-400 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded">
                                            {formatDate(exp.start_date)} — {exp.is_current ? "Present" : formatDate(exp.end_date)}
                                        </span>
                                    </div>
                                    {exp.description && <p className="text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line mt-2">{exp.description}</p>}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {data.project && data.project.length > 0 && (
                    <section>
                        <h2 className="text-lg font-bold uppercase tracking-wider mb-4 pb-1 border-b border-slate-100" style={{ color: accentColor }}>Projects</h2>
                        <div className="space-y-4">
                            {data.project.map((p, index) => (
                                <div key={index} className="pl-4 border-l-2" style={{ borderLeftColor: accentColor }}>
                                    <h3 className="text-sm font-bold text-slate-900">{p.name}</h3>
                                    {p.description && <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">{p.description}</p>}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                <div className="grid sm:grid-cols-2 gap-6 pt-2">
                    {data.education && data.education.length > 0 && (
                        <section>
                            <h2 className="text-base font-bold uppercase tracking-wider mb-3 pb-1 border-b border-slate-100" style={{ color: accentColor }}>Education</h2>
                            <div className="space-y-3">
                                {data.education.map((edu, index) => (
                                    <div key={index} className="text-xs sm:text-sm">
                                        <h3 className="font-bold text-slate-900">{edu.degree} {edu.field && `in ${edu.field}`}</h3>
                                        <p className="text-xs font-semibold" style={{ color: accentColor }}>{edu.institution}</p>
                                        <div className="flex justify-between text-[11px] font-medium text-slate-400 mt-0.5">
                                            <span>{formatDate(edu.graduation_date)}</span>
                                            {edu.gpa && <span>GPA: {edu.gpa}</span>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {data.skills && data.skills.length > 0 && (
                        <section>
                            <h2 className="text-base font-bold uppercase tracking-wider mb-3 pb-1 border-b border-slate-100" style={{ color: accentColor }}>Skills</h2>
                            <div className="flex flex-wrap gap-1.5">
                                {data.skills.map((skill, index) => (
                                    <span key={index} className="px-2.5 py-1 text-xs font-semibold text-white rounded-md shadow-sm" style={{ backgroundColor: accentColor }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ModernTemplate;