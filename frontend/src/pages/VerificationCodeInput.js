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
            <div>
                <label>인증 번호:</label>
                <input
                    type="text"
                    value={this.state.code}
                    onChange={this.handleCodeChange}
                />
                <button onClick={() => this.props.onVerify(this.state.code)}>확인</button>
            </div>
        );
    }
}

export default VerificationCodeInput;
