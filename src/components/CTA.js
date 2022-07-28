import React from 'react'

const CTA = () => {
  return (
    <div className='bg-brightRed'>
      <div className='container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0'>
        <h2 className='text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left'> Simplify how your works today</h2>
        <button className="px-6 rounded-full text-brightRed shadow-2xl pt-2 bg-white p-3 baseline hover:bg-gray-300">
            Get Started
          </button>
      </div>
    </div>
  )
}

export default CTA