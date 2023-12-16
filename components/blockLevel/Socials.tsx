import React from 'react'

function Socials() {
  return (
    <ul className="flex gap-2 justify-between text-subdued text-xs items-center uppercase">
    <li>
        <a href="#" className="hover:text-primary">
            youtube
        </a>
    </li>
    <li>
        <a href="#" className="hover:text-primary">
            instagram
        </a>
    </li>
    <li>
        <a href="#" className="hover:text-primary">
            github
        </a>
    </li>
    <li>
        <a href="#" className="hover:text-primary">
            behance
        </a>
    </li>
</ul>
  )
}

export default Socials