import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sending...");
    
    const form = event.target;
    const formData = new FormData(form);
    formData.append("access_key", "6c815af1-346c-4fd6-981b-95d4b91ee003");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Form Submitted Successfully");
        form.reset();
      } else {
        console.error("Error", data);
        setStatus(data.message);
      }
    } catch (error) {
      console.error("Submission error", error);
      setStatus("An error occurred while submitting the form.");
    }
  };

  return (
    <section id="contact" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b] px-4 md:px-[10vh]">
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>
      
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-16 sm:w-24 h-[2px] bg-[#2F2F2F]"></span>
          <span className="bg-[#2F2F2F] w-fit text-amber-500 p-2 px-3 sm:px-5 text-lg sm:text-xl rounded-md">
            Contact
          </span>
          <span className="w-16 sm:w-24 h-[2px] bg-[#2F2F2F]"></span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center text-left">
        <div className="relative bg-[#2F2F2F] border border-[#1f223c] p-8 rounded-lg shadow-lg shadow-violet-500">
          <h1 className="font-bold text-2xl text-[#ffbf00] mb-2">Need Support?</h1>
          <p className="text-[#4beba0] font-light mb-4">Feel free to connect with me!</p>
          <form id="contactForm" onSubmit={handleSubmit} className="w-full">
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-700 text-sm p-4 outline-none bg-[#25213b] text-white rounded-lg mb-4 focus:border-violet-500"
              placeholder="Enter your name"
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-700 text-sm p-4 outline-none bg-[#25213b] text-white rounded-lg mb-4 focus:border-violet-500"
              placeholder="Enter your email"
              required
            />
            <textarea
              id="message"
              name="message"
              className="w-full border border-gray-700 text-sm p-4 outline-none bg-[#25213b] text-white rounded-lg mb-4 focus:border-violet-500"
              cols="30"
              rows="5"
              placeholder="Enter your message"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-violet-500 text-white font-bold py-3 rounded-lg hover:bg-violet-600 transition-all duration-300"
            >
              Submit Now
            </button>
          </form>
          {status && <p className="mt-4 text-white">{status}</p>}
        </div>
        
        <div className="relative w-full h-[500px]">
          <div className="absolute bg-violet-500 top-0 right-0 w-[200px] h-[90%] rounded-[20px]"></div>
          <div className="relative w-full h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3638.6701055853223!2d83.03206437603998!3d24.218330870650085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398edaff6267a929%3A0x20892c7bef6dc475!2sRenukoot%20Colony%2C%20Hindalco%20Colony%2C%20Renukoot%2C%20Uttar%20Pradesh%20231217!5e0!3m2!1sen!2sin!4v1722759496186!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-none"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;