import React from 'react';
import DeedyTemplate from './templates/DeedyTemplate';
import ClassicTemplate from './templates/ClassicTemplate';
import ModernTemplate from './templates/ModernTemplate';
import MinimalTemplate from './templates/MinimalTemplate';
import MinimalImageTemplate from './templates/MinimalImageTemplate';

const ResumePreview = ({ data, template, accentColor, classes = "" }) => {
    const renderTemplate = () => {
        switch (template) {
            case "modern":
                return <ModernTemplate data={data} accentColor={accentColor} />;
            case "minimal":
                return <MinimalTemplate data={data} accentColor={accentColor} />;
            case "minimal-image":
                return <MinimalImageTemplate data={data} accentColor={accentColor} />;
            case "deedy":
                return <DeedyTemplate data={data} accentColor={accentColor} />;
            default:
                return <ClassicTemplate data={data} accentColor={accentColor} />;
        }
    };

    return (
        <div className='w-full bg-slate-100/40 p-4 sm:p-8 rounded-2xl border border-slate-200/50 shadow-inner overflow-y-auto max-h-[85vh] scrollbar-hide print:p-0 print:bg-transparent print:border-none print:max-h-none print:overflow-visible'>
            <div id="resume-preview" className={"print:shadow-none print:border-none shadow-xl border border-slate-200 rounded-xl bg-white " + classes}>
                {renderTemplate()}
            </div>

            <style>{`
                @page {
                  size: A4 portrait;
                  margin: 0mm;
                }
                @media print {
                  html, body {
                    width: 210mm !important;
                    height: 297mm !important;
                    background: #fff !important;
                    color: #000 !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    overflow: hidden !important;
                  }
                  body * {
                    visibility: hidden !important;
                  }
                  #resume-preview, #resume-preview * {
                    visibility: visible !important;
                  }
                  #resume-preview {
                    position: absolute !important;
                    left: 0 !important;
                    top: 0 !important;
                    width: 210mm !important;
                    height: 297mm !important;
                    margin: 0 !important;
                    padding: 15mm !important;
                    box-shadow: none !important;
                    border: none !important;
                    box-sizing: border-box !important;
                    background: white !important;
                  }
                }
            `}</style>
        </div>
    );
};

export default ResumePreview;