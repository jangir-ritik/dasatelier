import React from 'react'
import OffsideFont from '@/wrappers/OffsideFont';

interface CTAProps {
    title: string;
}

function CTA({title}: CTAProps) {
  return (
    <OffsideFont>
        <button className='uppercase text-primary hover:bg-primary-hover border border-primary px-[10px] py-[5px]'>{title}</button>
    </OffsideFont>
  )
}

export default CTA