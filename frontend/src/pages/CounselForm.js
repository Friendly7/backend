import React from 'react';
import { useNavigate } from "react-router-dom";
import '../css/CounselForm.css';
import Slider from 'rc-slider';
import { useState, useEffect } from 'react';
import 'rc-slider/assets/index.css';
import SessionManager from './SessionManager'
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export default function Counsel(){
    const location = useLocation();
    const parsedData = location.state.data;

    const navigate = useNavigate();
    const {name} = SessionManager();
    const date = new Date().toLocaleDateString();
    const gohome=() =>{
      navigate('/');
    }
    const [count,setCount]=useState(0);
    const goone=()=>{
      setCount((prevCount) => prevCount=-1);
      nextbtn_click();
    }

    const gotwo=()=>{
      setCount((prevCount) => prevCount=0);
      nextbtn_click();
    }

    const gothree=()=>{
      setCount((prevCount) => prevCount=1);
      nextbtn_click();
    }

    const gofour=()=>{
      setCount((prevCount) => prevCount=2);
      nextbtn_click();
    }

    const gofive=()=>{
      setCount((prevCount) => prevCount=3);
      nextbtn_click();
    }

    const gosix=()=>{
      setCount((prevCount) => prevCount=4);
      nextbtn_click();
    }

    useEffect(() => {
      const postData = {
        name: name,
        time:selectedTime,
        onoffline: selectedMethod,
        category: selectedField,
        dow:selectedDay,
        professional:parsedData,
        minPrice: priceRange[0],
        maxPrice: priceRange[1],
        expStat: selectedExp,
        significant: explain,
        one:one,
        two:two,
        three:three
      }
      if(count==5) {
        axios.post('/adviceRequest', postData)
            .then(response => {
            })
            .catch(error => {
              console.error('POST 요청 실패:', error);
            });
      }
      console.log(count)
      if(count==1){
        document.getElementById('firstp_counsel_form').style.display='none';
        document.getElementById('seconp_counsel_form').style.display='block';
        document.getElementById('thirdp_counsel_form').style.display='none';
        document.getElementById('fourdp_counsel_form').style.display='none';
        document.getElementById('fifthdp_counsel_form').style.display='none';
        document.getElementById('sixthdp_counsel_form').style.display='none';
        document.getElementById('v-line').style.backgroundColor='#04230B';
    };
    if(count==2){
        document.getElementById('firstp_counsel_form').style.display='none';
        document.getElementById('seconp_counsel_form').style.display='none';
        document.getElementById('thirdp_counsel_form').style.display='block';
        document.getElementById('fourdp_counsel_form').style.display='none';
        document.getElementById('fifthdp_counsel_form').style.display='none';
        document.getElementById('sixthdp_counsel_form').style.display='none';
        document.getElementById('v-line').style.backgroundColor='#04230B';
        document.getElementById('v-line_two').style.backgroundColor='#04230B';
    }
    if(count==3){
      document.getElementById('firstp_counsel_form').style.display='none';
      document.getElementById('seconp_counsel_form').style.display='none';
      document.getElementById('thirdp_counsel_form').style.display='none';
      document.getElementById('fourdp_counsel_form').style.display='block';
      document.getElementById('fifthdp_counsel_form').style.display='none';
      document.getElementById('sixthdp_counsel_form').style.display='none';
      document.getElementById('v-line').style.backgroundColor='#04230B';
      document.getElementById('v-line_two').style.backgroundColor='#04230B';
      document.getElementById('v-line_three').style.backgroundColor='#04230B';
    }
    if(count==4){
      document.getElementById('firstp_counsel_form').style.display='none';
      document.getElementById('seconp_counsel_form').style.display='none';
      document.getElementById('thirdp_counsel_form').style.display='none';
      document.getElementById('fourdp_counsel_form').style.display='none';
      document.getElementById('fifthdp_counsel_form').style.display='block';
      document.getElementById('sixthdp_counsel_form').style.display='none';
      document.getElementById('v-line').style.backgroundColor='#04230B';
      document.getElementById('v-line_two').style.backgroundColor='#04230B';
    }
    if(count==5){
      document.getElementById('firstp_counsel_form').style.display='none';
      document.getElementById('seconp_counsel_form').style.display='none';
      document.getElementById('thirdp_counsel_form').style.display='none';
      document.getElementById('fourdp_counsel_form').style.display='none';
      document.getElementById('fifthdp_counsel_form').style.display='none';
      document.getElementById('sixthdp_counsel_form').style.display='block';
      document.getElementById('v-line').style.backgroundColor='#04230B';
      document.getElementById('v-line_two').style.backgroundColor='#04230B';
    }
    }, [count]);

    const nextbtn_click=() =>{
        setCount((prevCount) => prevCount + 1);
    }

    const [priceRange, setPriceRange] = useState([0, 1000]);

    const handlePriceChange = (value) => {
        setPriceRange(value);
    };
    
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const [selectedMethod, setSelectedMethod] = useState("대면"); // 첫 번째 라디오 버튼 그룹
    const [selectedExp, setSelectedExp] = useState("희망");
    const [selectedField, setSelectedField] = useState("진로");
    const [selectedDay, setSelectedDay] = useState("월요일");
    const [selectedTime, setSelectedTime] = useState("8:00~12:00");
    const [explain, setExplain] = useState("");
    const [one,setOne] = useState("별점")
    const [two,setTwo] = useState("리뷰수")
    const [three,setThree] = useState("가격")

    const handleRadioChange = (event) => {
      setSelectedMethod(event.target.value);
    };

    const handleRadioChange_exp = (event) => {
      setSelectedExp(event.target.value);
    };

    const handleSelectChange = (event) => {
      setSelectedField(event.target.value);
    };

    const handleSelectChange_day = (event) => {
      setSelectedDay(event.target.value);
    };

    const handleSelectChange_time = (event) => {
      setSelectedTime(event.target.value);
    };

    return(
      <div className="container_csf">
        <div className='counselform'>
          <div className='counsel_form_header'>
            <button onClick={gohome} id='counsel_form_homebtn'></button>
          </div>
          <div className='counsel_form_name'>
            <span id='counsel_form_name_fi'>상담신청서</span>
            <span id='counsel_form_name_se'>행복한 일은 언제나 있어</span>
          </div>
          <div id='firstp_counsel_form'>
            <div className='counsel_form_left'>
              <button id='counsel_form_left_circle_half' onClick={goone}/><span id='counsel_form_left_one'>기본 정보 작성</span>
              <div id='v-line' />
              <button id='counsel_form_left_circle_none'onClick={gotwo}/><span id='counsel_form_left_two'>희망 방법 및 체험여부</span>
              <div id='v-line_two' />
              <button id='counsel_form_left_circle_none_three' on onClick={gothree}/><span id='counsel_form_left_three'>희망 시간 및 가격</span>
              <div id='v-line_three' />
              <button id='counsel_form_left_circle_none_four' onClick={gofour}/><span id='counsel_form_left_four'>매칭 우선 요소 선택</span>
              <div id='v-line_four' />
              <button id='counsel_form_left_circle_none_five' onClick={gofive}/><span id='counsel_form_left_five'>작성 내용 확인</span>
              <div id='v-line_five' />
              <button id='counsel_form_left_circle_none_six' onClick={gosix}/><span id='counsel_form_left_six'>신청 완료</span>
            </div>
            <div className='counsel_form_right'>
              <progress id='progress' value='0' max='100'></progress>
              <div id='progress_lb'>0%</div>
              <div class='h-line' />
              <label id='counsel_form_name_lb'>이름(닉네임)</label>
              <input type="text" id="name_form_counsel" value={name} readOnly/><br/>
              <label id='counsel_form_field_lb'>상담 희망 분야</label>
              <select name="field" id="sel_field" value={selectedField} onChange={handleSelectChange}>
                <option value="진로">학업, 진로</option>
                <option value="연애">성, 연애</option>
                <option value="대인관계">대인관계</option>
                <option value="자기자신">자기자신</option>
                <option value="기타">기타</option>
              </select>
              <label id='counsel_form_significant_lb'>특이사항</label>
              <input type="text" id="significant_form_counsel" placeholder="특이사항, 세부 분야를 써주세요" value={explain}
                     onChange={e=>setExplain(e.target.value)}/><br/>
              <button onClick={nextbtn_click} id='nextbtn'/>
            </div>
          </div>
          <div id='seconp_counsel_form'>
            <div className='counsel_form_left'>
              <button id='counsel_form_left_circle_full' onClick={goone}/><span id='counsel_form_left_one'>기본 정보 작성</span>
              <div id='v-line' />
              <button id='counsel_form_left_circle_half_se' onClick={gotwo}/><span id='counsel_form_left_two'>희망 방법 및 체험여부</span>
              <div id='v-line_two' />
              <button id='counsel_form_left_circle_none_three' onClick={gothree}/><span id='counsel_form_left_three'>희망 시간 및 가격</span>
              <div id='v-line_three' />
              <button id='counsel_form_left_circle_none_four' onClick={gofour}/><span id='counsel_form_left_four'>매칭 우선 요소 선택</span>
              <dispanv id='v-line_four' />
              <button id='counsel_form_left_circle_none_five' onClick={gofive}/><span id='counsel_form_left_five'>작성 내용 확인</span>
              <div id='v-line_five' />
              <button id='counsel_form_left_circle_none_six' onClick={gosix}/><span id='counsel_form_left_six'>신청 완료</span>
            </div>
            <div className='counsel_form_right'>
              <progress id='progress' value='20' max='100'></progress>
              <div id='progress_lb'>20%</div>
              <div class='h-line' />
              <label id='counsel_form_method_lb'>희망방법</label>
              <div className='counsel_method'>
                <label id='counsel_method_input_olb'><input type="radio" id='counsel_method_input_o' name="method" value="대면" checked={selectedMethod === "대면"}
          onChange={handleRadioChange}/> 대면</label>
                <label id='counsel_method_input_nlb'><input type="radio" id='counsel_method_input_n' name="method" value="비대면" checked={selectedMethod === "비대면"}
          onChange={handleRadioChange} /> 비대면</label>
              </div>
              <label id='counsel_form_exp_lb'>체험여부</label>
              <div className='counsel_exp'>
                <label id='counsel_method_input_olb'><input type="radio" id='counsel_exp_input_o' name="exp" value="희망" checked={selectedExp === "희망"}
          onChange={handleRadioChange_exp}/> 희망</label>
                <label id='counsel_method_input_nlb'><input type="radio" id='counsel_exp_input_n' name="exp" value="비희망" checked={selectedExp === "비희망"}
          onChange={handleRadioChange_exp}/> 비희망</label>
              </div>
              <button onClick={nextbtn_click} id='nextbtn'/>
            </div>
          </div>
          <div id='thirdp_counsel_form'>
            <div className='counsel_form_left'>
              <button id='counsel_form_left_circle_full' onClick={goone} /><span id='counsel_form_left_one'>기본 정보 작성</span>
              <div id='v-line' />
              <button id='counsel_form_left_circle_full_se' onClick={gotwo}/><span id='counsel_form_left_two'>희망 방법 및 체험여부</span>
              <div id='v-line_two' />
              <button id='counsel_form_left_circle_half_th' onClick={gothree}/><span id='counsel_form_left_three'>희망 시간 및 가격</span>
              <div id='v-line_three' />
              <button id='counsel_form_left_circle_none_four' onClick={gofour}/><span id='counsel_form_left_four'>매칭 우선 요소 선택</span>
              <dispanv id='v-line_four' />
              <button id='counsel_form_left_circle_none_five' onClick={gofive}/><span id='counsel_form_left_five'>작성 내용 확인</span>
              <div id='v-line_five' />
              <button id='counsel_form_left_circle_none_six' onClick={gosix}/><span id='counsel_form_left_six'>신청 완료</span>
            </div>
            <div className='counsel_form_right'>
              <progress id='progress' value='40' max='100'></progress>
              <div id='progress_lb'>40%</div>
              <div class='h-line' />
              <label id='counsel_form_day_lb'>상담 희망 요일</label>
              <select name="field" id="sel_day" value={selectedDay} onChange={handleSelectChange_day}>
                <option value="월요일">월요일</option>
                <option value="화요일">화요일</option>
                <option value="수요일">수요일</option>
                <option value="목요일">목요일</option>
                <option value="금요일">금요일</option>
                <option value="토요일">토요일</option>
                <option value="일요일">일요일</option>
              </select>
              <label id='counsel_form_time_lb' value={selectedTime} onChange={handleSelectChange_time}>상담 희망 시간</label>
              <select name="field" id="sel_time">
                <option value="8:00~12:00">8:00~12:00</option>
                <option value="12:00~18:00">12:00~18:00</option>
                <option value="18:00~22:00">18:00~22:00</option>
                <option value="22:00~24:00">22:00~24:00</option>
              </select>
              <label id='counsel_form_price_lb'>희망 가격</label>
              <div className='sliderrange'>
                <Slider id='slider'
                    min={0}
                    max={100000}
                    value={priceRange}
                    onChange={handlePriceChange}
                    range
                    step={5000}
                />
              </div>
              <div id='sliderrange_price'>
                    <span>{priceRange[0]} 원 이상 {priceRange[1]} 원 이하</span>
              </div>
              <div>
              <button id='recom_price'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                
              </button>
              {isHovered && (
                <div id='recommend'>
                  This div appears when the button is hovered.
                </div>
              )}
            </div>
              <button onClick={nextbtn_click} id='nextbtn'/>
            </div>
          </div>
          <div id='fourdp_counsel_form'>
            <div className='counsel_form_left'>
              <button id='counsel_form_left_circle_full' onClick={goone}/><span id='counsel_form_left_one'>기본 정보 작성</span>
              <div id='v-line' />
              <button id='counsel_form_left_circle_full_se' onClick={gotwo}/><span id='counsel_form_left_two'>희망 방법 및 체험여부</span>
              <div id='v-line_two' />
              <button id='counsel_form_left_circle_full_th' onClick={gothree}/><span id='counsel_form_left_three'>희망 시간 및 가격</span>
              <div id='v-line_three' />
              <button id='counsel_form_left_circle_half_four' onClick={gofour}/><span id='counsel_form_left_four'>매칭 우선 요소 선택</span>
              <dispanv id='v-line_four' />
              <button id='counsel_form_left_circle_none_five' onClick={gofive}/><span id='counsel_form_left_five'>작성 내용 확인</span>
              <div id='v-line_five' />
              <button id='counsel_form_left_circle_none_six' onClick={gosix}/><span id='counsel_form_left_six'>신청 완료</span>
            </div>
            <div className='counsel_form_right'>
              <progress id='progress' value='60' max='100'></progress>
              <div id='progress_lb'>60%</div>
              <div class='h-line' />
              <label id='counsel_form_ingre'>매칭 우선 요소</label>
              <label id='sel_first_pri'>1순위</label>
              <select name="field" id="sel_first" onChange={e=>setOne(e.target.value)} value={one}>
                <option value="응답시간">별점순</option>
                <option value="가격">후기순</option>
                <option value="상담시간">가격순</option>
              </select>
              <label id='sel_second_pri'>2순위</label>
              <select name="field" id="sel_second" onChange={e=>setTwo(e.target.value)} value={two}>
                <option value="응답시간">별점순</option>
                <option value="가격">후기순</option>
                <option value="상담시간">가격순</option>
              </select>
              <label id='sel_third_pri'>3순위</label>
              <select name="field" id="sel_third" onChange={e=>setThree(e.target.value)} value={three}>
                <option value="응답시간">별점순</option>
                <option value="가격">후기순</option>
                <option value="상담시간">가격순</option>
              </select>
              <button onClick={nextbtn_click} id='nextbtn'/>
            </div>
          </div>
          <div id='fifthdp_counsel_form'>
            <div className='counsel_form_left'>
              <button id='counsel_form_left_circle_full' onClick={goone}/><span id='counsel_form_left_one'>기본 정보 작성</span>
              <div id='v-line' />
              <button id='counsel_form_left_circle_full_se' onClick={gotwo}/><span id='counsel_form_left_two'>희망 방법 및 체험여부</span>
              <div id='v-line_two' />
              <button id='counsel_form_left_circle_full_th' onClick={gothree}/><span id='counsel_form_left_three'>희망 시간 및 가격</span>
              <div id='v-line_three' />
              <button id='counsel_form_left_circle_full_four' onClick={gofour}/><span id='counsel_form_left_four'>매칭 우선 요소 선택</span>
              <dispanv id='v-line_four' />
              <button id='counsel_form_left_circle_half_five' onClick={gofive}/><span id='counsel_form_left_five'>작성 내용 확인</span>
              <div id='v-line_five' />
              <button id='counsel_form_left_circle_none_six' onClick={gosix}/><span id='counsel_form_left_six'>신청 완료</span>
            </div>
            <div className='counsel_form_right'>
              <progress id='progress' value='80' max='100'></progress>
              <div id='progress_lb'>80%</div>
              <div class='h-line' />
              <label id='counsel_form_check'>신청 내용 확인</label>
              <label id='sel_first_lb'>상담분야</label>
              <span id='sel_field_check'>{selectedField}</span>
              <label id='sel_second_lb'>희망요일</label>
              <span id='sel_day_check'>{selectedDay}</span>
              <label id='sel_third_lb'>희망시간</label>
              <span id='sel_time_check'>{selectedTime}</span>
              <label id='sel_fourth_lb'>희망 가격</label>
              <span id='sel_price_check'>{priceRange[0]} 원 이상 {priceRange[1]} 원 이하</span>
              <label id='sel_fifth_lb'>상담방볍</label>
              <span id='sel_method_check'>{selectedMethod}</span>
              <label id='sel_sixth_lb'>체험여부</label>
              <span id='sel_exp_check'>{selectedExp}</span>
              <button onClick={nextbtn_click} id='nextbtn'/>
            </div>
          </div>
          <div id='sixthdp_counsel_form'>
            <div className='counsel_form_left'>
              <button id='counsel_form_left_circle_full' onClick={goone}/><span id='counsel_form_left_one'>기본 정보 작성</span>
              <div id='v-line' />
              <button id='counsel_form_left_circle_full_se' onClick={gotwo}/><span id='counsel_form_left_two'>희망 방법 및 체험여부</span>
              <div id='v-line_two' />
              <button id='counsel_form_left_circle_full_th' onClick={gothree}/><span id='counsel_form_left_three'>희망 시간 및 가격</span>
              <div id='v-line_three' />
              <button id='counsel_form_left_circle_full_four' onClick={gofour}/><span id='counsel_form_left_four'>매칭 우선 요소 선택</span>
              <dispanv id='v-line_four' />
              <button id='counsel_form_left_circle_full_five' onClick={gofive}/><span id='counsel_form_left_five'>작성 내용 확인</span>
              <div id='v-line_five' />
              <button id='counsel_form_left_circle_full_six' onClick={gosix}/><span id='counsel_form_left_six'>신청 완료</span>
            </div>
            <div className='counsel_form_right'>
              <progress id='progress' value='100' max='100'></progress>
              <div id='progress_lb'>100%</div>
              <div class='h-line' />
              <span id='counsel_form_complete'>신청 완료 되었습니다!!</span>
              <span id='counsel_form_com_two'>매칭 현황은 마이페이지에서 확인하세요</span>
              <button id='gomainbtn' onClick={gohome}>메인페이지로</button>
              <button id='gomypagebtn' onClick={gohome}>마이페이지로</button>
            </div>
          </div>
        </div>
      </div>
    );
  };