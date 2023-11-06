function createData(No, Class, State, Username, Date) {
    return { No, Class, State, Username, Date };
  }
  
  const rows = [
    createData('1', '멘토링', '매칭 대기', 'ESFP', '2023.09.27'),
    createData('2', '상담', '매칭 대기', 'ESFJ', '2023.09.27'),
    createData('3', '상담', '매칭 대기', 'ESTJ', '2023.09.27'),
    createData('4', '멘토링', '매칭 대기', 'ESTP', '2023.09.28'),
    createData('5', '멘토링', '매칭 대기', 'ENFP', '2023.09.28'),
  ];

  export { createData, rows };