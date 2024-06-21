//Link -클릭 시 다른 주소로 이동하지만, 페이지를 새로 불러오지 않고 라우팅을 할 수 있는 컴포넌트
//현재 경로의 매개변수를 반환하는 훅
import {Link,useParams } from 'react-router-dom'
import axios from 'axios'


function WelcomeComponent(){

    const {username} = useParams()

    //axios를 사용해서 restapi를 호출하는 함수
    function callHelloWorldRestApi() {
        console.log('called')
        //HTTP GET Request
        axios.get('http://localhost:8080/hello-world')
             .then( (response) => successfulResponse(response) )
             .catch( (error) => errorResponse(error) )
             .finally( () => console.log('clean up') )
    }

    function successfulResponse(response) {
        console.log(response)
    }

    function errorResponse(error) {
        console.log(error)
    }


    return(
        <div  className="Welcome">
            <h1>Welcome to {username}'s Page!</h1>
            <div>
                {/* 전체페이지 새로고침을 하지않고 WelcomeComponent만 ListTodosComponent 로 새로고침하기위해 Link를 사용  */}
                Manage you Todos - <Link to='/todos'>Go here</Link>
            </div>
            <div>
                {/* RestApi를 불러올 버튼  */}
                <button className='btn btn-success m-5' onClick={callHelloWorldRestApi}>
                    Call Hello World
                </button>
            </div>
        </div>
    )
}

export default WelcomeComponent