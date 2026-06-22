// import React from 'react';

const Loader = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-slate-50/20 dark:bg-slate-950/20 backdrop-blur-sm'>
      <div className='size-10 border-[3px] border-slate-200 border-t-indigo-600 rounded-full animate-spin shadow-sm'></div>
    </div>
  )
}

export default Loader;