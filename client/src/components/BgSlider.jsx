import React, { useState } from 'react';
import { assets } from '../assets/assets';

const BgSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };
  
  return (
    <div className="flex flex-col items-center mt-6">
      {/* Title */}
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
        Remove Background With High Quality and Accuracy
      </h1>

      {/* Slider */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleSliderChange}
        className="w-3/4 mb-4"
      />

      {/* Images */}
      <div className="relative w-[500px] h-[300px] overflow-hidden">
        {/* Image with Background */}
        <img
          src={assets.image_w_bg}
          alt="With Background"
          className="absolute top-0 left-0 w-full h-full"
        />
        {/* Image without Background */}
        <img
          src={assets.image_wo_bg}
          alt="Without Background"
          className="absolute top-0 left-0 w-full h-full"
          style={{
            clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`,
          }}
        />
      </div>
    </div>
  );
};

export default BgSlider;
