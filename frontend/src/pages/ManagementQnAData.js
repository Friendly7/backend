function createData(State, Detail, Username, Date) {
    return { State, Detail, Username, Date };
  }
  
  const rows = [
    createData('답변 대기', '문의합니다1', '상담자1', '2023.09.23'),
    createData('답변 대기', '문의합니다2', '상담자2', '2023.09.24'),
    createData('답변 대기', '문의합니다3', '상담자3', '2023.09.25'),
    createData('답변 대기', '문의합니다4', '멘티1', '2023.09.26'),
    createData('답변 대기', '문의합니다5', '멘티2', '2023.09.27'),
  ];
  
  export { createData, rows };