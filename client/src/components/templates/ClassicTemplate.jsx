// import React from 'react';
import { Mail, Phone, MapPin, Globe } from "lucide-react";

const ClassicTemplate = ({ data, accentColor }) => {
    const formatDate = (dateStr) => {
        if (!dateStr) return "";
        const [year, month] = dateStr.split("-");
        return new Date(year, month - 1).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short"
        });
    };

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white text-slate-800 leading-relaxed shadow-sm rounded-xl">
            {/* Header */}
            <header className="text-center mb-8 pb-6 border-b-2" style={{ borderColor: accentColor }}>
                <h1 className="text-3xl font-extrabold mb-2 tracking-tight" style={{ color: accentColor }}>
                    {data.personal_info?.full_name || "Your Name"}
                </h1>

                <div className="flex flex-wrap justify-center gap-4 text-xs font-medium text-slate-600">
                    {data.personal_info?.email && (
                        <div className="flex items-center gap-1">
                            <Mail className="size-3.5" style={{ color: accentColor }} />
                            <span>{data.personal_info.email}</span>
                        </div>
                    )}
                    {data.personal_info?.phone && (
                        <div className="flex items-center gap-1">
                            <Phone className="size-3.5" style={{ color: accentColor }} />
                            <span>{data.personal_info.phone}</span>
                        </div>
                    )}
                    {data.personal_info?.location && (
                        <div className="flex items-center gap-1">
                            <MapPin className="size-3.5" style={{ color: accentColor }} />
                            <span>{data.personal_info.location}</span>
                        </div>
                    )}
                    {data.personal_info?.website && (
                        <div className="flex items-center gap-1">
                            <Globe className="size-3.5" style={{ color: accentColor }} />
                            <span>{data.personal_info.website}</span>
                        </div>
                    )}
                </div>
            </header>

            {/* Professional Summary */}
            {data.professional_summary && (
                <section className="mb-6 text-left">
                    <h2 className="text-sm font-bold tracking-wider mb-2.5 uppercase" style={{ color: accentColor }}>
                        Professional Summary
                    </h2>
                    <p className="text-sm text-slate-700 leading-relaxed font-normal">{data.professional_summary}</p>
                </section>
            )}

            {/* Experience */}
            {data.experience && data.experience.length > 0 && (
                <section className="mb-6 text-left">
                    <h2 className="text-sm font-bold tracking-wider mb-4 uppercase" style={{ color: accentColor }}>
                        Professional Experience
                    </h2>
                    <div className="space-y-5">
                        {data.experience.map((exp, index) => (
                            <div key={index} className="border-l-2 pl-4 transition-colors" style={{ borderColor: accentColor }}>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1.5">
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-base">{exp.position}</h3>
                                        <p className="text-sm font-semibold" style={{ color: accentColor }}>{exp.company}</p>
                                    </div>
                                    <span className="text-xs font-semibold text-slate-500 whitespace-nowrap mt-1 sm:mt-0">
                                        {formatDate(exp.start_date)} — {exp.is_current ? "Present" : formatDate(exp.end_date)}
                                    </span>
                                </div>
                                {exp.description && (
                                    <p className="text-xs sm:text-sm text-slate-600 whitespace-pre-line leading-relaxed">{exp.description}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Projects */}
            {data.project && data.project.length > 0 && (
                <section className="mb-6 text-left">
                    <h2 className="text-sm font-bold tracking-wider mb-4 uppercase" style={{ color: accentColor }}>
                        Key Projects
                    </h2>
                    <div className="space-y-4">
                        {data.project.map((proj, index) => (
                            <div key={index} className="border-l-2 pl-4 border-slate-200">
                                <h3 className="font-bold text-slate-900 text-sm">{proj.name}</h3>
                                {proj.type && <p className="text-xs font-medium text-slate-400 mb-1">{proj.type}</p>}
                                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{proj.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Education */}
            {data.education && data.education.length > 0 && (
                <section className="mb-6 text-left">
                    <h2 className="text-sm font-bold tracking-wider mb-4 uppercase" style={{ color: accentColor }}>
                        Education
                    </h2>
                    <div className="space-y-3.5">
                        {data.education.map((edu, index) => (
                            <div key={index} className="flex justify-between items-start text-sm">
                                <div>
                                    <h3 className="font-bold text-slate-900">
                                        {edu.degree} {edu.field && `in ${edu.field}`}
                                    </h3>
                                    <p className="text-slate-600 font-medium text-xs">{edu.institution}</p>
                                    {edu.gpa && <p className="text-xs text-slate-400 mt-0.5">GPA: {edu.gpa}</p>}
                                </div>
                                <span className="text-xs font-medium text-slate-500">{formatDate(edu.graduation_date)}</span>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Skills */}
            {data.skills && data.skills.length > 0 && (
                <section className="text-left">
                    <h2 className="text-sm font-bold tracking-wider mb-3 uppercase" style={{ color: accentColor }}>
                        Core Competencies
                    </h2>
                    <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs sm:text-sm font-medium text-slate-700">
                        {data.skills.map((skill, index) => (
                            <span key={index} className="flex items-center">
                              <span className="mr-1.5" style={{ color: accentColor }}>•</span> {skill}
                            </span>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};

export default ClassicTemplate;