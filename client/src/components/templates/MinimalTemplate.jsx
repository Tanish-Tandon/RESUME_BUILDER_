// import React from 'react/

const MinimalTemplate = ({ data, accentColor }) => {
    const formatDate = (dateStr) => {
        if (!dateStr) return "";
        const [year, month] = dateStr.split("-");
        return new Date(year, month - 1).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short"
        });
    };

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white text-slate-800 font-light rounded-xl shadow-sm text-left">
            <header className="mb-8">
                <h1 className="text-4xl font-extralight text-slate-900 tracking-wide mb-3">
                    {data.personal_info?.full_name || "Your Name"}
                </h1>
                <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs font-semibold text-slate-400">
                    {data.personal_info?.email && <span>{data.personal_info.email}</span>}
                    {data.personal_info?.phone && <span>{data.personal_info.phone}</span>}
                    {data.personal_info?.location && <span>{data.personal_info.location}</span>}
                    {data.personal_info?.linkedin && <span className="break-all">{data.personal_info.linkedin}</span>}
                    {data.personal_info?.website && <span className="break-all">{data.personal_info.website}</span>}
                </div>
            </header>

            {data.professional_summary && (
                <section className="mb-8">
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">{data.professional_summary}</p>
                </section>
            )}

            {data.experience && data.experience.length > 0 && (
                <section className="mb-8">
                    <h2 className="text-xs uppercase tracking-[0.2em] mb-4 font-bold" style={{ color: accentColor }}>Experience</h2>
                    <div className="space-y-5">
                        {data.experience.map((exp, index) => (
                            <div key={index} className="space-y-1">
                                <div className="flex justify-between items-baseline">
                                    <h3 className="text-base font-bold text-slate-900">{exp.position}</h3>
                                    <span className="text-xs font-medium text-slate-400 whitespace-nowrap">
                                        {formatDate(exp.start_date)} — {exp.is_current ? "Present" : formatDate(exp.end_date)}
                                    </span>
                                </div>
                                <p className="text-xs font-semibold text-slate-500">{exp.company}</p>
                                {exp.description && <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed whitespace-pre-line mt-1">{exp.description}</p>}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {data.project && data.project.length > 0 && (
                <section className="mb-8">
                    <h2 className="text-xs uppercase tracking-[0.2em] mb-4 font-bold" style={{ color: accentColor }}>Projects</h2>
                    <div className="space-y-4">
                        {data.project.map((proj, index) => (
                            <div key={index} className="space-y-0.5">
                                <h3 className="text-sm font-bold text-slate-900">{proj.name}</h3>
                                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">{proj.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {data.education && data.education.length > 0 && (
                <section className="mb-8">
                    <h2 className="text-xs uppercase tracking-[0.2em] mb-4 font-bold" style={{ color: accentColor }}>Education</h2>
                    <div className="space-y-4">
                        {data.education.map((edu, index) => (
                            <div key={index} className="flex justify-between items-baseline text-xs sm:text-sm">
                                <div>
                                    <h3 className="font-bold text-slate-900">{edu.degree} {edu.field && `in ${edu.field}`}</h3>
                                    <p className="text-slate-500 font-medium text-xs">{edu.institution}</p>
                                    {edu.gpa && <p className="text-[11px] text-slate-400 mt-0.5">GPA: {edu.gpa}</p>}
                                </div>
                                <span className="text-xs font-medium text-slate-400">{formatDate(edu.graduation_date)}</span>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {data.skills && data.skills.length > 0 && (
                <section>
                    <h2 className="text-xs uppercase tracking-[0.2em] mb-3 font-bold" style={{ color: accentColor }}>Skills</h2>
                    <div className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
                        {data.skills.join("  •  ")}
                    </div>
                </section>
            )}
        </div>
    );
};

export default MinimalTemplate;