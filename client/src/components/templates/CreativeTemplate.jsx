// import React from 'react';
import { Mail, Phone, MapPin, Globe } from "lucide-react";

const CreativeTemplate = ({ data, accentColor }) => {
    const formatDate = (dateStr) => {
        if (!dateStr) return "";
        const [year, month] = dateStr.split("-");
        return new Date(year, month - 1).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short"
        });
    };

    return (
        <div className="max-w-4xl mx-auto bg-white text-slate-800 text-left rounded-xl overflow-hidden shadow-sm border border-slate-100">
            {/* Unique Asymmetric Layout Header Block */}
            <div className="p-8 text-white flex flex-col md:flex-row md:items-center justify-between gap-6" style={{ backgroundColor: accentColor }}>
                <div className="space-y-1">
                    <h1 className="text-4xl font-black tracking-tight uppercase">{data.personal_info?.full_name || "Your Name"}</h1>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-80 bg-white/20 px-3 py-0.5 rounded-full w-fit">{data.personal_info?.profession || "Creative Professional"}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs font-medium opacity-90 border-t md:border-t-0 border-white/20 pt-4 md:pt-0">
                    {data.personal_info?.email && <div className="flex items-center gap-1.5"><Mail size={12}/><span>{data.personal_info.email}</span></div>}
                    {data.personal_info?.phone && <div className="flex items-center gap-1.5"><Phone size={12}/><span>{data.personal_info.phone}</span></div>}
                    {data.personal_info?.location && <div className="flex items-center gap-1.5"><MapPin size={12}/><span>{data.personal_info.location}</span></div>}
                    {data.personal_info?.website && <div className="flex items-center gap-1.5"><Globe size={12}/><span>{data.personal_info.website}</span></div>}
                </div>
            </div>

            <div className="p-8 space-y-6">
                {data.professional_summary && (
                    <div className="bg-slate-50 border-l-4 p-4 rounded-r-xl" style={{ borderLeftColor: accentColor }}>
                        <p className="text-sm text-slate-600 leading-relaxed font-medium">{data.professional_summary}</p>
                    </div>
                )}

                {/* Projects Feature Grid (Heavier Focus) */}
                {data.project && data.project.length > 0 && (
                    <div>
                        <h2 className="text-base font-black uppercase tracking-wider mb-3 flex items-center gap-2">
                            <span className="size-1.5 rounded-full" style={{ backgroundColor: accentColor }}></span>
                            <span>Featured Projects Portfolio</span>
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {data.project.map((proj, index) => (
                                <div key={index} className="p-4 rounded-xl border border-slate-100 bg-white shadow-sm hover:border-slate-200 transition-all">
                                    <h3 className="font-bold text-slate-900 text-sm">{proj.name}</h3>
                                    {proj.type && <p className="text-[10px] font-bold mt-0.5" style={{ color: accentColor }}>{proj.type}</p>}
                                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">{proj.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Work History */}
                {data.experience && data.experience.length > 0 && (
                    <div>
                        <h2 className="text-base font-black uppercase tracking-wider mb-3 flex items-center gap-2">
                            <span className="size-1.5 rounded-full" style={{ backgroundColor: accentColor }}></span>
                            <span>Experience Timeline</span>
                        </h2>
                        <div className="space-y-4">
                            {data.experience.map((exp, index) => (
                                <div key={index} className="flex flex-col sm:flex-row sm:justify-between items-start gap-1 pb-3 border-b border-slate-50 last:border-none">
                                    <div className="space-y-0.5">
                                        <h3 className="text-sm font-bold text-slate-900">{exp.position} — <span style={{ color: accentColor }}>{exp.company}</span></h3>
                                        <p className="text-xs text-slate-500 max-w-xl leading-relaxed">{exp.description}</p>
                                    </div>
                                    <span className="text-[10px] font-extrabold text-slate-400 uppercase bg-slate-50 px-2 py-0.5 rounded border border-slate-100 shrink-0">
                                        {formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CreativeTemplate;