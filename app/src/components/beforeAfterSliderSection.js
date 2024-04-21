import React from "react";
import SectionLayout from "./layout/sectionLayout";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const BeforeAfterSliderSection = () => {
  return (
    <SectionLayout title = "Öncesi / Sonrası">
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
    </SectionLayout>
  );
};

export default BeforeAfterSliderSection;
