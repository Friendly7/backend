import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const labels = {
    //0.5: 'Useless',
    1: '최악이에요',
    //1.5: 'Poor',
    2: '별로에요',
    //2.5: 'Ok',
    3: '보통이에요',
    //3.5: 'Good',
    4: '좋았어요',
    //4.5: 'Excellent',
    5: '최고에요',
};

export default function TextRating() {
    const [value, setValue] = React.useState(0);

    const handleRatingChange = (event, newValue) => {
        // 클릭 이벤트 핸들러에서 value 상태 변수를 업데이트
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Rating
                name="text-feedback"
                value={value}
                precision={1} // 0.5 단위로 별점을 조절
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                onChange={handleRatingChange} // 클릭 이벤트 핸들러 연결
            />
            <Box sx={{ /*마진 설정같은거*/ }}>{labels[value]}</Box>
        </Box>
    );
}