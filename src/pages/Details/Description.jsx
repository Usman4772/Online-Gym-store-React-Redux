import React from 'react'

function Description({description}) {
  return (
    <div className='w-screen min-h-[20vh] py-4 px-4 flex items-start justify-start flex-col gap-4 bg-gray-100 '>
    <h3 className='text-xl font-semibold'>Description:</h3>
    <p className='w-full break-words break-all text-sm'>{description}</p>
    </div>
  )
}

export default Description