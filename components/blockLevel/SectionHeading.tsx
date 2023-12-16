import OffsideFont from '@/wrappers/OffsideFont'
import React from 'react'

interface PropsSectionHeading {
    title: string
}

function SectionHeading({title}: PropsSectionHeading) {
  return (
    <OffsideFont extra='px-6 py-2 bg-black w-full absolute top-0'>
      <h2 className='text-lg uppercase text-left w-full'>{title}</h2>
    </OffsideFont>
  )
}

export default SectionHeading