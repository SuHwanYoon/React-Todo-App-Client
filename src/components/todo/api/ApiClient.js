import axios from "axios";


const host =  "http://3.38.94.180:8080/"; // AWS EC2 서버

console.log(host);
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
    baseURL: host,
  }
);