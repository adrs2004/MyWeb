import { useState, useEffect } from "react";
import { personalData } from "../data/personal-data";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

const designations = [
  "Full Stack Developer",
  "Software Engineer",
  "Graphic Designer",
];

export default function HeroSection() {
  const [currentDesignation, setCurrentDesignation] = useState("");
  const [index, setIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const designation = designations[index];

    if (letterIndex < designation.length) {
      const timeout = setTimeout(() => {
        setCurrentDesignation(designation.slice(0, letterIndex + 1));
        setLetterIndex(letterIndex + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % designations.length);
        setLetterIndex(0);
        setCurrentDesignation("");
      }, 2000);
    }
  }, [letterIndex, index]);

  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12 px-4 sm:px-6 md:px-[5vh] lg:px-[10vh]">
      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8 w-full">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-10 md:pb-10 lg:pt-10">
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight sm:leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            I'm <span className="text-[#FC1500]">{personalData.name}</span>
            <br />
            {`and I'm a `}
            <span className="text-[#3F926B] transition-opacity duration-500 ease-in-out">
              {currentDesignation}
            </span>
            .
          </h1>

          <div className="my-8 sm:my-12 flex items-center gap-5">
            <a
              href={personalData.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all text-[#0a66c2] hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </a>

            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all text-[#171515] hover:scale-125 duration-300"
            >
              <BsGithub size={30} className="bg-white rounded" />
            </a>

            <a
              href={personalData.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all text-[#FFA116] hover:scale-125 duration-300"
            >
              <SiLeetcode size={30} />
            </a>
          </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
          <a
          href="#contact"
          className="w-full sm:w-auto group relative"
          >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-violet-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-all duration-200"></div>
          <button className="relative w-full flex items-center justify-center gap-2 px-6 py-3 text-xs md:text-sm font-medium uppercase tracking-wider text-white bg-gray-900 rounded-full border-none transition-all duration-200 ease-out hover:bg-gray-800 group-hover:gap-3">
          <span>Contact me</span>
          <RiContactsFill size={16} className="transition-transform duration-200 group-hover:scale-110" />
          </button>
          </a>
          <a
          className="w-full sm:w-auto group relative"
          role="button"
          target="_blank"
          rel="noopener noreferrer"
          href={personalData.resume}
          >
          <div className="absolute -inset-0.5 bg-[#046a38] rounded-full blur opacity-75 group-hover:opacity-100 transition-all duration-200"></div>
          <button className="relative w-full flex items-center justify-center gap-2 px-6 py-3 text-xs md:text-sm font-medium uppercase tracking-wider text-white bg-gray-900 rounded-full border-none transition-all duration-200 ease-out hover:bg-gray-800 group-hover:gap-3">
          <span>Get Resume</span>
          <MdDownload size={16} className="transition-transform duration-200 group-hover:scale-110" />
          </button>
        </a>
      </div>
        </div>

        <div className="order-1 lg:order-2 bg-[#2F2F2F] border-[#1b2c68a0] relative rounded-lg w-full">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-[#23950A]"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
          <div className="lg:overflow-visible overflow-x-auto">
          <code className="font-mono text-xs md:text-sm lg:text-base lg:whitespace-normal whitespace-nowrap">
              <div>
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">coder</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{"{"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">{personalData.name}</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className="text-white">skills:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">React</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Node.js</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Express</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">MongoDB</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Tailwind CSS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">MySQL</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">AWS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">JavaScript</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Python</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Java</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">C++</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">C</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
                <span className="text-orange-400">function</span>
                <span className="text-gray-400">{"() {"}</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
                <span className="text-gray-400">{`(`}</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">hardWorker</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">problemSolver</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">skills.length</span>
                <span className="mr-2 text-amber-300">&gt;=</span>
                <span className="text-orange-400">5</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span>
              </div>
              <div>
                <span className="text-gray-400">{`};`}</span>
              </div>
            </code>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}