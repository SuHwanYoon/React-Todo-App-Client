import axios from "axios";



//axios 인스턴스 생성
const apiClient = axios.create(
    //인스턴스에 기본 url객체만들기
    {
        baseURL: 'http://localhost:8080'
    }
)


//  export function getHelloWorldBean() {
//     return axios.get('http://localhost:8080/hello-world-bean')
// }

// username을 url에서 받아 할일 목록 Http get Method Api 호출
export const getTodosByUsernameApi 
        //템플릿 리터럴을 사용해서 parameter의 변수값을 ${username}을 통해 삽입
    = (username) => apiClient.get(`/users/${username}/todos`);
    //http://localhost:8080/users/yoon/todos

// username, id를 url에서 받아 할일 목록 Http delete Method Api 호출
    export const deleteSpecificTodoApi
        //템플릿 리터럴을 사용해서 parameter의 변수값을 ${username}, ${id}를 사용해 삽입
    = (username, id) => apiClient.delete(`/users/${username}/todos/${id}`)
    //http://localhost:8080/users/yoon/todos/${id}

    // username, id를 url에서 받아 갱신버튼클릭시 특정 Todo  Http get Method Api 호출
    export const getSpecificTodoApi
        //템플릿 리터럴을 사용해서 parameter의 변수값을 ${username}, ${id}를 사용해 삽입
    = (username, id) => apiClient.get(`/users/${username}/todos/${id}`)
    //http://localhost:8080/users/yoon/todos/${id}

    // username, id를 url에서 받고, 화면입력내용를 입력받아 갱신버튼클릭시 특정 Todo  Http PUT Method Api 호출
    export const updateTodoApi
        //템플릿 리터럴을 사용해서 parameter의 변수값을 ${username}, ${id}를 사용해 삽입, 추가로 @RquestBody에 담길 todo 내용도 요청
    = (username, id, todo) => apiClient.put(`/users/${username}/todos/${id}`, todo)
    //http://localhost:8080/users/yoon/todos/${id}

