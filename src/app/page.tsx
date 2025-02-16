'use client'
import NavBar from "./navbar";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";


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
        <div className="flex w-2/3 h-auto m-3 flex-col items-center">
          <div className="text-6xl font-semibold pb-6 font-libre leading-[1.3]">
            Efficient approaches to college admissions and academic success.
          </div>
          <div className="text-2xl font-poppins">
            As a private tutor and college recruitment consultant for over 5 years, Noah offers a diverse array of academic services that help students identify their strengths and weaknesses, maximizing their admissions prospects and creating a long-term plan for academic enrichment and success.
          </div>
          <div className="mt-12">
            <Link href="/Consulting" className="text-xl m-8 font-poppins bg-white px-3 py-1.5 rounded-xl">Consulting</Link>
            <Link href="https://calendly.com/noahktutoring/30min" className="text-xl m-8 font-poppins bg-white px-3 py-1.5 rounded-xl">Schedule</Link>
          </div>
        </div>
      </div>
    </div>
    
  );
}
