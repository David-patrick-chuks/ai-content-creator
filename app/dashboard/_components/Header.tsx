import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-5 border-b-2 shadow-sm flex justify-between items-center'>
        
        <div className='flex gap-2 items-center p-2 border rounded-md max-w-md'>
            <Search/>
            <input type="text" placeholder='Search...' className='outline-none' />
        </div>
        <div>
            <h2 className='bg-[#8046FD] text-white p-2 rounded-lg'>
                Premium Membership
            </h2>
        </div>
    </div>
  )
}

export default Header