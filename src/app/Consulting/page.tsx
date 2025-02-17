import { NavBar } from "../navbar";
import AboutMe from "./about-noah";
import Services from "./services";
import WhyNoah from "./whynoah";

export default function consulting() {
    return(
        <div className="flex flex-col min-h-screen items-center pl-[calc(100vw-100%)]">
            <NavBar/>
            <WhyNoah/>
            <Services/>
            <AboutMe/>
        </div>
    );
}