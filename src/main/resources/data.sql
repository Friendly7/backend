insert into member values(1, null,null,null,"상관없음",null,"admin@root.com", 0, "자기소개", 0, "대분류", 0, 0, 0, "관리자",123,
                          010,1000000, "관리자", 4.5, null, 0,0,10, "USER","소분류","상관없음",30);
insert into member values(2, null,null,null,"월요일",null,"metor@root.com", 0, "자기소개", 0, "컴퓨터", 0, 0, 0, "멘토",123,
                          010,1000000,"1급전문", 4.5, null, 0,0,10, "MENTOR","소분류","8:00~12:00",20);
insert into member values(3, null,null,null,"월요일",null,"user2@root.com", 0, "자기소개", 0, "컴퓨터", 0, 0, 0, "나도자용사",123,
                          010,1000000,"일반사용자", 4.5, null, 0, 0,10, "USER","소분류","8:00~12:00",0);
insert into member values(4, null,null,null,"월요일",null,"user3@root.com", 0, "자기소개", 0, "컴퓨터", 0, 0, 0, "멘토입니다",123,
                          010,1000000,"1급전문", 4.5, null, 0, 0,10, "MENTOR","소분류","8:00~12:00",0);
insert into member values(5, null,null,null,"월요일",null,"counsel1@root.com", 0, "자기소개자기소개자기소개자기소개자기소개", 0, "진로", 0, 0, 0, "상담사입니다",123,
                          010,1000000,"1급전문", 4.0, null, 0, 0, 0, "COUNSELOR","소분류","8:00~12:00",0);
insert into member values(6, null,null,null,"월요일",null,"counsel2@root.com", 0, "자기소개", 0, "진로", 0, 0, 0, "상담사인척",123,
                          010,1000000,"1급전문", 5.0, null, 0,0,10, "COUNSELOR","소분류","8:00~12:00",20);
insert into member values(7, null,null,null,"월요일",null,"counsel3@root.com", 0, "1급전문 상담사입니다. 열심히 도와드리겠습니다.", 0, "진로", 0, 60000, 0, "상담전문이에요",123,
                          010,1000000,"1급전문", 3.3, null, 0, 0,150, "COUNSELOR","소분류","8:00~12:00",300);
insert into member values(8, null,null,null,"월요일",null,"counsel4@root.com", 0, "자기소개", 0, "진로", 0, 0, 0, "상담사용닉네임",123,
                          010,1000000,"1급전문", 3.5, null, 0, 2, 1, "COUNSELOR","소분류","8:00~12:00",1);
insert into member values(9, '서울시','고척동','구로구',"월요일",'2023-11-12 11:12:13',"counsel5@root.com", 0, "전문1급~", 1, "진로", 0, 0, 0, "친절한상담사",123,
                          010,1000000,"1급전문", 5.0, null, 0, 2, 1, "COUNSELOR","소분류","8:00~12:00",1);
insert into member values(10, null,null,null,"월요일",null,"user1@root.com", 0, "자기소개", 0, "진로", 0, 0, 0, "일반사용자1",123,
                          010,0,"일반사용자", 4.5, null, 0, 0,10, "USER","소분류","8:00~12:00",10);
insert into member values(11, null,null,null,null,null,"wnsdnxla@naver.com", 0, "자기소개", 0, "난진로", 0, 0, 0, "차준우",123,
                          01095105145,0,"일반사용자", 0, null, 0, 0,0, "USER","소분류","8:00~12:00",0);



# insert into advicerequest values(1, "월요일","진로","2023-11-09 15:28:48",0,"요청대기",null,null,100000,null,0,"매칭횟수","대면","1급전문","진로를 못정했어요","리뷰수","8:00~12:00","별점",3,"일반사용자1",null);
insert into advicerequest values(2, "월요일","진로","2023-11-09 15:28:48",0,"요청대기",null,null,150000,null,0,"별점","비대면","1급전문","나도몰라용","가격","8:00~12:00","",4,"나도자용사",null);
insert into point values(1,'2023-10-20','50000','충전',10);
insert into report values(1, '채팅으로 욕해요','2023-11-09 15:28:48', '신고자', '피신고인','처리대기','욕설');
insert into report values(2, '열심히안해요. 정지시켜줘','2023-09-01 15:28:48','일반사용자', '상담사용닉네임','처리대기','비협조적');
insert into report values(3, '계속 욕해요.못참겠어요','2023-10-29 15:28:48', '멘토입니다', '나도사용자','처리대기','욕설');

insert into areaboard values(1, '서울시','고척동', '구로구', '테스트 글 제목','테스트 내용입니다.테스트 내용입니다.테스트 내용입니다',4, '멘토입니다');
insert into areaboard values(2, '서울시','고척동', '구로구', '테스트 글 제목','테스트 내용입니다.테스트 내용입니다.테스트 내용입니다',4, '멘토');
insert into areaboard values(3, '서울시','고척동', '구로구', '테스트 글 제목','테스트 내용입니다.테스트 내용입니다.테스트 내용입니다',4, '상담사입니다');
insert into areaboard values(4, '서울시','고척동', '구로구', '테스트 글 제목','테스트 내용입니다.테스트 내용입니다.테스트 내용입니다',4, '상담사인척');
insert into areaboard values(5, '서울시','고척동', '구로구', '테스트 글 제목','테스트 내용입니다.테스트 내용입니다.테스트 내용입니다',4, '친절한상담사');
insert into areaboard values(6, '서울시','고척동', '구로구', '테스트 글 제목','테스트 내용입니다.테스트 내용입니다.테스트 내용입니다',4, '상담사용닉네임');
insert into areaboard values(7, '서울시','청담동', '강남구', '테스트 테스트 그만','테스트 내용입니다',7, '상담전문이에요');
