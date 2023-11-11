import * as React from "react";
import '../css/MainCenterOne.css';


export default function MainCenterOne() {

    return (
        <>
            <span className='MainCenteroneBox'>
                <span id='MCOperson'>
                    <span id='MCOspanone'><a id='changepurple'>동네친구</a>에게 이야기 하듯</span>
                    <span id='MCOspantwo'><a id='changepurple'>부담 없이</a> 여러분의 고민 들어 드립니다</span>
                    <span id='out_box_one_label'>상담 인기메뉴</span>
                    <span id='out_box_two_label'>멘토링 인기메뉴</span>
                    <i id="out_box_one">
                        <i className="in_box">학업</i>
                        <i className="in_box">성</i>
                        <i className="in_box">대인관계</i>
                        <i className="in_box">자기자신</i>
                        <i className="in_box">진로</i>
                        <i className="in_box">연애</i>
                    </i>
                    <i id="out_box_two">
                        <i className="in_box">IT</i>
                        <i className="in_box">디자인</i>
                        <i className="in_box">언어</i>
                        <i className="in_box">자격증</i>
                        <i className="in_box">요리/베이킹</i>
                        <i className="in_box">스피치</i>
                    </i>
                </span>
            </span>
        </>

    );
}