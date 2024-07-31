import { currentUser } from "@clerk/nextjs/server";
import React from "react";
import { HISTORY } from "../_components/UsageTrack";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { desc, eq } from "drizzle-orm";
import { ITemplate } from "../_components/TemplateListSection";
import Template from "@/app/(data)/Template";

async function History() {
  const user = await currentUser();
  {
    /* @ts-ignore */
  }
  const HistoryList: HISTORY[] = await db
    .select()
    .from(AIOutput)
    .where(eq(AIOutput?.createdBy, user?.primaryEmailAddress?.emailAddress))
    .orderBy(desc(AIOutput.id));
  const GetTemplateName = (slug: string) => {
    const template: ITemplate | any = Template?.find(
      (item) => item.slug == slug
    );
    return template;
  };
  function truncateText(text: string, wordLimit: number): string {
    const words = text.split(' ');
    if (words.length <= wordLimit) {
        return text;
    }
    return words.slice(0, wordLimit).join(' ') + '...';
}
  return (
    <div>
      <div className="flex flex-col text-center w-full mb-10 mt-10" >
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Your History</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Get Your All History Here</h1>
    </div>
      {HistoryList.length > 0 ? (
        <div >
          {HistoryList.map((item: HISTORY, index: number) => (
            <div key={index} className="grid grid-cols-5 space-x-2 space-y-10 rounded-lg items-center justify-center  m-2 border shadow-lg p-2">
              
                <p className='col-span-1'>
                  <strong>Template Name:</strong>{" "}
                  {GetTemplateName(item?.templateSlug)?.name}
                </p>
                <p className="col-span-3">
                  <strong>AI Response:</strong>{truncateText(item.aiResponse, 100)}
                </p>
                <p className="col-span-1">
                  <strong>Created At:</strong> {item?.createdAt}
                </p>
              
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No history available</p>
      )}
    </div>
  );
}

export default History;
