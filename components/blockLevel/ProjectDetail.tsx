import Image from 'next/image'
import React from 'react'

function ProjectDetail() {
  return (
    <div className='flex flex-col justify-normal gap-4 items-start'>
        <Image alt='' src={'/public/placeholder.png'} width={100} height={100} className='w-full h-full rounded-md'/>
        <div className='flex justify-between items-center w-full gap-4'>
        <Image alt='' src={'/public/placeholder.png'} width={100} height={100} className='grow h-full rounded-md'/>
        <Image alt='' src={'/public/placeholder.png'} width={100} height={100} className='grow h-full rounded-md'/>
        </div>
    </div>
  )
}

export default ProjectDetail