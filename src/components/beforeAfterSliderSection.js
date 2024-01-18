// HomeSection.js
import React from "react";
import * as Unicons from "@iconscout/react-unicons";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const BeforeAfterSliderSection = () => {
  return (
    <section className="wrapper bg-gradient-primary">
      <div className="container py-14 py-md-16">
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <h2 className="display-4 mb-3">Öncesi / Sonrası</h2>
          <div className="col-md-3 col-lg-3 col-xl-3 order-lg-2 position-relative">
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage
                  src="https://github.com/nerdyman/stuff/raw/main/libs/react-compare-slider/demo-images/sydney-opera-house-1.jpg"
                  alt="Image one"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src="https://github.com/nerdyman/stuff/raw/main/libs/react-compare-slider/demo-images/sydney-opera-house-2.jpg"
                  alt="Image two"
                />
              }
            />
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3 order-lg-2">
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage
                  src="https://github.com/nerdyman/stuff/raw/main/libs/react-compare-slider/demo-images/sydney-opera-house-1.jpg"
                  alt="Image one"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src="https://github.com/nerdyman/stuff/raw/main/libs/react-compare-slider/demo-images/sydney-opera-house-2.jpg"
                  alt="Image two"
                />
              }
            />
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3 order-lg-2">
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage
                  src="https://github.com/nerdyman/stuff/raw/main/libs/react-compare-slider/demo-images/sydney-opera-house-1.jpg"
                  alt="Image one"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src="https://github.com/nerdyman/stuff/raw/main/libs/react-compare-slider/demo-images/sydney-opera-house-2.jpg"
                  alt="Image two"
                />
              }
            />
          </div>          
          <div className="col-md-3 col-lg-3 col-xl-3 order-lg-2">
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage
                  src="https://github.com/nerdyman/stuff/raw/main/libs/react-compare-slider/demo-images/sydney-opera-house-1.jpg"
                  alt="Image one"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src="https://github.com/nerdyman/stuff/raw/main/libs/react-compare-slider/demo-images/sydney-opera-house-2.jpg"
                  alt="Image two"
                />
              }
            />
          </div>              
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSliderSection;
