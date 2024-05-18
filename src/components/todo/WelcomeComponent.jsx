//Link -클릭 시 다른 주소로 이동하지만, 페이지를 새로 불러오지 않고 라우팅을 할 수 있는 컴포넌트
//현재 경로의 매개변수를 반환하는 훅
import {Link,useParams } from 'react-router-dom'


function WelcomeComponent(){

    const {username} = useParams()

    console.log(username)

    return(
        <div  className="Welcome">
            <h1>Welcome to {username}'s Page!</h1>
            <div>
                {/* 전체페이지 새로고침을 하지않고 WelcomeComponent만 ListTodosComponent 로 새로고침하기위해 Link를 사용  */}
                Manage you Todos - <Link to='/todos'>Go here</Link>
            </div>
        </div>
    )
}

export default WelcomeComponent