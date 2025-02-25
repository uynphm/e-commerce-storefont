import React from 'react'

const Loader = () => {
  return (
    <Html>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div className='w-[10vw] h-[10vw] border-4 border-gray-300 rounded-full animate-spin'>
                Loading...
            </div>
        </div>
    </Html>
  )
}

export default Loader