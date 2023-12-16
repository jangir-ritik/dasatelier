import React from 'react'
import CTA from './blockLevel/CTA'

function Header() {
  return (
    <div className='flex justify-between w-full items-center px-6 py-2'>
        <div>some randoms</div>
        <CTA title={'contact'} />
    </div>
  )
}

export default Header