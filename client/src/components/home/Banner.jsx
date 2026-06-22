// import React from 'react'

const Banner = () => {
  return ( 
    <div className="w-full py-2.5 font-medium text-xs sm:text-sm text-indigo-900 text-center bg-gradient-to-r from-green-100 via-indigo-50 to-purple-100 border-b border-indigo-100/30">
        <p className="flex items-center justify-center gap-2">
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 uppercase tracking-wider shadow-sm animate-pulse">New</span>
          <span>AI ATS Feature Added: Optimize for keywords automatically!</span>
        </p>
    </div>
  )
}

export default Banner