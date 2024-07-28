import Template from "@/app/(data)/Template";
import React, { useEffect, useState } from "react";
import TemplateCard from "./TemplateCard";

export interface ITemplate {
  name: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  aiPromt: string;
  form?: IForm[];
}

export interface IForm {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

function TemplateListSection({ userSearchInput }: any) {
  const [templateList, setTemplateList] = useState(Template);
  useEffect(() => {
    console.log(userSearchInput);
    if(userSearchInput){
      const filterData = Template.filter(item => item.name.toLowerCase().includes(userSearchInput.toLowerCase()))
      setTemplateList(filterData)
    }
    else{
      setTemplateList(Template)
    }
  }, [userSearchInput]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 px-8">
      {templateList.map((item: ITemplate, index: number) => (
        <TemplateCard {...item} />
      ))}
    </div>
  );
}

export default TemplateListSection;
