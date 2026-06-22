// import React from 'react';
import { Mail, Phone, MapPin, Globe } from "lucide-react";

const MinimalImageTemplate = ({ data, accentColor }) => {
    const formatDate = (dateStr) => {
        if (!dateStr) return "";
        const [year, month] = dateStr.split("-");
        return new Date(year, month - 1).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
        });
    };

    return (
        <div className="max-w-5xl mx-auto bg-white text-slate-800 rounded-xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 border-b border-slate-100">
                <div className="col-span-1 py-8 flex justify-center items-center bg-slate-50/50">
                    {data.personal_info?.image && (
                        <img 
                            src={typeof data.personal_info.image === 'string' ? data.personal_info.image : URL.createObjectURL(data.personal_info.image)} 
                            alt="Profile" 
                            className="w-28 h-28 object-cover rounded-full shadow-inner border-2 border-white" 
                            style={{ outline: `2px solid ${accentColor}` }} 
                        />
                    )}
                </div>

                <div className="col-span-2 flex flex-col justify-center py-8 px-8 text-left">
                    <h1 className="text-3xl font-black text-slate-900 tracking-wide uppercase">
                        {data.personal_info?.full_name || "Your Name"}
                    </h1>
                    <p className="uppercase text-xs font-bold tracking-widest mt-1" style={{ color: accentColor }}>
                        {data?.personal_info?.profession || "Profession"}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-3">
                {/* Left Sidebar */}
                <aside className="col-span-1 border-r border-slate-100 p-6 bg-slate-50/30 text-left">
                    <section className="mb-6">
                        <h2 className="text-[11px] font-bold tracking-widest text-slate-400 mb-3 uppercase">Contact</h2>
                        <div className="space-y-2.5 text-xs font-medium text-slate-600">
                            {data.personal_info?.phone && (
                                <div className="flex items-center gap-2">
                                    <Phone size={13} style={{ color: accentColor }} />
                                    <span>{data.personal_info.phone}</span>
                                </div>
                            )}
                            {data.personal_info?.email && (
                                <div className="flex items-center gap-2">
                                    <Mail size={13} style={{ color: accentColor }} />
                                    <span className="break-all">{data.personal_info.email}</span>
                                </div>
                            )}
                            {data.personal_info?.location && (
                                <div className="flex items-center gap-2">
                                    <MapPin size={13} style={{ color: accentColor }} />
                                    <span>{data.personal_info.location}</span>
                                </div>
                            )}
                        </div>
                    </section>

                    {data.education && data.education.length > 0 && (
                        <section className="mb-6">
                            <h2 className="text-[11px] font-bold tracking-widest text-slate-400 mb-3 uppercase">Education</h2>
                            <div className="space-y-3.5 text-xs">
                                {data.education.map((edu, index) => (
                                    <div key={index} className="space-y-0.5">
                                        <p className="font-bold text-slate-800 uppercase">{edu.degree}</p>
                                        <p className="text-slate-600 font-medium">{edu.institution}</p>
                                        <p className="text-[10px] text-slate-400 font-bold">{formatDate(edu.graduation_date)}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {data.skills && data.skills.length > 0 && (
                        <section>
                            <h2 className="text-[11px] font-bold tracking-widest text-slate-400 mb-2.5 uppercase">Skills</h2>
                            <div className="flex flex-col gap-1.5 text-xs font-semibold text-slate-600">
                                {data.skills.map((skill, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <span className="size-1 rounded-full shrink-0" style={{ backgroundColor: accentColor }}></span>
                                        <span>{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </aside>

                {/* Right Content */}
                <main className="col-span-2 p-8 text-left">
                    {data.professional_summary && (
                        <section className="mb-6">
                            <h2 className="text-[11px] font-bold tracking-widest mb-2.5 uppercase" style={{ color: accentColor }}>Summary</h2>
                            <p className="text-sm text-slate-600 font-normal leading-relaxed">{data.professional_summary}</p>
                        </section>
                    )}

                    {data.experience && data.experience.length > 0 && (
                        <section className="mb-6">
                            <h2 className="text-[11px] font-bold tracking-widest mb-4 uppercase" style={{ color: accentColor }}>Experience</h2>
                            <div className="space-y-5">
                                {data.experience.map((exp, index) => (
                                    <div key={index} className="space-y-1">
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="font-bold text-slate-900 text-sm">{exp.position}</h3>
                                            <span className="text-[11px] font-bold text-slate-400">
                                                {formatDate(exp.start_date)} — {exp.is_current ? "Present" : formatDate(exp.end_date)}
                                            </span>
                                        </div>
                                        <p className="text-xs font-bold" style={{ color: accentColor }}>{exp.company}</p>
                                        {exp.description && (
                                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line mt-1">{exp.description}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {data.project && data.project.length > 0 && (
                        <section>
                            <h2 className="text-[11px] font-bold tracking-widest mb-4 uppercase" style={{ color: accentColor }}>Projects</h2>
                            <div className="space-y-4">
                                {data.project.map((project, index) => (
                                    <div key={index} className="space-y-0.5">
                                        <h3 className="font-bold text-slate-900 text-sm">{project.name}</h3>
                                        {project.type && <p className="text-xs font-semibold" style={{ color: accentColor }}>{project.type}</p>}
                                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">{project.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </main>
            </div>
        </div>
    );
};

export default MinimalImageTemplate;