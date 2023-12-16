import React, { ReactNode } from 'react'

interface PropsProvider {
    children: ReactNode
}

function Providers({children}: PropsProvider) {
  return (
    <div>
        {children}
    </div>
  )
}

export default Providers