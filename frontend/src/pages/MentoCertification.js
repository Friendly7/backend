import * as React from "react";
import {
  BrowserRouter as Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";
import styled from "styled-components";
import { styled as muiStyled } from "@mui/system";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function MentoCertification() {
  return (
    <div>
      <ContentWrapper>
        상담사, 멘토 인증
        <CertificationWrapper>
          <CauoneWrapper>
            ▶ 상담사 <br />
            - 전문 : 상담사 자격증 또는 대학원 졸업 증명서 <br />
            - 준비생 : 재학 증명서 또는 졸업 증명서 <br /><br />
            ▶ 주의사항 <br />
            - 신분증, 본인 얼굴, 날짜가 나와야 합니다.<br />
            - 확인에 수 일이 소요될 수 있습니다. <br />
            - 조건을 모두 충족해야 활동이 가능합니다. <br />
          </CauoneWrapper>
          <CautwoWrapper>
            ▶ 멘토<br />
            - 대학(원) 졸업 증명서 또는 관련업 종사 증명 서류<br />
          </CautwoWrapper>
          <CauthreeWrapper>
            ▶ 공통<br/>
            - 범죄 경력 회보서<br/>
            - 신분증을 들고 있는 모습<br/>
          </CauthreeWrapper>
        </CertificationWrapper>
        <IdentifyWrapper>
          ▶ 신분증 제출하기<br/>
          - 주민등록번호 뒷자리는 가려주세요.<br/>
          - 글씨를 잘 알아볼 수 있도록 써주세요.<br/>          
          - 메모가 부착된 신분증을 들고 사진을 찍어주세요.<br/><br /><br/><br/>
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
          >
            Upload file
            <VisuallyHiddenInput type="file" />
          </Button>
        </IdentifyWrapper>
        <SubmitWrapper>
          서류 제출하기<br /><br /><br /><br />
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
          >
            Upload file
            <VisuallyHiddenInput type="file" />
          </Button>
        </SubmitWrapper>
      </ContentWrapper>
    </div>
  );
}

const ContentWrapper = styled.div`
  font-size: large;
  width: 1300px;
`;

const CertificationWrapper = styled.div`
  display: flex;
  flex-direction: row;

  border-bottom: 1px solid green;
  border-top: 1px solid green;
  padding-top: 50px;
  padding-bottom: 100px;
`;

const CauoneWrapper = styled.div`
  font-size: small;
  padding-right: 15%;
`;

const CautwoWrapper = styled.div`
  font-size: small;
  padding-right: 15%;
`;
const CauthreeWrapper = styled.div`
  font-size: small;
`;

const IdentifyWrapper = styled.div`
  border-bottom: 1px solid green;
  border-top: 1px solid green;
  padding-top: 50px;
  padding-bottom: 100px;
  font-size: small;
`;

const SubmitWrapper = styled.div`
  border-top: 1px solid green;
  padding-top: 50px;
  padding-bottom: 100px;
  font-size: small;
`;
