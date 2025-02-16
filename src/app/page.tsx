'use client'
import NavBar from "./navbar";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar/>
      <div className="flex justify-center w-full flex-1">
        <div className="flex justify-center items-center w-4/5 md:w-7/9 lg:w-screen flex-col lg:flex-row">

          <div className="flex w-2/3 md:w-4/9 xl:w-1/3 h-auto lg:ml-8 pb-8">
            <Image
              src="/Healy.jpg"
              alt=""
              width={1000}
              height={1000}
              className="rounded-3xl flex object-contain"
            />
          </div>

          <div className="flex w-full xl:w-2/3 h-auto lg:ml-10 lg:mr-8 flex-col items-center">
            <div className="flex text-3xl lg:text-4xl xl:text-5xl font-semibold pb-6 font-libre leading-[1.3] lg:leading-[1.7]">
              Efficient approaches to college admissions and academic success.
            </div>
            <div className="text-lg font-poppins">
              As a private tutor and college recruitment consultant for over 5 years, Noah offers a diverse array of academic services that help students identify their strengths and weaknesses, maximizing their admissions prospects and creating a long-term plan for academic enrichment and success.
            </div>
            <div className="mt-4 md:mt-8">
              <Link href="/Consulting" className="md:text-xl m-8 font-poppins bg-white px-3 py-1.5 rounded-xl">Consulting</Link>
              <Link href="https://calendly.com/noahktutoring/30min" className="md:text-xl m-8 font-poppins bg-white px-3 py-1.5 rounded-xl">Schedule</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
