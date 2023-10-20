import React, { useState } from 'react';
import TextRating from "./TextRating";
import axios from 'axios';
import {useNavigate} from "react-router-dom";

export default function RatingAndReview() {
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
            name: "상대방이름"
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
        <div>
          <h2>별점과 후기</h2>
          <div>
              <TextRating value={textRatingValue} onRatingChange={handleTextRatingChange}/>
          </div>
          <div>
            <label>후기:</label>
            <textarea value={review} onChange={handleReviewChange} />
          </div>
          <button onClick={handleSubmit}>제출</button>
        </div>
    );
}