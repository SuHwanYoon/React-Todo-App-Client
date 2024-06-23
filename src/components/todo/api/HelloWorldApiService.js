import axios from "axios";

//  export function getHelloWorldBean() {
//     return axios.get('http://localhost:8080/hello-world-bean')
// }

//axios 인스턴스 생성
const apiClient = axios.create(
    //인스턴스에 기본 url객체만들기
    {
        baseURL: 'http://localhost:8080'
    }
)


//화살표 함수로 표현
export const getHelloWorldBean 
    = () =>apiClient.get("/hello-world-bean");


export const getHelloWorldBeanPathVariable 
        //템플릿 리터럴을 사용해서 paramater의 변수값을 ${username}을 통해 삽입
    = (username) => apiClient.get(`/hello-world/path-variable/${username}`);
