import Image from "next/image";

export default function Services(){
    return(
        <div className="flex flex-col h-auto w-[90%]">
            <div className="text-3xl font-semibold mb-6">Services</div>
            <div className="text-lg">I provide college admissions coaching and essay coaching to high school students of all ages including:</div>
            <div className="flex justify-center items-center w-full mt-16 mb-10">
                <div className="w-[90%] items-center">
                    <Image
                        src="/student-studying.jpg"
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-3xl flex object-contain"
                    />
                </div>
            </div>
            <div className="">
                <div className="text-2xl">Private College Counseling</div>
                <div className="text-lg my-4">For 9th and 10th Graders</div>
                <ul className="list-disc pl-5">
                    <li className="my-2">Academic advising & course selection</li>
                    <li className="my-2">Resumé building</li>
                    <li className="my-2">Diagnostic standardized testing & score assessment</li>
                    <li className="my-2">Extracurricular planning</li>
                    <li className="my-2">Summer activity planning (including support for summer program essays)</li>
                </ul>
            </div>
            <div className="flex justify-center items-center w-full mb-10 mt-12">
                <div className="w-[90%] items-center">
                    <Image
                        src="/college-student.jpg"
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-3xl flex object-contain"
                    />
                </div>
            </div>
            <div className="">
                <div className="text-2xl">Private College Counseling</div>
                <div className="text-lg my-4">For 11/12th Graders and Prospective College Transfers</div>
                <ul className="list-disc pl-5">

                    <li className="my-2">College interview prep</li>
                    <li className="my-2">College list development</li>
                    <li className="my-2">Essay coaching (personal statements & supplemental)</li>
                    <li className="my-2">Standardized testing strategy</li>
                    <li className="my-2">Financial aid & scholarship guidance</li>
                    <li className="my-2">Preliminary review, assessment of choices, & strategic positioning</li>
                    <li className="my-2">Extracurricular planning</li>
                    <li className="my-2">Resumé development</li>
                    <li className="my-2">Course selection</li>
                    <li className="my-2">Letter of recommendation strategy</li>
                    <li className="my-2">College decision guidance & transition support</li>
                </ul>
            </div>
            <div className="flex justify-center items-center w-full mb-10 mt-12">
                <div className="w-[90%] items-center">
                    <Image
                        src="/student-standing.jpg"
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-3xl flex object-contain"
                    />
                </div>
            </div>
            <div className="mb-12">
                <div id="essaycoaching" className="text-2xl">College Essay Coaching</div>
                <ul className="list-disc pl-5">
                    <li className="my-2">Essay prompt organization and strategy</li>
                    <li className="my-2">Topic selection</li>
                    <li className="my-2">Writing schedule creation</li>
                    <li className="my-2">Brainstorming support & assistance</li>
                    <li className="my-2">Content, structural, & syntactical development</li>
                    <li className="my-2">Detailed feedback on each draft, provided within 48 hours</li>
                    <li className="my-2">Grammatical proofreading and editing</li>
                    <li className="my-2">One-on-one virtual meetings</li>
                    <li className="my-2">Email support for essay-related questions and advice</li>
                </ul>
            </div>
        </div>
    );
}