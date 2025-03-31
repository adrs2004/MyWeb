import { educations } from "../data/educations";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "./helper/AnimationLottie";
import GlowCard from "./helper/GlowCard";

export default function Education() {
  return (
    <div id="education" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b] px-4 md:px-[10vh]">
      
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-12 md:w-24 h-[2px] bg-[#2F2F2F]"></span>
          <span className="bg-[#2F2F2F] w-fit text-amber-500 p-2 px-3 sm:px-5 text-sm sm:text-xl rounded-md">
            Education
          </span>
          <span className="w-12 md:w-24 h-[2px] bg-[#2F2F2F]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Responsive Animation Container */}
          <div className="flex justify-center items-start">
            <div className="w-full max-w-[400px] lg:max-w-full aspect-[1/1] lg:aspect-[4/3] mx-auto">
              <AnimationLottie />
            </div>
          </div>
          
          <div>
            <div className="flex flex-col gap-6">
              {educations.map((education) => (
                <GlowCard key={education.id} identifier={`education-${education.id}`}>
                  <div className="p-3 relative">
                    <div className="flex justify-center">
                      <p className="text-sm sm:text-xl font-bold text-[#ffbf00]">
                        {education.duration}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-x-8 px-3 py-5">
                      <div className="flex items-center gap-x-4 w-full sm:w-auto">
                        <div className="text-[#ffbf00] transition-all duration-300 hover:scale-125">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div className="text-center sm:text-left">
                          <p className="text-[#4beba0] text-sm sm:text-xl mb-2 font-medium uppercase">
                            {education.title}
                          </p>
                          <p className="text-xs sm:text-base text-[#ffbf00]">{education.institution}</p>
                        </div>
                      </div>

                      <div className="sm:ml-auto w-full sm:w-1/3 flex justify-center sm:justify-end mt-4 sm:mt-0">
                        <img
                          src={education.image}
                          alt="Education"
                          width={150}
                          height={150}
                          className="rounded-md object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}