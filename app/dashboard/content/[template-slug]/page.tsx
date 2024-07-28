
'use client'
import React from 'react'
import FormSection from '../_components/FormSection';
import OutputSection from '../_components/OutputSection';
import { ITemplate } from '../../_components/TemplateListSection';
import Template from '@/app/(data)/Template';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface PROPS {
    params:{
        'template-slug': string
    }
}

function CreateNewContent(props:PROPS){

    const selectedTemplate: ITemplate| undefined= Template?.find((item)=>item.slug == props.params['template-slug'])
    const GenerateAIContent = (formData:any) =>{

    }

  return (
    <div className='p-10'>
        <Link href={'/dashboard'}>
        <Button><ArrowLeft/>Back</Button>
        </Link>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
        {/* Form Section */}
        <FormSection 
        userFormInput={(v:any)=>console.log(v)}
        selectedTemplate={selectedTemplate}/>

        {/* OutputSection */}
        <div className='col-span-2'>
        <OutputSection/>
        </div>
    </div>
    </div>
  )
}

export default CreateNewContent