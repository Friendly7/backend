import * as React from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { createData, rows } from "./ManagementChatData";
import { Container } from "react-bootstrap";
import styled from "styled-components";

export default function ManagementChatDetail() {
  const { No } = useParams(); // URL에서 No 매개변수를 가져옴

  // 선택한 No에 해당하는 데이터 찾기
  const selectedRow = rows.find((row) => row.No === No);

  // 선택한 데이터가 없으면 null 반환
  if (!selectedRow) {
    return null;
  }

  return (
    <div>
      <Container key={selectedRow.No}>
        <TitleNoWrapper>No.{selectedRow.No}</TitleNoWrapper>
        <TitleWrapper>
          <TitleDateWrapper>작성 날짜 : {selectedRow.Date}</TitleDateWrapper>
          <TitleSingoWrapper>작성자 : {selectedRow.Singo}</TitleSingoWrapper>
        </TitleWrapper>
        <TitlePiSingoWrapper>
          신고하려는 사람 : {selectedRow.PiSingo}
        </TitlePiSingoWrapper>

        <SingoContentTitleWrapper>
          신고 내용
          <br />
          <SingoDetailWrapper>{selectedRow.Detail}</SingoDetailWrapper>
        </SingoContentTitleWrapper>
      </Container>
    </div>
  );
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

const TitlePiSingoWrapper = styled.div`
  font-size: 25px;
  padding-top: 30px;
`;

const SingoContentTitleWrapper = styled.div`
  font-size: 25px;
  padding-top: 100px;
`;

const SingoDetailWrapper = styled.div`
  border: 1px solid green;
  font-size: 15px;
  padding: 10px;

  width: 1000px;
  height: 300px;
`;
