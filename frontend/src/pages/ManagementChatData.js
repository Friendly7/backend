function createData(No, Title, Singo, PiSingo, Detail, Date) {
    return { No, Title, Singo, PiSingo, Detail, Date };
  }
  
  const rows = [
    createData('1', '너무 불친절합니다.', '상담자1', '상담사1', '1개월 전쯤부터 유료 상담을 시작했습니다. 처음에는 친절해서 유료인 이유가 있다고 생각했습니다. 하지만 한달이 지나면서부터 상담을 해주시는 말투가 매우 불친절하게 바뀌었습니다. 검토 후 연결해제와 환불요청합니다.', '2023.10.01'),
    createData('2', '연락을 너무 받지 않습니다', '상담자2', '상담사2', '2', '2023.10.02'),
    createData('3', '이상한 사람인 것 같습니다.', '상담자1', '상담사1', '3', '2023.10.03'),
    createData('4', '욕설을 너무 많이 사용합니다.', '멘티1', '멘토1', '4', '2023.10.04'),
    createData('5', '너무 불친절합니다.', '멘토2', '멘티1', '5', '2023.10.05'),
  ];
  
  export { createData, rows };