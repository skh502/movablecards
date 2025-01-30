import React, {useId, useRef} from 'react'
import Card from './Card'

function Foreground() {

  const ref = useRef(null);

  const data = [
    {
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      filesize: '.8rem',
      close: true,
      tag: {isOpen: true, tagTitle:"Download Now"}
    },
    {
      desc: "Hello there, how you doi'n",
      filesize: '.9rem',
      close: false,
      tag: {isOpen: true, tagTitle:"Download Now"}
    },
    {
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      filesize: '.8rem',
      close: true,
      tag: {isOpen: false, tagTitle:"Download Now"} 
    },
  ]



  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex flex-wrap gap-5 p-5' >
      {
        data.map( (item, index)=>(
          <Card data={item} key={index} reference={ref} /> 
        ) )
      }
    </div>
  )
}

export default Foreground