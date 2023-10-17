import React, { useState } from 'react';
import TextRating from "./RaitingStarts";
import axios from 'axios';

function RatingAndReview() {
  const [review, setReview] = useState(''); // 후기 상태
  const [value, setValue] = useState(3);

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmit = () => {
      const reviewData = {
          raiting: value,
          text: review
      }
    axios.post("/review/save", reviewData)
        .then(response=>{
            if(response.data ==="save") alert("작성 완료")
            else alert("작성 실패")
        })
  };

  return (
    <div>
      <h2>별점과 후기</h2>
      <div>
          <TextRating value={value} />
      </div>
      <div>
        <label>후기:</label>
        <textarea value={review} onChange={handleReviewChange} />
      </div>
      <button onClick={handleSubmit}>제출</button>
    </div>
  );
}

export default RatingAndReview;
