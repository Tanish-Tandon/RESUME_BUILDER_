// import React from 'react'

const Title = ({ title, description }) => {
  return (
    <div className='text-center mt-6 text-slate-900 space-y-3 px-4'>
        <h2 className='text-3xl sm:text-4xl font-extrabold tracking-tight max-w-xl mx-auto leading-tight'>{title}</h2>
        <p className='max-w-2xl mx-auto text-sm sm:text-base text-slate-500 leading-relaxed'>{description}</p>
    </div>
  )
}

export default Title