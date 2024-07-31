import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'
import { useRouter } from 'next/navigation'


function Header() {
  const router = useRouter()
  return (
    <div className='p-5 border-b-2 shadow-sm flex justify-between items-center bg-white'>
        
        <div className='flex gap-2 items-center p-2 border rounded-md max-w-md'>
            <Search/>
            <input type="text" placeholder='Search...' className='outline-none' />
        </div>
        <div className='flex gap-5 items-center'>
            <h2 className='bg-[#8046FD] text-white p-2 rounded-lg cursor-pointer' onClick={()=>router.push('/dashboard/billing')}>
                Premium Membership
            </h2>
            <UserButton/>
        </div>
    </div>
  )
}

export default Header