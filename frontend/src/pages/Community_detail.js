import * as React from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { createData, rows } from "./ManagementQnAData";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Community_detail() {
    const { id } = useParams(); // URL에서 No 매개변수를 가져옴
    const [list, setList] = useState(null);
    const [boardName, setBoardName] = useState("");
    const [userName, setUserName] = useState("");
    const [content, setContent] = useState("");
    // 선택한 No에 해당하는 데이터 찾기
    //const selectedRow = rows.find((row) => row.State === State);
    const data = {
        id:id
    }
    useEffect(() => {
        axios.post('/viewAreaContent', data.id)
            .then((response) => {
                setList(response.data);
                setBoardName(list?.[0].board_name);
                setUserName(list?.[0].user_name);
                setContent(list?.[0].content);
                console.log(list);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }, []);
    // 선택한 데이터가 없으면 null 반환
    //  if (!selectedRow) {
    //     return null;
    // }
    if (list){
        return(
            <div>
                {/* <Container key={selectedRow.State}>*/}

                <TitleNoWrapper>{list?.[0].board_name}</TitleNoWrapper>
                <TitleWrapper>
                    <TitleSingoWrapper>작성자 : {list?.[0].user_name} 님 </TitleSingoWrapper>
                </TitleWrapper>
                <ContentTitleWrapper>
                    내용
                    <br />
                    <DetailWrapper>{list?.[0].content}</DetailWrapper>
                    답변 추가
                    <br />
                    <AnswerWrapper>
                        <AnswerDetailWrapper></AnswerDetailWrapper>
                    </AnswerWrapper>
                </ContentTitleWrapper>
                {/*</Container>*/}
            </div>
        );
    }else return null;
}

const TitleNoWrapper = styled.div`
  font-size: 30px;
  padding-bottom: 30px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 3px solid green;
  padding-bottom: 10px;
`;

const TitleDateWrapper = styled.div`
  padding-right: 700px;
`;

const TitleSingoWrapper = styled.div``;

const AnswerWrapper = styled.div`
  font-size: 25px;
  padding-top: 30px;
`;

const ContentTitleWrapper = styled.div`
  font-size: 25px;
  padding-top: 50px;
`;

const DetailWrapper = styled.div`
  border: 1px solid green;
  font-size: 15px;
  padding: 10px;

  width: 1000px;
  height: 300px;
`;

const AnswerDetailWrapper = styled.div`
  border: 1px solid green;
  font-size: 15px;
  padding-top: 100px;

  width: 1000px;
  height: 20px;
`;