import {useState, useEffect} from 'react';
import { Map, MapMarker } from "react-kakao-maps-sdk"
import useKakaoLoader from "./useKakaoLoader"
import axios from 'axios';

const { kakao } = window;

function Location() {
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

    const lv = 7; //지도 확대 정도
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
                                city: firstResult.address.region_1depth_name,
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
        <>
            <Map // 지도를 표시할 Container
                center={state.center}
                style={{
                    // 지도의 크기
                    width: "50%",
                    height: "50%",
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
                                offset: {x: 50, y: 40}
                            }
                        }}
                    />
                )}
            </Map>
            <div>
                <h3>현재 계신 위치는 {address.city} {address.gu} {address.dong}</h3>
                <h3>위치가 맞다면 버튼을 눌러주세요 <button onClick={saveLocation}>위치 저장</button></h3>
            </div>
        </>
    )
}

export default Location;