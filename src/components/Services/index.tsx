import * as React from "react";
import Facebook from "../../images/phone.svg";
import Write from "../../images/Write.svg";

interface ServicesProps {}

const Services: React.FC<ServicesProps> = () => {
  return (
    <div className="services-section mx-auto ">
      <div className="container mx-auto">
        <div className="flex flex-wrap-reverse justify-around items-center">
          <div className="lg:w-1/2 sm:w-max p-4 relative">
            <h2 className="max-w-3xl mb-6 text-4xl font-extrabold tracking-tight md:text-5xl xl:text-5xl text-gray-900 xl:leading-none">
              Facebook ads
            </h2>
            <p className="max-w-2xl mb-6 text-gray-600 lg:mb-10 md:text-lg lg:text-xl dark:text-gray-400">
              Our Facebook ads will grab the attention of potential customers
              and convince them to take action.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 mr-4 text-base font-bold text-center text-white rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Ask more
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div className="lg:w-1/2 sm:w-max p-4">
            <div className="lg:mt-0 lg:col-span-5 lg:flex">
              <img src={Write} />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-around items-center py-12">
          <div className="lg:w-1/2 sm:w-max p-4 relative">
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img src={Facebook} />
            </div>
          </div>
          <div className="lg:w-1/2 sm:w-max p-4">
            <h2 className="max-w-3xl mb-6 text-4xl font-extrabold tracking-tight md:text-5xl xl:text-5xl text-gray-900 xl:leading-none">
              Emails
            </h2>
            <p className="max-w-2xl mb-6 text-gray-600 lg:mb-10 md:text-lg lg:text-xl dark:text-gray-400">
              Our emails provide valuable information and promote your products
              or services in a way that encourages recipients to take action.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 mr-4 text-base font-bold text-center text-white rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Ask more
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-around items-center py-12">
          <div className="lg:w-1/2 sm:w-max p-4 relative">
            <h2 className="max-w-3xl mb-6 text-4xl font-extrabold tracking-tight md:text-5xl xl:text-5xl text-gray-900 xl:leading-none">
              Video scripts
            </h2>
            <p className="max-w-2xl mb-6 text-gray-600 lg:mb-10 md:text-lg lg:text-xl dark:text-gray-400">
              Our experienced writers will create a script for your video that
              is engaging, informative, and effective at communicating your
              message
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 mr-4 text-base font-bold text-center text-white rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Ask more
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div className="lg:w-1/2 sm:w-max p-4">
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img src={Facebook} />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-around items-center py-12">
          <div className="lg:w-1/2 sm:w-max p-4 relative">
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img src={Facebook} />
            </div>
          </div>
          <div className="lg:w-1/2 sm:w-max p-4">
            <h2 className="max-w-3xl mb-6 text-4xl font-extrabold tracking-tight md:text-5xl xl:text-5xl text-gray-900 xl:leading-none">
              Product descriptions
            </h2>
            <p className="max-w-2xl mb-6 text-gray-600 lg:mb-10 md:text-lg lg:text-xl dark:text-gray-400">
              Our product descriptions highlight the unique features and
              benefits of your products and convince potential customers to make
              a purchase.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 mr-4 text-base font-bold text-center text-white rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Ask more
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-around items-center py-12">
          <div className="lg:w-1/2 sm:w-max p-4 relative">
            <h2 className="max-w-3xl mb-6 text-4xl font-extrabold tracking-tight md:text-5xl xl:text-5xl text-gray-900 xl:leading-none">
              Articles and blog posts
            </h2>
            <p className="max-w-2xl mb-6 text-gray-600 lg:mb-10 md:text-lg lg:text-xl dark:text-gray-400">
              Our articles and blog posts are written by experienced writers who
              create engaging content that attracts new visitors and establishes
              you a s an expert in your field.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 mr-4 text-base font-bold text-center text-white rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Ask more
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div className="lg:w-1/2 sm:w-max p-4">
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img src={Facebook} />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-around items-center py-12">
          <div className="lg:w-1/2 sm:w-max p-4 relative">
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img src={Facebook} />
            </div>
          </div>
          <div className="lg:w-1/2 sm:w-max p-4">
            <h2 className="max-w-3xl mb-6 text-4xl font-extrabold tracking-tight md:text-5xl xl:text-5xl text-gray-900 xl:leading-none">
              Sales page/landing page
            </h2>
            <p className="max-w-2xl mb-6 text-gray-600 lg:mb-10 md:text-lg lg:text-xl dark:text-gray-400">
              Our sales pages and landing pages are designed to be clear,
              compelling, and effective at converting visitors into customers.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 mr-4 text-base font-bold text-center text-white rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Ask more
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
