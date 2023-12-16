import React from 'react'
import ProjectLi from './ProjectLi'

function ProjectsList() {
  return (
    <div className='flex flex-col border-y-2 border-muted divide-y-2 divide-muted'>
      <ProjectLi title='Desklib' niche='Edtech' />
      <ProjectLi title='The design trip' niche='design agency' />
      <ProjectLi title='Protean' niche='SAAS' />
      <ProjectLi title='lush' niche='commerce' />
      <ProjectLi title='Mickey tots' niche='edtech' />
    </div>
  )
}

export default ProjectsList