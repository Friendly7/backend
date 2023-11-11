// Review.js
import React from 'react';
import { Typography, Rating } from '@mui/material';

function Review(props) {
    const { text, rating, memberId } = props;

    return (
        <div className="review">
            {/*<Typography variant="h6">{title}</Typography>*/}
            <Rating name="rating" value={rating} precision={1} readOnly />
            <Typography variant="body1">{text}</Typography>
            <Typography variant="body2" color="textSecondary">
                By: {memberId ? memberId.name : 'Unknown'}
            </Typography>
        </div>
    );
}

export default Review;