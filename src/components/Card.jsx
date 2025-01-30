import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineDownload } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";
import {motion} from 'framer-motion';



function Card({data, reference }) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}}
     className="relative flex-shrink-0 w-60 h-72 px-5 py-5 rounded-[40px] bg-gray-300 
     text-black overflow-hidden"
    >  
        <FaRegFileAlt/>
        <p className='text-s mt-5 leading-5 font-semibold'>{data.desc}</p>  
        <div className=' w-full absolute bottom-0 left-0' >
            <div className='flex items-center justify-between py-4 px-3' >
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 rounded-full bg-zinc-400 flex justify-center items-center ' >
                    {
                        data.close? <IoCloseCircleOutline size='.8em' /> : <MdOutlineDownload size='.8em'  />
                    }
                    {/* <IoCloseCircleOutline/> */}
                </span>
            </div> 
            
            
            <div className={`tag w-full h-10 py-4 flex items-center justify-center
                ${data.tag.isOpen? 'bg-green-300':'bg-blue-300'}` } 
            > 
                <h3 className='text-sm'>{data.tag.tagTitle}</h3> 
            </div> 
                
            
        </div> 
    </motion.div> 
  )
}

export default Card