// ReviewList.js
import React,{useState, useEffect} from 'react';
import Review from './Review';
import { useLocation } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import AverageRatingBar from './AverageRatingBar';
import axios from 'axios'
import RatingAndReview from './RatingAndReview'

function ReviewList() {
    const {state} = useLocation();
    const {name} = state;

    const reviewCounts = [0, 0, 0, 0, 0]; // 0부터 4까지의 점수에 대한 리뷰 개수
    const [reviews, setReviews] = useState([]);
    const [mentorName, setMentorName] = useState(name);

    useEffect(() => {
        const params = {
            metorName: name
        };
        axios.get("/review/list/mentor", {params:params})
            .then((response) => {
                console.log(response.data)
                setReviews(response.data); // 리뷰 데이터를 상태에 저장
            })
            .catch((error) => {
                console.error('리뷰 데이터를 불러오는 중 오류 발생:', error);
            });
    }, []);
    const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

    reviews.forEach((review) => {
        reviewCounts[Math.floor(review.rating) - 1]++;
    });
    return (
        <div>
            <h2>{mentorName}</h2>
        <Container maxWidth="md">
            <Box my={3}>
                <AverageRatingBar averageRating={averageRating} reviewCounts={reviewCounts} />
            </Box>
            <RatingAndReview mentorName={mentorName} />
            {reviews.map((review) => (
                <Box key={review.id} my={3}>
                    <Review {...review} />
                </Box>
            ))}
        </Container>
        </div>
    );
}

export default ReviewList;
