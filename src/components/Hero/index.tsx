import * as React from 'react';
import { HeroImage, HeroContent, HeroWrapper } from './styles';

interface HeroProps {
}

const Hero: React.FunctionComponent<HeroProps> = (props) => {
  return (
    <HeroWrapper>
      <HeroContent className="flex">
        <div className="pl-48 w-3/5">
          <h1 className="text-7xl font-bold leading-tight">Boost your business <br />with the power of words.</h1>
          <p className="py-8">Our business provides SEO-optimized text content for businesses. We help companies improve their online presence and reach more customers by creating compelling, keyword-rich content that is designed to rank highly in search engine results</p>
        </div>

        <HeroImage className="w-2/5"></HeroImage>
      </HeroContent>

    </HeroWrapper>
  );

};

export default Hero;
