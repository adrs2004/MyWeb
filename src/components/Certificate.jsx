import { useState, useEffect, useRef } from 'react';
import { certificatesData } from "../data/certificates";

export default function Certificates() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % certificatesData.length);
    }, 3000);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    clearInterval(intervalRef.current);
    startAutoSlide();
  };

  return (
    <div id="certificates" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b] px-4 sm:px-6 md:px-16 lg:px-24 xl:px-36 2xl:px-52">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-full">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-16 sm:w-24 h-[2px] bg-[#2F2F2F]"></span>
          <span className="bg-[#2F2F2F] w-fit text-amber-500 p-2 px-3 sm:px-5 text-lg sm:text-xl rounded-md">
            Certificates
          </span>
          <span className="w-16 sm:w-24 h-[2px] bg-[#2F2F2F]"></span>
        </div>
      </div>
      <div className="w-full my-8 sm:my-12">
        <div className="flex flex-col items-center w-full mx-auto">
          <div className="w-full overflow-hidden" ref={sliderRef}>
            <div 
              className="flex transition-transform duration-500 ease-in-out will-change-transform"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {certificatesData.map((cert) => (
                <div 
                  key={cert.id}
                  className="flex-shrink-0 w-full flex flex-col lg:flex-row items-center justify-center min-w-full px-4 py-6 gap-6"
                >
                  <div className="w-full lg:w-1/2 flex justify-center">
                    <img 
                      src={`/certificates/${cert.image}`} 
                      alt={cert.alt}
                      className="w-full max-w-[450px] rounded-xl border border-[#1f223c] shadow-xl shadow-violet-500/30 object-contain"
                      onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = '/certificates/default-certificate.jpg';
                      }}
                    />
                  </div>
                  <div className="relative w-full lg:w-1/2 mt-6 lg:mt-0">
                    <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-violet-600 rounded-lg blur opacity-75"></div>
                    <div className="relative w-full bg-[#2F2F2F]/90 backdrop-blur-[6px] rounded-xl border border-[#1f223c] p-6 sm:p-8 text-white">
                      <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-violet-400 text-center lg:text-left">
                        {cert.title}
                      </h2>
                      <p className="text-lg sm:text-xl font-medium leading-relaxed text-[#ffbf00] text-center lg:text-left">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8">
            {certificatesData.map((cert, index) => (
              <span 
                key={cert.id}
                className={`inline-block h-2 rounded-full mx-1 cursor-pointer transition-all duration-500 ease-in-out ${
                  index === currentSlide ? 'w-8 bg-violet-500' : 'w-4 bg-[#2F2F2F]'
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
