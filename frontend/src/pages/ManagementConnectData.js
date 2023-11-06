function createData(No, Username, StopDate, AccountState) {
    return { No, Username, StopDate, AccountState };
  }
  
  const rows = [
    createData('상담사1', '상담자1', '2023.09.23~', '연결 해제'),
    createData('상담사2', '상담자2', '2023.09.24~', '연결 해제'),
    createData('상담사1', '상담자1', '2023.09.25~', '연결 해제'),
    createData('멘토1', '멘티1', '2023.09.26~', '연결 해제'),
    createData('멘토2', '멘티2', '2023.09.27~', '연결 해제'),
  ];

  export { createData, rows };