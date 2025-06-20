import React from "react";

const Sponsors = () => {
  return (
    <div className="bg-white py-10 px-4 md:px-10 text-center">
      <h2 className="text-md font-medium text-gray-800 mb-6 italic">
        Our Proud Sponsors
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-12">
        {/* Google */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          alt="Google"
          title="Google"
          className="h-8 md:h-10 object-contain"
        />

        {/* Microsoft */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
          alt="Microsoft"
          title="Microsoft"
          className="h-8 md:h-10 object-contain"
        />

        {/* Amazon AWS */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
          alt="Amazon Web Services"
          title="Amazon Web Services"
          className="h-8 md:h-10 object-contain"
        />

        {/* GitHub */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
          alt="GitHub"
          title="GitHub"
          className="h-8 md:h-10 object-contain"
        />

        {/* Fedora */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Fedora_logo.svg"
          alt="Fedora"
          title="Fedora"
          className="h-8 md:h-10 object-contain"
        />

    
      </div>
    </div>
  );
};

export default Sponsors;
