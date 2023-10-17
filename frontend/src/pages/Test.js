import React, { useState } from 'react';

function Test() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };

    return (
        <div
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            style={{ background: isHovered ? 'lightgray' : 'white' }}
        >
            {isHovered ? 'Mouse is over!' : 'Hover me!'}
        </div>
    );
}

export default Test;
