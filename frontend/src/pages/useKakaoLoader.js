import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk"

export default function useKakaoLoader() {
    useKakaoLoaderOrigin({
        appkey: "e6ccd1bab23d68efbb72e8f0e7f4c03c",
        libraries: ["drawing", "services"],
    })
}