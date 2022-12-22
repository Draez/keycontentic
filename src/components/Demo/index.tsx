import * as React from "react";

interface DemoProps {}

const Demo: React.FC<DemoProps> = () => {
  return (
    <div className="demo-section mx-auto py-24 container">
      <h2 className="text-3xl xl:text-5xl font-bold text-gray-900 text-center mt-16 max-w-xl mx-auto mb-6 xl:leading-tight">
        We transform your content to shine
      </h2>
      <p className="text-1xl text-gray-600 text-center max-w-xl mx-auto">
        Combine our powerful AI tools with your own notes to create faster, more
        efficient summaries – you can read or listen to
      </p>
      <div className="py-12 mx-auto flex flex-wrap justify-around">
        <div className="lg:w-1/2 p-4">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <span className="text-xs text-custom-yellow uppercase font-extrabold">
              Old version
            </span>
            <blockquote className="text-xl italic font-regular text-gray-800 dark:text-white my-3 line-through">
              <p>
                "At our business, we sell handbags. We have a variety of styles
                and colors to choose from. If you need a handbag, you can come
                to our store and see what we have. You can also shop online if
                you want. Thank you for considering our handbags."
              </p>
            </blockquote>
          </div>
        </div>

        <div className="lg:w-1/2 p-4">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <span className="text-xs text-custom-yellow uppercase font-extrabold">
              New version
            </span>
            <blockquote className="text-xl italic font-regular text-gray-800 dark:text-white my-3">
              <p>
                "At our business, we are proud to offer the best selection of
                handbags in town. From trendy totes to classic clutches, our
                handbags are made from high - quality materials and come in a
                wide range of colors and styles. Plus, with our satisfaction
                guarantee and free shipping, you can shop with confidence. Come
                visit us in store or shop online to find your perfect handbag
                today"
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
