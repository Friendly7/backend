// AverageRatingBar.js
import React from 'react';
import { Rating, Typography, Box, LinearProgress } from '@mui/material';
import '../css/AverageRatingBar.css';

function AverageRatingBar({ averageRating, reviewCounts }) {
    const totalReviews = reviewCounts.reduce((total, count) => total + count, 0);

    return (
        <div className="average-rating-bar">
            <Box display="flex" alignItems="center">
                <Typography variant="body2" color="textSecondary">
                    평균 평점:
                </Typography>
                <Rating
                    name="average-rating"
                    value={averageRating}
                    precision={0.1}
                    readOnly
                />
                <Typography variant="body2" color="textSecondary">
                    {averageRating.toFixed(1)}
                </Typography>
            </Box>
            <div className="review-counts">
                {reviewCounts.map((count, index) => (
                    <div key={index}>
                        <Typography variant="body2" color="textSecondary">
                            {index + 1} 점:
                        </Typography>
                        <div className="progress-bar-container">
                            <LinearProgress
                                variant="determinate"
                                value={(count / totalReviews) * 100}
                                className="progress-bar"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AverageRatingBar;