import axios from "axios";

//Api 호출 Service component에서 import를 통해 사용될 공통 유틸리티
//axios 인스턴스 생성
export const apiClient = axios.create(
  //인스턴스에 기본 url객체만들기
  {
    // baseURL: "http://localhost:8080",
    //Elastic BeanStalk 배포 RestApi에 접속하기 위한 로컬 기본URL
    baseURL: "http://localhost:5000",
  }
);