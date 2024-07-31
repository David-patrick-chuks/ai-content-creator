import { UserProfile } from '@clerk/nextjs'
import React from 'react'

function Settings() {
  return (
    <div className='flex items-center justify-center mt-10 h-full'>
        <UserProfile/>
    </div>
  )
}

export default Settings