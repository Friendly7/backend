import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const PriceSlider = () => {
    const [priceRange, setPriceRange] = useState([0, 1000]);

    const handlePriceChange = (value) => {
        setPriceRange(value);
    };

    return (
        <div className='sliderrange'>
            <label>가격 범위:</label>
            <Slider
                min={0}
                max={100000}
                value={priceRange}
                onChange={handlePriceChange}
                range
                step={5000}
            />
            <div>
                <span>설정된 최소 가격: {priceRange[0]}</span>
                <br />
                <span>설정된 최대 가격: {priceRange[1]}</span>
            </div>
        </div>
    );
};

export default PriceSlider;