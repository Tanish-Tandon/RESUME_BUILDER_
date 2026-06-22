import  { useState } from 'react';
import { Loader2, Sparkles, Check, X } from 'lucide-react';
import { useSelector } from 'react-redux';
import api from '../configs/api';
import toast from 'react-hot-toast';

const ProfessionalSummaryForm = ({ data, onChange, setResumeData }) => {
  const { token } = useSelector(state => state.auth);
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiPreviewContent, setAiPreviewContent] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

 const generateSummary = async () => {
    if (!data?.trim()) return toast.error("Please insert initial text parameters before optimization.");
    try {
      setIsGenerating(true);
      
      // Backend ko seedha 'data' bhejo, prompt backend mein generate karo
      const { data: response } = await api.post('/api/ai/enhance-pro-sum', 
        { userContent: data }, // Yahan 'data' (summary) bhejo
        { headers: { Authorization: token } }
      );
      
      setAiPreviewContent(response.enhancedContent);
      setShowConfirmation(true);
      toast.success("AI suggestion generated!");
    } catch (error) {
      console.error("AI Error:", error); // Terminal mein error dekho
      toast.error("AI optimization failed. Check console.");
    } finally {
      setIsGenerating(false);
    }
  };

  const applyAiChanges = () => {
    onChange(aiPreviewContent);
    setResumeData(prev => ({ ...prev, professional_summary: aiPreviewContent }));
    setShowConfirmation(false);
    setAiPreviewContent('');
    toast.success("AI content optimization synchronized to document workspace.");
  };

  return (
    <div className='space-y-4 text-left relative'>
      <div className='flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3'>
        <div>
            <h3 className='text-base font-bold text-slate-900 dark:text-white'>Professional Summary</h3>
            <p className='text-xs font-semibold text-slate-400 mt-0.5'>Add statement capturing high-impact profile parameters</p>
        </div>
        <button 
          disabled={isGenerating || !data?.trim()} 
          onClick={generateSummary} 
          className='flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-purple-50 text-purple-700 dark:bg-purple-950/40 dark:text-purple-400 border border-purple-200/40 dark:border-purple-800 rounded-xl hover:bg-purple-100 disabled:opacity-40 shadow-sm'
        >
          {isGenerating ? <Loader2 className="size-3.5 animate-spin"/> : <Sparkles className="size-3.5"/>}
          <span>{isGenerating ? "Optimizing..." : "AI Enhancement"}</span>
        </button>
      </div>

      <div className="pt-2 space-y-4">
        <textarea 
          value={data || ""} 
          onChange={(e) => onChange(e.target.value)} 
          rows={5} 
          className='w-full p-3 border text-xs font-medium bg-white dark:bg-slate-900 text-slate-800 dark:text-white border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-indigo-50 resize-none shadow-sm' 
          placeholder='Write a compelling professional summary...' 
        />

        {/* COMPARISON INTERFACE POPUP CONTROL NODE */}
        {showConfirmation && (
          <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/20 space-y-3 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black text-purple-600 dark:text-purple-400 uppercase tracking-widest">AI Proposed Suggestion</span>
              <div className="flex items-center gap-1.5">
                <button type="button" onClick={applyAiChanges} className="p-1 bg-green-600 hover:bg-green-500 text-white rounded-lg flex items-center gap-1 text-[10px] font-bold px-2.5 py-1">
                  <Check className="size-3" strokeWidth={3}/> Improve
                </button>
                <button type="button" onClick={() => setShowConfirmation(false)} className="p-1 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-300 rounded-lg p-1">
                  <X className="size-3.5"/>
                </button>
              </div>
            </div>
            <p className="text-xs font-medium text-slate-600 dark:text-slate-300 leading-relaxed bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 shadow-inner text-justify">
              {aiPreviewContent}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfessionalSummaryForm;