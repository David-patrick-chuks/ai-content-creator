"use client"
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext'
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
export interface HISTORY {
    id:Number,
    formData:string,
    aiResponse:string,
    templateSlug:string,
    createdBy:string,
    createdAt: string
}

 function UsageTrack() {
    const {user} = useUser()
    const {totalUsage, setTotalUsage} = useContext(TotalUsageContext)
    const {updateCreditUsage, setUpdateCreditUsage} = useContext(UpdateCreditUsageContext)
    const router = useRouter()

    useEffect(()=>{
           user&&GetData()
    },[user])

    useEffect(()=>{
           user&&GetData()
    },[updateCreditUsage&&user])


    const  GetData=async()=>{
        const result = await db.select().from(AIOutput).where(eq(AIOutput.createdBy,user?.primaryEmailAddress?.emailAddress))
        GetTotalUsage(result)

    }
    const GetTotalUsage=(result:HISTORY[])=>{
        let total:number = 0
        result.forEach(element =>{
             total =total + Number(element.aiResponse?.length)
             setTotalUsage(total)
             console.log(total);
        })
    }
  return (
    <div className='m-5'>
        <div className='bg-[#8046FD] text-white p-3 rounded-lg'>
            <h2 className='font-medium'>Credits</h2>
            <div className='h-2 bg-[#9981f9] w-full rounded-full mt-3'>
                <div className='h-2 bg-white rounded-full' style={{
                    width:(totalUsage/1000000)*100+"%"
                }}>

                </div>
            </div>
            <h2 className='text-[12px] mt-2'>{totalUsage}/1000000 Credits Usages</h2>
            
        </div>
        <Button variant={'outline'} className='w-full my-3 text-[#8046FD]' onClick={()=>router.push("/dashboard/billing")}> Upgrade</Button>
    </div>
  )
}

export default UsageTrack