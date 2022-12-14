import * as React from "react";
import Team from "../../images/team.svg";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="dark:bg-gray-800">
      <div className="grid container px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-32 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-3xl mb-8 text-4xl font-extrabold tracking-tight md:text-5xl xl:text-7xl text-gray-900 xl:leading-none">
            Boost your{" "}
            <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-500">
              business
            </span>{" "}
            with the power of words
          </h1>
          <p className="max-w-2xl mb-6 text-gray-600 lg:mb-10 md:text-lg lg:text-xl dark:text-gray-400">
            We offer a range of services, including website content, blog posts,
            articles, and product descriptions. articles, and product
            descriptions. articles, and product descriptions.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 mr-4 text-base font-bold text-center text-white rounded-full bg-gray-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Get started
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
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={Team} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
