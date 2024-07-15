import axios from "axios";


// 환경 변수에서 API URL 가져오기
const apiURL = process.env.NODE_ENV === 'production'
  ? process.env.REACT_APP_API_URL
  : 'http://localhost:5000'; // npm run start로 실행할때 디폴트로 SpringBoot 5000 port 서버 URL 설정



//Api 호출 Service component에서 import를 통해 사용될 공통 유틸리티
//axios 인스턴스 생성
export const apiClient = axios.create(
  //인스턴스에 기본 url객체만들기
  {
    // baseURL: "http://localhost:8080",
    //Elastic BeanStalk 권장 port 로컬 기본URL server.port=5000
    // baseURL: "http://localhost:5000",
    // Elastic BeanStalk rest-api URL
    // baseURL: "http://full-stack-restapi-mysql-env.eba-thy63jtv.ap-northeast-2.elasticbeanstalk.com/",
    // baseURL: "https://cors-anywhere.herokuapp.com/http://full-stack-restapi-mysql-env.eba-thy63jtv.ap-northeast-2.elasticbeanstalk.com",
    baseURL: apiURL
  }
);