import React from 'react';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const labels = {
    1: '최악이에요',
    2: '별로에요',
    3: '보통이에요',
    4: '좋았어요',
    5: '최고에요',
};

export default function TextRating(props) {
    const { value, onRatingChange } = props;

    const handleRatingChange = (event, newValue) => {
        onRatingChange(newValue);
    };

    return (
        <div>
            <Rating
                name="text-feedback"
                value={value}
                precision={1}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                onChange={handleRatingChange}
            />
            <div>{labels[value]}</div>
        </div>
    );
}
