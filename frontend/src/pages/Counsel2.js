import React from 'react';
import { useNavigate } from "react-router-dom";
import '../css/Counsel.css';

export default function Counsel2() {
    return (
      <div className="container_cs">
        <div className='counsel'>
            <div id='counsel_name'>
                2급 전문가 상담 신청서
            </div>
            <form className='counsel_form'>
              <div className='counsel_nameex_lb'>
                <label id='counsel_name_lb'>이름(닉네임)</label>
                <label id='counsel_exp_lb'>체험여부</label>
              </div>
              <div className='counsel_nameex_input'>
                <input type="text" id="counsel_name_input" placeholder='  ' ></input>
                <label id='counsel_name_input_olb'><input type="radio" id='counsel_name_input_o' name="exp" value="희망" /> 희망</label>
                <label id='counsel_name_input_nlb'><input type="radio" id='counsel_name_input_n' name="exp" value="비희망" /> 비희망</label>
              </div>
              <div className='counsel_fietm_lb'>
                <label id='counsel_field_lb'>희망 분야</label>
                <label id='counsel_time_lb'>선호하는 시간대</label>
              </div>
              <div className='counsel_fietm_select'>
                <select name="filed" id="field">
                  <option value="진로">진로</option>
                  <option value="연애">연애</option>
                  <option value="java">Java</option>
                  <option value="golang">Golang</option>
                  <option value="python">Python</option>
                  <option value="c#">C#</option>
                  <option value="C++">C++</option>
                  <option value="erlang">Erlang</option>
                </select>
                <select name="time" id="time">
                  <option value="8">8:00 ~ 9:00</option>
                  <option value="연애">연애</option>
                  <option value="java">Java</option>
                  <option value="golang">Golang</option>
                  <option value="python">Python</option>
                  <option value="c#">C#</option>
                  <option value="C++">C++</option>
                  <option value="erlang">Erlang</option>
                </select>
              </div>
              <div className='significant'>
                <label id='significant_lb'>특이사항</label><br/>
                <input type="text" id="significant_input" placeholder='  ' ></input>
              </div>
              <div className='counsel_nummeth_lb'>
                <label id='counsel_number_lb'>희망 인원</label>
                <label id='counsel_method_lb'>희망 방법</label>
              </div>
              <div className='counsel_nummeth_input'>
                <label id='counsel_number_input_olb'><input type="radio" id='counsel_number_input_o' name="number" value="개인" /> 개인</label>
                <label id='counsel_number_input_nlb'><input type="radio" id='counsel_number_input_n' name="number" value="그룹" /> 그룹</label>
                <label id='counsel_method_input_olb'><input type="radio" id='counsel_method_input_o' name="method" value="대면" /> 대면</label>
                <label id='counsel_method_input_nlb'><input type="radio" id='counsel_method_input_n' name="method" value="비대면" /> 비대면(채팅)</label>
              </div>
            </form>
        </div>
      </div>
    );
  }