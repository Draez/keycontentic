import * as React from "react";

interface BenefitsProps {}

const Benefits: React.FC<BenefitsProps> = () => {
  return (
    <div className="benefits-section mx-auto bg-custom-yellow">
      <div className="py-24 container mx-auto">
        <h2 className="text-3xl xl:text-5xl font-bold text-white text-center mt-16">
          Benefits of KeyContentic
        </h2>
        <div className="flex flex-wrap justify-around py-12">
          <div className="lg:w-1/3 sm:w-max p-4 relative">
            <div className="bg-custom-second p-8 rounded-xl">
              <span className="text-5xl  font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-500">
                1.
              </span>
              <h3 className="text-2xl xl:text-3xl font-bold mt-4 text-gray-900">
                Experienced Writers
              </h3>
              <p className="mt-2 text-gray-800">
                Our team of experienced writers and SEO experts can create
                compelling, keyword-rich content that is designed to rank highly
                in search engine results.
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-max p-4">
            <div className="bg-custom-second p-8 rounded-xl">
              <span className="text-5xl  font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-500">
                2.
              </span>
              <h3 className="text-2xl xl:text-3x font-bold mt-4 text-gray-900">
                Experienced Writers
              </h3>
              <p className="mt-2 text-gray-800">
                Our team of experienced writers and SEO experts can create
                compelling, keyword-rich content that is designed to rank highly
                in search engine results.
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-max p-4">
            <div className="bg-custom-second p-8 rounded-xl">
              <span className="text-5xl  font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-500">
                3.
              </span>
              <h3 className="text-2xl xl:text-3x font-bold mt-4 text-gray-900">
                Experienced Writers
              </h3>
              <p className="mt-2 text-gray-800">
                Our team of experienced writers and SEO experts can create
                compelling, keyword-rich content that is designed to rank highly
                in search engine results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
