import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../css/ChatMemoComponent.css';

function ChatMemoComponent() {
    const [memo, setMemo] = useState('');
    const [memos, setMemos] = useState([]);
    const [selectedMemoIds, setSelectedMemoIds] = useState([]); // 선택된 메모의 ID 목록
    const maxLength = 200;

    const toggleSelectMemo = (memoId) => {
        // 선택된 메모의 ID 목록을 업데이트
        setSelectedMemoIds((prevSelectedMemoIds) => {
            if (prevSelectedMemoIds.includes(memoId)) {
                // 이미 선택된 메모면 제거
                return prevSelectedMemoIds.filter((id) => id !== memoId);
            } else {
                // 선택되지 않은 메모면 추가
                return [...prevSelectedMemoIds, memoId];
            }
        });
    };

    const addMemo = () => {
        if (memo.trim() !== '') {
            setMemo(memo)
            axios.post('/api/memos', null, {params: {memo: memo}
                })
                .then((response) => {
                    console.log(response.data);
                    setMemo('');
                    loadMemos();
                })
                .catch((error) => {
                    console.error('메모 추가 중 오류:', error);
                });
        }
    };

    const deleteSelectedMemos = () => {
        axios.delete('/api/memos', { data: { memoIds: selectedMemoIds } })
            .then((response) => {
                console.log(response.data);
                // 선택된 메모 삭제 후, 메모 목록 다시 로드
                loadMemos();
                setSelectedMemoIds([]); // 선택된 메모 ID 목록 초기화
            })
            .catch((error) => {
                console.error('메모 삭제 중 오류:', error);
            });
    };

    const remainingCharacters = memo.length;

    const loadMemos = () => {
        axios.get('/api/memos')
            .then((response) => {
                if(response.data!== null)
                    setMemos(response.data);
            })
            .catch((error) => {
                console.error('메모 로딩 중 오류:', error);
            });
    };

    useEffect(() => {
        loadMemos();
    }, []);

    return (
        <body>
        <div className="chat-memo">
            <h3 className='chat_title'>채팅 메모</h3>
            <div>
                <textarea className='textAreaSetting'
                    placeholder="메모를 작성하세요"
                    value={memo}
                    onChange={(e) => {
                        if (e.target.value.length <= maxLength) {
                            setMemo(e.target.value);
                        }
                    }}
                />
                <div className='saveButton'>
                    <span>{remainingCharacters}/{maxLength}</span>
                    <button className='memo_button_style' onClick={addMemo}>저장</button>
                </div>
            </div>
            <div className='memo_content'>
            <button className='memo_delete_button' onClick={deleteSelectedMemos}>선택된 메모 삭제</button>
            </div>
            <table className='memo_table'>
                <thead className='memo_head'>
                <tr>
                    <th><input type="checkbox" /> </th>
                    <th>No.</th>
                    <th>Contents</th>
                    <th>  </th>
                </tr>
                </thead>
                <tbody className='momo_body'>
                {memos && memos !== null ? (
                    memos.map((memo, index) => (
                    <tr key={index}>
                        <td>
                            <input
                                type="checkbox"
                                checked={selectedMemoIds.includes(memo.id)} // 해당 메모 ID가 선택된 목록에 있는지 확인
                                onChange={() => toggleSelectMemo(memo.id)}
                            />
                        </td>
                        <td>{index + 1}</td>
                        <td style={{ whiteSpace: 'pre-line' }}>{memo.contents.replace(/<br>/g, '\n')}</td>
                    </tr>
                ))) : (
                    <></>
                    )}
                </tbody>
            </table>
            </div>
        </body>
    );
}

export default ChatMemoComponent;
