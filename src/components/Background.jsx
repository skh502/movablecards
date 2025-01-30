import React from 'react'

function Background() {
  return (
    <div className='fixed z-[2] w-full h-full' > 
        <div className="absolute top-[5%] w-full flex justify-center py-1  text-[2vw] text-zinc-500">
            Documents.
        </div> 

        <div className="absolute top-1/2 left-1/2  translate-x-[-50%] translate-y-[-50%] text-[7vw] 
         leading-none  font-semibold text-zinc-400"
         //  tracking-tighter 
        >
            &lt;tag/&gt; 
        </div> 
    </div>
  )
}

export default Background