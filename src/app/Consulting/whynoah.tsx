import Link from "next/link";
export default function WhyNoah(){
    return(
        <div className="flex w-[90%] lg:w-[70%] xl:w-[65%] 2xl:w-[80%] h-auto flex-col mt-6 md:mt-8 xl:mt-10">
            <div className="flex text-3xl lg:text-4xl xl:text-5xl font-semibold pb-6 leading-[1.3] lg:leading-[1.5] xl:leading-[1.5]">
              Why Work With Noah?
            </div>
            <div className="text-lg xl:text-xl font-poppins xl:leading-[1.5]">
              <span className="font-semibold">To emphasize my commitment to my students, I will not mentor any more than 3 students in a given year.</span>
              <br></br><br></br>
              Unlike large, impersonal consulting firms, Noah offers a personalized, high-impact approach rooted in firsthand experience and connections with students, alumni, and industry professionals. His tailored strategies help applicants craft compelling stories that resonate with admissions officers, going beyond generic advice to maximize their chances of acceptance.<br></br><br></br>
              Let’s build a future they’re excited about.
            </div>
            <div className="flex w-full items-center justify-center">
              <Link href="/consultation" className="text-xl font-semibold mx-2 my-12 text-center bg-white px-3 py-2.5 rounded-3xl inline-block md:w-[500] xl:text-xl">Request A Free Consultation</Link>
            </div>
          </div>
    );
}