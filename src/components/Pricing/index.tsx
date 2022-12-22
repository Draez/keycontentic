import * as React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import SinglePriceTemplate from "./SinglePriceTemplate";
import "./newGalleryStyles.css";

interface PricingProps {}

const Pricing: React.FC<PricingProps> = () => {
  return (
    <section className="bg-gray-800 dark:bg-gray-900  py-24">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <Carousel showArrows={true} showStatus={false}>
          <SinglePriceTemplate title={"Emails"} price1={30} price2={60} />
          <SinglePriceTemplate
            title={"Video scripts"}
            price1={30}
            price2={60}
          />
          <SinglePriceTemplate
            title={"Product descriptions"}
            price1={30}
            price2={60}
          />
        </Carousel>
      </div>
    </section>
  );
};

export default Pricing;
