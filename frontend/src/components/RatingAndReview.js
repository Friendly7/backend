import React, { useState } from 'react';
import TextRating from "./TextRating.js";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import '../css/RatingAndReview.css';

export default function RatingAndReview({ mentorName }) {
    const [review, setReview] = useState(''); // 후기 상태
    const [textRatingValue, setTextRatingValue] = useState(0);
    const navigate = useNavigate();

    const handleTextRatingChange = (newValue) => {
        setTextRatingValue(newValue);
    };

    const handleReviewChange = (event) => {
        setReview(event.target.value);
    };

    const handleSubmit = () => {
        const reviewData = {
            raiting: textRatingValue,
            text: review,
            name: mentorName
        }
        axios.post("/review/save", reviewData)
            .then(response=>{
                if(response.data ==="save") {
                    alert("작성 완료")
                    navigate("/")
                }
                else alert("작성 실패")
            })
    };

    return (
        <>
            <h2 id='ratingandreviewname'>별점과 후기</h2>
            <div id='star'>
                <TextRating value={textRatingValue} onRatingChange={handleTextRatingChange}/>
            </div>
            <div>
                <label id='reviewname'>후기</label>
                <textarea id='reviewinput' value={review} onChange={handleReviewChange} />
            </div>
            <button id='reviewsubmit' onClick={handleSubmit}>제출</button>
        </>
    );
}