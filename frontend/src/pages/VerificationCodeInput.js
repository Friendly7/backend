import React, { Component } from 'react';

class VerificationCodeInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '', // 인증 번호 상태
        };
    }

    handleCodeChange = (e) => {
        this.setState({ code: e.target.value });
    }

    render() {
        return (
            <>
                <label>인증 번호:</label>
                <input
                    type="text"
                    value={this.state.code}
                    onChange={this.handleCodeChange}
                />
                <button style={buttonStyle} onClick={() => this.props.onVerify(this.state.code)}>확인</button>
            </>
        );
    }
}

export default VerificationCodeInput;
const buttonStyle = {
    padding: '3px 7px',
    fontSize: '11px',
    fontWeight: 'bold',
    textAlign: 'center',
    textDecoration: 'none',
    cursor: 'pointer',
    border: '2px solid #4CAF50',
    color: '#4CAF50',
    backgroundColor: '#fff',
    transition: 'background-color 0.3s, color 0.3s',
};