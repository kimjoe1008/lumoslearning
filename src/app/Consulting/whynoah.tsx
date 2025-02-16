import Link from "next/link";
export default function WhyNoah(){
    return(
        <div className="flex w-[90%] lg:w-[70%] xl:w-[65%] h-auto flex-col">
            <div className="flex text-3xl lg:text-4xl xl:text-5xl font-semibold pb-6 leading-[1.3] lg:leading-[1.5] xl:leading-[1.5]">
              Why Work With Noah?
            </div>
            <div className="text-lg xl:text-xl font-poppins xl:leading-[1.5]">
              <span className="font-semibold">To emphasize my commitment to my students, I will not mentor any more than 3 students in a given year.</span>
              <br></br><br></br>
              Unlike large, impersonal college consulting firms, Noah offers a personalized, high-impact approach backed by my firsthand, recent experience navigating today’s competitive admissions landscape. I provide authentic, relatable guidance that today’s students connect with, ensuring their applications reflect who they are and compliment what admissions officers are searching for. My approach goes beyond cookie-cutter advice, offering highly tailored strategies that align with each student’s unique strengths, ambitions, and story. Additionally, as a student who has tackled the challenge of undergraduate college admissions myself, I intend to leverage my own experiences and those of people I know - my connections with current students, alumni, and industry professionals provide insights that most consultants simply can’t or won’t match without getting you to pay hefty premiums. With a commitment to real, results-driven mentorship, I help students craft applications that don’t just check boxes—they tell a story that gets them admitted.<br></br><br></br>
              Let’s build a future they’re excited about.
            </div>
            <div className="flex w-full items-center justify-center">
              <Link href="/consultation" className="text-xl font-semibold mx-2 my-12 text-center bg-white px-3 py-2.5 rounded-3xl inline-block md:w-[500] xl:text-xl">Request A Free Consultation</Link>
            </div>
          </div>
    );
}