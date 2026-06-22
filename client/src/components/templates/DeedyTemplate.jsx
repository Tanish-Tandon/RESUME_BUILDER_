// import React from 'react';

const DeedyTemplate = ({ data, accentColor }) => {
    return (
        <div id="deedy-document-canvas" className="w-[210mm] min-h-[297mm] max-h-[297mm] p-8 bg-white text-slate-950 mx-auto text-left relative overflow-hidden print:p-0 print:m-0 print:max-h-none" style={{ fontSize: '11px', lineHeight: '1.35' }}>
            
            {/* Branding Header Area */}
            <div className="text-center space-y-0.5 mb-4">
                <h1 className="text-3xl font-bold tracking-tight uppercase text-slate-900">
                    {data.personal_info?.full_name || "FIRSTNAME LASTNAME"}
                </h1>
                
                {/* Communication Layer */}
                <div className="flex flex-wrap justify-center items-center gap-x-2.5 gap-y-0.5 text-slate-600 font-semibold text-[11px]">
                    {data.personal_info?.phone && <span>{data.personal_info.phone}</span>}
                    {data.personal_info?.email && <span>| {data.personal_info.email}</span>}
                    {data.personal_info?.location && <span>| {data.personal_info.location}</span>}
                </div>

                {/* Developer Social Portals Header */}
                <div className="flex flex-wrap justify-center items-center gap-x-2.5 gap-y-0.5 text-slate-500 font-bold text-[10px]">
                    {data.personal_info?.linkedin && (
                        <span>LinkedIn: <span className="font-medium text-slate-400">{data.personal_info.linkedin.replace(/^https?:\/\/(www\.)?/, '')}</span></span>
                    )}
                    {data.personal_info?.github && (
                        <span>• GitHub: <span className="font-medium text-slate-400">{data.personal_info.github.replace(/^https?:\/\/(www\.)?/, '')}</span></span>
                    )}
                    {data.personal_info?.leetcode && (
                        <span>• LeetCode: <span className="font-medium text-slate-400">{data.personal_info.leetcode.replace(/^https?:\/\/(www\.)?/, '')}</span></span>
                    )}
                </div>
            </div>

            {/* 1. CAREER SUMMARY */}
            {data.professional_summary && (
                <div className="mb-4">
                    <h2 className="text-[10.5px] font-black uppercase tracking-wider mb-0.5" style={{ color: accentColor }}>Career Summary</h2>
                    <hr className="border-slate-200 mb-1.5" />
                    <p className="text-slate-800 text-[11px] text-justify font-normal leading-relaxed">{data.professional_summary}</p>
                </div>
            )}

            {/* 2. PROJECTS */}
            {data.project && data.project.length > 0 && (
                <div className="mb-4">
                    <h2 className="text-[10.5px] font-black uppercase tracking-wider mb-0.5" style={{ color: accentColor }}>Projects</h2>
                    <hr className="border-slate-200 mb-1.5" />
                    <div className="space-y-2">
                        {data.project.map((proj, idx) => (
                            <div key={idx} className="space-y-0.5">
                                <div className="font-bold text-[11px] text-slate-900">
                                    {proj.name} {proj.type && <span className="font-semibold text-slate-500 text-[10px]">| {proj.type}</span>}
                                </div>
                                <p className="text-slate-700 text-[11px] font-normal leading-normal">{proj.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* 3. EDUCATION */}
            {data.education && data.education.length > 0 && (
                <div className="mb-4">
                    <h2 className="text-[10.5px] font-black uppercase tracking-wider mb-0.5" style={{ color: accentColor }}>Education</h2>
                    <hr className="border-slate-200 mb-1.5" />
                    <div className="space-y-2">
                        {data.education.map((edu, idx) => (
                            <div key={idx} className="flex justify-between items-baseline text-[11px]">
                                <div>
                                    <span className="font-bold text-slate-900">{edu.degree} {edu.field && `in ${edu.field}`}</span>
                                    <span className="text-slate-500 text-[10px] font-medium ml-2">— {edu.institution} {edu.gpa && `(GPA: ${edu.gpa})`}</span>
                                </div>
                                <span className="text-slate-400 font-bold text-[10px] uppercase">{edu.graduation_date}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* 4. TECHNICAL SKILLS */}
            {data.skills && data.skills.length > 0 && (
                <div>
                    <h2 className="text-[10.5px] font-black uppercase tracking-wider mb-0.5" style={{ color: accentColor }}>Technical Skills</h2>
                    <hr className="border-slate-200 mb-1.5" />
                    <p className="text-slate-800 text-[11px] font-medium leading-relaxed">
                        {data.skills.join("   •   ")}
                    </p>
                </div>
            )}
        </div>
    );
};

export default DeedyTemplate;