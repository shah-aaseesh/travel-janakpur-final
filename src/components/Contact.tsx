
import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-mithila-cream relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="h-full w-full bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M0%200h4v4H0V0zm4%200h4v4H4V0zm4%200h4v4H8V0zm4%200h4v4h-4V0zm0%204h4v4h-4V4zm0%204h4v4h-4V8zM8%204h4v4H8V4zm0%204h4v4H8V8zM4%208h4v4H4V8zm0-4h4v4H4V4zm0%208h4v4H4v-4zm4%204h4v4H8v-4zm4%200h4v4h-4v-4zm-8%200h4v4H4v-4zM0%204h4v4H0V4zm0%204h4v4H0V8zm0%204h4v4H0v-4z%22%20fill%3D%22%231D7874%22%20fill-opacity%3D%22.4%22%20fill-rule%3D%22evenodd%22/%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="section-title pb-4">Contact Us</h2>
        <p className="text-center text-gray-700 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-2">
          Contact our professional travel consultants to plan your perfect journey to Janakpur. We're here to create unforgettable experiences tailored to your preferences.
        </p>

        <div className="mx-auto max-w-4xl">
          {/* Contact Information and Map */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in">
            <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-mithila-indigo mb-4 sm:mb-6 font-hind">Travel Janakpur Head Office</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 text-mithila-red mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+9779766115966" className="text-gray-700 text-sm sm:text-base break-words hover:text-mithila-red">+977 9766115966</a>
                </div>
                <div className="flex items-start">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 text-mithila-red mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <a href="mailto:info@traveljanakpur.com" className="text-gray-700 text-sm sm:text-base break-words block hover:text-mithila-red">info@traveljanakpur.com</a>
                    <a href="mailto:traveljanakpur0@gmail.com" className="text-gray-700 text-sm sm:text-base break-words block hover:text-mithila-red">traveljanakpur0@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 text-mithila-red mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-700 text-sm sm:text-base break-words">Dhanusha District, Janakpur-10, Nepal</span>
                </div>
                <div className="flex items-start">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 text-mithila-red mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 text-sm sm:text-base break-words">Open Daily: 6:00 AM - 8:00 PM</span>
                </div>
              </div>
            </div>
            
            {/* Google Map */}
            <div className="h-64 sm:h-80 bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114161.6722156394!2d85.8803539!3d26.7271161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec4013016e057f%3A0x556c747f34e0e{this.2c4c}!2sJanakpur!5e0!3m2!1sen!2snp!4v1621500571619!5m2!1sen!2snp"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                title="Google Map of Janakpur"
                aria-hidden="false"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
