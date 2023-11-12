import {useState, useEffect} from 'react';
import { Map, MapMarker } from "react-kakao-maps-sdk"
import useKakaoLoader from "../pages/useKakaoLoader"
import axios from 'axios';
import '../css/My_Page_region_center.css';

function My_Page_region_center() {
    const { kakao } = window;
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const [address, setAddress] = useState({
        city: '',
        gu: '',
        dong: ''
    });

    const saveLocation = () => {
        console.log(address)
        axios.post('/map/saveLocation', address)
            .then((response) => {
                if(response.data === "save") alert("사용자의 위치가 저장되었습니다.")
            }).catch((error) =>{
            console.log(error+'저장 실패')
        })
    }
    const [locate, setLocate] = useState('현재 위치는?')
    useKakaoLoader()

    const lv = 6; //지도 확대 정도
    const [state, setState] = useState({
        center: {
            lat: 33.450701,
            lng: 126.570667,
        },
        errMsg: null,
        isLoading: true,
    })

    useEffect(() => {
        if (navigator.geolocation) {
            // GeoLocation을 이용해서 접속 위치를 얻어옵니다
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat_ = position.coords.latitude;
                    const lon_ = position.coords.longitude;
                    setLatitude(lat_);
                    setLongitude(lon_);

                    const geocoder = new kakao.maps.services.Geocoder();
                    geocoder.coord2Address(lon_, lat_, (result, status) => {
                        if (status === kakao.maps.services.Status.OK) {
                            const firstResult = result[0];
                            setAddress({
                                ...address,  // 이전의 값들을 복사합니다.
                                city: firstResult.address.region_1depth_name+'시',
                                gu: firstResult.address.region_2depth_name,
                                dong: firstResult.address.region_3depth_name
                            });
                        } else {
                            console.error('주소 검색 실패');
                        }
                    });

                    const latLng = {
                        lat: lat_, // 위도
                        lng: lon_, // 경도
                    };
                    setState((prev) => ({
                        ...prev,
                        center: latLng,
                        isLoading: false,
                    }))
                },
                (err) => {
                    setState((prev) => ({
                        ...prev,
                        errMsg: err.message,
                        isLoading: false,
                    }))
                }, {
                    enableHighAccuracy: true, // 정확도인데 별로 도움되는거같지않음
                    maximumAge: 30000,
                    timeout: 27000
                }
            )
        } else {
            // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
            setState((prev) => ({
                ...prev,
                errMsg: "geolocation을 사용할수 없어요..",
                isLoading: false,
            }))
        }
    }, [])
    return (
        <body>
        <div className="regionBox">
            <span id='mypage_region_one'>지역 인증</span>
            <hr id="regionhr"></hr>
            <span id="mypage_region_two">
                *저희 '친해지자'서비스는 이용자의 신뢰를 바탕으로하는 서비스입니다.<br />
                서비스 이용을 원하시면 지역인증을 완료해주세요
            </span>
            <Map // 지도를 표시할 Container
                center={state.center}
                style={{
                    // 지도의 크기
                    width: "80%",
                    height: "80%",
                }}
                level={lv} // 지도의 확대 레벨
                zoomable={false}
                draggable={false}
            >
                {!state.isLoading && (
                    <MapMarker
                        position={state.center}
                        image={{
                            src: process.env.PUBLIC_URL + "/img.png", // 마커이미지의 주소입니다
                            size: {width: 100, height: 100}, // 마커이미지의 크기입니다
                            options: {
                                offset: {x: -40, y: 50}
                            }
                        }}
                    />
                )}
            </Map>
            <div>
                <h3>현재 계신 위치는 {address.city} {address.gu} {address.dong} 입니다.</h3>
                <h3>위치가 맞다면 버튼을 눌러주세요 <button onClick={saveLocation}
                                              style={{
                                                  backgroundColor: '#4CAF50', // 배경색
                                                  fontSize:'15px',
                                                  color: 'white', // 글자색
                                                  padding: '10px 20px', // 여백
                                                  border: 'none', // 테두리 제거
                                                  borderRadius: '5px', // 모서리 둥글게
                                                  cursor: 'pointer', // 마우스 오버 시 커서 스타일 변경
                                              }}>위치 저장</button></h3>
            </div>
        </div>
        </body>
    );
}

export default My_Page_region_center;