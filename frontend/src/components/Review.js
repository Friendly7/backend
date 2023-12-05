// Review.js
import React from 'react';
import { Typography, Rating } from '@mui/material';
import '../css/Review.css'
function Review(props) {
    const { text, rating, memberId } = props;

    return (
        <div>
        <div className="review">
            {/*<Typography variant="h6">{title}</Typography>*/}
            <Rating className='review_rait' name="rating" value={rating} precision={1} readOnly />
            <Typography variant="body1">{text}</Typography>
            <Typography variant="body2" color="textSecondary">
            </Typography>
        </div>
        </div>
    );
}

export default Review;