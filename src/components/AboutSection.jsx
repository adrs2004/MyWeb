import { personalData } from "../data/personal-data";

export default function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative px-4 sm:px-6 lg:px-8 xl:px-10">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#2F2F2F] w-fit text-amber-500 rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#2F2F2F]"></span>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-bold mb-5 text-[#3F926B] text-xl uppercase">
            Who am I?
          </p>
          <p className="text-white text-sm lg:text-lg mb-6 break-words whitespace-pre-line max-w-[600px] leading-relaxed font-description">
            {personalData.description}
          </p>
        </div>
        
        <div className="flex justify-center order-1 lg:order-2">
          <div className="relative group">
            {/* Main profile image - kept original size classes */}
            <img
              src="/user.png"
              alt="Profile"
              className="rounded-lg transition-all duration-1000 cursor-pointer z-10 relative"
            />
            
            {/* Glow effect - kept original classes */}
            <div className="absolute -inset-2 bg-[#3F926B] rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}