function createData(No, ID, PassWord, UserName, Email, Area, Class, ReportCount, StopDate, AccountState, PhoneNumber, MakeDate) {
  return { No, ID, PassWord, UserName, Email, Area, Class, ReportCount, StopDate, AccountState, PhoneNumber, MakeDate };
}

const rows = [
  createData('1', 'User1', '1111', 'ESFP', 'User1@friendly.com', '서울', '취업', '1', '', '활동중', '010-1111-1111', '2022.10.01'),
  createData('2', 'User2', '2222', 'ESFJ', 'User2@friendly.com', '경기', '창업', '2', '', '활동중', '010-2222-2222', '2022.10.02'),
  createData('3', 'User3', '3333', 'ESTP', 'User3@friendly.com', '인천', '취업', '3', '2023.09.27', '정지 해제', '010-3333-3333', '2022.11.01'),
  createData('4', 'User4', '4444', 'ESTJ', 'User4@friendly.com', '부산', '창업', '4', '', '활동중', '010-4444-4444', '2022.12.13'),
  createData('5', 'User5', '5555', 'ENFP', 'User5@friendly.com', '제주', '취업', '5', '2023.09.28', '정지 해제', '010-5555-5555', '2023.02.11'),

];

export { createData, rows };