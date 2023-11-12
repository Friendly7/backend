import {
    BrowserRouter,
    Routes,
    Route, useParams, useNavigate,
} from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Payment() {

    const navigate = useNavigate();
    const {inputPrice} = useParams();
    console.log(inputPrice)
    const userCode = "imp38636483";
    let today = new Date();
    let hours = today.getHours(); // 시
    let minutes = today.getMinutes();  // 분
    let seconds = today.getSeconds();  // 초
    let milliseconds = today.getMilliseconds();
    let makeMerchantUid = "order_id_" + hours +  minutes + seconds + milliseconds;
    let Testamount = inputPrice;
    let userName =  "일반사용자1"
    let itemName = '친해지자 55000 포인트 충전'
    let userPhone = '01095105145'
    let userEmail = "wnsdnxla@naver.com"

    // function saveMerchantUid(){
    //     $.ajax({
    //         url: "/saveMercantUid",
    //         data: {"merchantUid": makeMerchantUid},
    //         type: "post"
    //     });
    // }
    useEffect(()=>{
        requestPay();
    },[])
    const { IMP } = window;
   
    async function requestPay() {
        await axios({
            url: "/payments/prepare",
            method: "post",
            headers: {"Content-Type": "application/json"},
            data: {
                merchant_uid: makeMerchantUid, // 가맹점 주문번호
                amount: inputPrice, // 결제 예정금액
            }
        }).then(async response => {
            await axios({
                url: "/payments/prepare/" + makeMerchantUid,
                method: "get",
                headers: {"Content-Type": "application/json"}
            }).then(response => {
                if (response.data.amount != Testamount) {
                    alert("결제 실패. 금액 불일치")
                }
            })
        }).catch(err=> {
            alert("결제 서버가 불안정합니다. 나중에 시도하세요")
        })
        IMP.init(userCode);
        IMP.request_pay({
            pg: 'kakaopay.TC0ONETIME',
            pay_method: 'card',
            merchant_uid: makeMerchantUid, //상점에서 생성한 고유 주문번호
            name: itemName,
            amount: Testamount,
            buyer_email: userEmail,
            buyer_name: userName,
            buyer_tel: userPhone,
        }, function (rsp) {
            console.log(rsp)
            var imp_uid = rsp.imp_uid
            // 결제 사후검증
            axios.post("/verifyIamport/" + rsp.imp_uid).
            then(response=> {
                console.log(response)
                // 위의 rsp.paid_amount 와 data.response.amount를 비교한후 로직 실행 (import 서버검증)
                if (rsp.paid_amount === response.data.amount) {
                    axios.post('/paySuccess/'+ imp_uid)
                    .then(res=> {
                        console.log(res)
                        alert('결제 완료')
                        navigate('/My_Page_pointsplus')
                    }).catch(err=> {
                        console.log(err)
                    })
                } else {
                    alert("결제 실패");
                    navigate('/My_Page_pointsplus')
                }
            })
        });
    }

    return (
        <>
        </>
    );
}