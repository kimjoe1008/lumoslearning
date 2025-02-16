'use client'
import NavBar from "./navbar";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar/>
      <div className="flex justify-center w-full flex-1">
        <div className="flex justify-center items-center w-4/5 md:w-7/9 lg:w-[90%] xl:w-[85%] flex-col lg:flex-row">

          <div className="flex w-full md:w-4/9 xl:w-[40%] h-auto pb-12 pt-4">
            <Image
              src="/Healy.jpg"
              alt=""
              width={1000}
              height={1000}
              className="rounded-3xl flex object-contain"
            />
          </div>
          <div className="flex w-full xl:w-[60%] h-auto lg:ml-10 flex-col items-center">
            <div className="flex text-3xl lg:text-4xl xl:text-5xl font-semibold pb-6 font-libre leading-[1.3] lg:leading-[1.5] xl:leading-[1.5]">
              Efficient approaches to college admissions and academic success.
            </div>
            <div className="text-lg font-poppins xl:leading-[1.5]">
              As a private tutor and college recruitment consultant for over 5 years, Noah offers a diverse array of academic services that help students identify their strengths and weaknesses, maximizing their admissions prospects and creating a long-term plan for academic enrichment and success.
            </div>
            <div className="mt-4 mb-4 w-full items-center justify-center">
              <div className="justify-center items-center flex font-semibold">
                <Link
                    href="/Consulting"
                    className="text-xl mx-2 text-center bg-white px-3 py-2 rounded-3xl inline-block w-[175]"
                  >
                    Consulting
                  </Link>
                  <Link
                    href="https://calendly.com/noahktutoring/30min"
                    className="text-xl mx-2 text-center bg-white px-3 py-2 rounded-3xl inline-block w-[175]"
                  >
                    Schedule
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
