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
    <div id="certificates" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b] px-4 sm:px-6 md:px-[10vh]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-full sm:w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-16 sm:w-24 h-[2px] bg-[#2F2F2F]"></span>
          <span className="bg-[#2F2F2F] w-fit text-white p-2 px-3 sm:px-5 text-lg sm:text-xl rounded-md">
            Certificates
          </span>
          <span className="w-16 sm:w-24 h-[2px] bg-[#2F2F2F]"></span>
        </div>
      </div>

      <div className="w-full my-8 sm:my-12">
        <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
          <div className="w-full overflow-hidden" ref={sliderRef}>
            <div 
              className="flex transition-transform duration-500 ease-in-out will-change-transform"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {certificatesData.map((cert) => (
                <div 
                  key={cert.id}
                  className="flex-shrink-0 w-full flex flex-col md:flex-row items-center justify-center relative min-w-full p-4"
                >
                  <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
                    <img 
                      src={`/certificates/${cert.image}`} 
                      alt={cert.alt}
                      className="h-auto w-full max-w-[320px] rounded-lg border border-[#1f223c] shadow-lg shadow-violet-500/20 object-cover"
                      onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = '/certificates/default-certificate.jpg';
                      }}
                    />
                  </div>

                  <div className="relative w-full md:w-1/2 ml-0 md:ml-6">
  {/* Gradient Background */}
  <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-violet-600 rounded-lg blur opacity-75"></div>

  {/* Main Box */}
  <div className="relative w-full bg-[#2F2F2F]/80 backdrop-blur-[4.5px] rounded-lg border border-[#1f223c] p-6 text-white">
    <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-violet-400">
      {cert.title}
    </h2>
    <p className="text-sm sm:text-base font-normal leading-relaxed text-[#ffbf00]">
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