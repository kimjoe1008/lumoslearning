import Image from "next/image";

export default function Services(){
    return(
        <div className="flex flex-col h-auto w-[90%]">
            <div className="text-3xl font-semibold mb-6">Services</div>
            <div className="text-lg">I provide college admissions coaching and essay coaching to high school students of all ages including:</div>
            <div className="flex justify-center items-center w-full my-6">
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
                <div className=""></div>
                <ul className="text-lg">
                    <li></li>
                </ul>
            </div>
        </div>
    );
}