import React, { useState } from 'react';

function ChatMemoComponent() {
    const [memo, setMemo] = useState('');
    const [memos, setMemos] = useState([]);
    const maxLength = 200;

    const addMemo = () => {
        if (memo.trim() !== '') {
            setMemos([...memos, memo]);
            setMemo('');
        }
    };

    const deleteMemo = (index) => {
        const updatedMemos = memos.filter((_, i) => i !== index);
        setMemos(updatedMemos);
    };

    const remainingCharacters = memo.length;

    return (
        <div className="chat-memo">
            <h2>채팅 메모</h2>
            <div>
        <textarea
            placeholder="메모를 작성하세요"
            value={memo}
            onChange={(e) => {
                if (e.target.value.length <= maxLength) {
                    setMemo(e.target.value);
                }
            }}
        />
                <div>
                    <span>{remainingCharacters}/{maxLength}</span>
                    <button onClick={addMemo}>추가</button>
                </div>
            </div>
            <ul>
                {memos.map((text, index) => (
                    <li key={index}>
                        {text}
                        <button onClick={() => deleteMemo(index)}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ChatMemoComponent;
