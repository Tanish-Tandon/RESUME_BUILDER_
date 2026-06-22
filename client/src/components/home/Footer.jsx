// import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-200/60 pt-16 px-6 md:px-16 lg:px-24 xl:px-40 bg-gradient-to-t from-green-50/20 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10 text-sm">
            
            {/* Brand Matrix Info Layer */}
            <div className="col-span-2 flex flex-col gap-3">
                <div className="flex items-center gap-1 font-black text-xl text-slate-900 tracking-tight">
                    <span>resume</span>
                    <span className="size-2 rounded-full bg-green-500 inline-block mt-1"></span>
                </div>
                <p className="text-xs text-slate-400 max-w-xs leading-relaxed mt-1">
                    Making every candidate feel valued—engineered for optimized applicant metrics.
                </p>
            </div>

            {/* Product Pillar Column */}
            <div className="flex flex-col gap-2.5">
                <p className="text-slate-900 font-bold text-xs uppercase tracking-wider">Product</p>
                <ul className="space-y-2 text-slate-500 text-xs">
                    <li><a href="/" className="hover:text-indigo-600 transition">Home</a></li>
                    <li><a href="/" className="hover:text-indigo-600 transition">Support</a></li>
                    <li><a href="/" className="hover:text-indigo-600 transition">Pricing</a></li>
                    <li><a href="/" className="hover:text-indigo-600 transition">Affiliate</a></li>
                </ul>
            </div>

            {/* Resources Pillar Column */}
            <div className="flex flex-col gap-2.5">
                <p className="text-slate-900 font-bold text-xs uppercase tracking-wider">Resources</p>
                <ul className="space-y-2 text-slate-500 text-xs">
                    <li><a href="/" className="hover:text-indigo-600 transition">Company</a></li>
                    <li><a href="/" className="hover:text-indigo-600 transition">Blogs</a></li>
                    <li><a href="/" className="hover:text-indigo-600 transition">Community</a></li>
                    <li className="flex items-center gap-1.5">
                        <a href="/" className="hover:text-indigo-600 transition">Careers</a>
                        <span className="text-[9px] font-bold text-white bg-green-600 rounded px-1.5 py-0.5 uppercase">Hiring</span>
                    </li>
                    <li><a href="/" className="hover:text-indigo-600 transition">About</a></li>
                </ul>
            </div>

            {/* Legal Column */}
            <div className="flex flex-col gap-2.5">
                <p className="text-slate-900 font-bold text-xs uppercase tracking-wider">Legal</p>
                <ul className="space-y-2 text-slate-500 text-xs">
                    <li><a href="/" className="hover:text-indigo-600 transition">Privacy</a></li>
                    <li><a href="/" className="hover:text-indigo-600 transition">Terms</a></li>
                </ul>
            </div>
        </div>

        {/* Social Icons row & Bottom block */}
        <div className="max-w-7xl mx-auto mt-16 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 pb-8 font-medium">
            <p>© 2026 Resume Builder. All rights reserved.</p>
            
            <div className="flex items-center gap-4 text-slate-400">
                <a href="https://dribbble.com/" target="_blank" rel="noreferrer" className="hover:text-slate-600 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path></svg>
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-slate-600 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="https://x.com/" target="_blank" rel="noreferrer" className="hover:text-slate-600 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer