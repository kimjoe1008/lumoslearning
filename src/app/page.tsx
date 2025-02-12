'use client'
import NavBar from "./navbar";
import { Button } from "@heroui/react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center">
      <NavBar/>
      
      <div className="flex justify-center items-center min-h-screen w-2/3">
        <div className="flex w-1/3 h-auto m-3">
          <Image
            src="/Healy.jpg"
            alt=""
            width={1000}
            height={1000}
            className="rounded-3xl flex object-contain"
          />
        </div>
        <div className="flex bg-blue-600 w-2/3 h-auto m-3 flex-col items-center">
          <div className="text-5xl font-bold pb-4">Efficient approaches to college admissions and academic success.</div>
          <div className="text-xl">As a private tutor and college recruitment consultant for over 5 years, Noah offers a diverse array of academic services that help students identify their strengths and weaknesses, maximizing their admissions prospects and creating a long term plan for academic enrichment and success. </div>
          <div>
            <Button disableRipple href="#" className="text-xl m-8">Consulting</Button>
            <Button disableRipple href="#" className="text-xl m-8">Schedule</Button>
          </div>
        </div>
      </div>

      {/*<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 overflow-hidden">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <div>TESTING</div>
        </div>
      </main>
    </div>
    */}
    </div>
    
  );
}
