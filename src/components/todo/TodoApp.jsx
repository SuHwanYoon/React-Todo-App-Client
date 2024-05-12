import { useState } from 'react'
import './TodoApp.css'
//react-router-dom 라이브러리를 추가하고 import
import { BrowserRouter, Link, Route, Routes, useNavigate, useParams } from 'react-router-dom'

export default function TodoApp(){
    return(
        <div className="TodoApp">
            <BrowserRouter>
                {/* 어느화면에서도 보이는 헤더 컴포넌트 */}
                <HeaderComponent/>

                <Routes>
                    <Route >
                        {/* url path에 따라 보여줄 컴포넌트를 설정 js표현식을 사용할때는 ''를 사용하면 안된다*/}
                        <Route path='/' element={ <LoginComponent /> }/>
                        <Route path='/login' element={ <LoginComponent /> }/>
                        {/* welcome/ Url뒤에 입력되는 username값을 WelcomeComponent에 인자값으로 넘겨준다   */}
                        <Route path='/welcome/:username' element={ <WelcomeComponent/> }/>
                        {/* 지정한 url이 /todos일시 ListTodosComponent를 보여준다 */}
                        <Route path='/todos' element={<ListTodosComponent/>}/>
                        {/* 지정한 url이 /logout일시 LogoutComponent를 보여준다 */}
                        <Route path='/logout' element={<LogoutComponent/>}/>

                        {/* 지정한 url이외의 url일시에 error페이지를 보여준다 */}
                        <Route path='*' element={<ErrorComponent/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
            {/* 어느화면에서도 보이는 푸터 컴포넌트 */}
            <FooterComponent/>
        </div>
    )
}


function LoginComponent(){
    //useState Hook의 초기값은 비어있음 상태를 변화시킬 메서드는 setUserName
    const [username, setUserName] = useState('')
    //useState Hook의 초기값은 비어있음 상태를 변화시킬 메서드는 setPassword
    const [password, setPassword] = useState('')
    
    //로그인 성공상태를 나타낼 useState메서드 초기값은 false
    const [showSuccessMessage, setSuccessMessage] = useState(false)
    //로그인 실패상태를 나타낼 useState메서드 초기값은 false
    const [showErrorMessage, setErrorMessage] = useState(false)
    //페이지 리다렉트를 위해서 useNavicate 사용
    const navigate = useNavigate();

    function handleUserNameChange(event){
        // console.log(event.target.value);
        //username input에 값을 입력할때마다 상태를 변화시키는 setUserName메서드를 호출한다
        setUserName(event.target.value);
    }

    function handlePasswordChange(event){
        // console.log(event.target.value);
        //password input에 값을 입력할때마다 상태를 변화시키는 setPassword메서드를 호출한다
        setPassword(event.target.value);
    }

    function hanleSubmit() {
        if (username === 'yoon' && password === 'dummy') {
            console.log('success')
            // 로그인성공시 성공상태 메세지 설정 메서드를 true값으로 호출
            setSuccessMessage(true)
            // 로그인성공시 실패상태 메세지 설정 메서드를 false값으로 호출
            setErrorMessage(false)
            // 로그인 성공시 입력한 username 경로의 welcomeComponet로 리다이렉트
            // 문자열 내부에 변수나 표현식을 넣고 싶으면 ``백틱을 사용
            navigate(`/welcome/${username}`)
        }else{
            // 로그인실패시 성공상태 메세지 설정 메서드를 false값으로 호출
            setSuccessMessage(false)
            // 로그인실패시 실패상태 메세지 설정 메서드를 true값으로 호출
            setErrorMessage(true)
            console.log('failed')
        }
    }
    // //로그인 성공 컴포넌트
    // function SuccessMessageComponent() {
    //     // 로그인 성공상태 변수가 true라면
    //     if (showSuccessMessage) {
    //         //로그인 성공메세지를 반환
    //         return <div className='successMessage'>Login Success!</div>
    //     }
    //     // 로그인 성공상태 변수가 false라면
    //     // null을 반환
    //     return null
    // }

    // //로그인 실패 컴포넌트
    // function ErrorMessageComponent() {
    //     // 로그인 실패상태 변수가 true라면
    //     if (showErrorMessage) {
    //         //로그인 실패메세지를 반환
    //         return  <div className='errorMessage'>Login Failed....  Please Check Your ID&Password</div>
    //     }
    //     // 로그인 실패상태 변수가 false라면
    //     // null을 반환
    //     return null
    // }
    
    //Login component의 return - login form 제출
    return(
        <div className="Login">
            {/* 만든 로그인 성공 컴포넌트를 사용
            <SuccessMessageComponent/>
            {/* 만든 로그인 실패 컴포넌트를 사용 */}
            {/* <ErrorMessageComponent/> */}

            {/* 컴포넌트로 사용하기에는 작아서 메서드를 이용해서 메세지를 출력  */}

            <h1>Login Page</h1>
            {/* 로그인 성공상태 변수가 true라면 로그인 성공메세지를 반환 */}
            {showSuccessMessage && <div className='successMessage'>Login Success!</div>}
            {/* 로그인 실패상태 변수가 true라면 로그인 실패메세지를 반환 */}
            {showErrorMessage && <div className='errorMessage'>Login Failed....  Please Check Your ID&Password</div>}

            <div className="LoginForm">
                <div>
                    <label>User Name: </label>
                    <input type="text" name="username" value={username} onChange={handleUserNameChange}/>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    {/*onClick속성으로 버튼을 눌렸을때의 이벤트를 제어 */}
                    <button type="button" name="login" onClick={hanleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}


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

//404에러시 보여줄 컴포넌트
function ErrorComponent(){
    return(
        <div className="ErrorComponent">
            <h1>Sorry! Page not found</h1>
        </div>
    )
}

//할일 목록 컴포넌트
function ListTodosComponent(){
    //날짜를 생성
    const today = new Date()

    const targetDate = new Date(today.getFullYear(), today.getMonth(), today.getDay())



    const todos = [
                    {id:1, description:'Learn JavaScript', done:false, targetDate:targetDate},
                    {id:2, description:'Learn SpringClould', done:false, targetDate:targetDate},
                    {id:3, description:'Learn React', done:false, targetDate:targetDate}
                    ]

    return(
        // 부트스트랩 사용
        <div className="container">
            <h1>Todo List</h1>
            <div>
             {/* 부트스트랩 사용 */}
                <table className='table'>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Description</td>
                            <td>Is Done?</td>
                            <td>Target Date</td>
                        </tr>
                    </thead>
                    <tbody>
                    {/* 동적 배열 요소를 각각 나타내기 {}사용 */}
                    {
                        // todos 배열 요소를 각각 매핑해서 배열로 반환하기
                        todos.map(
                            // todos배열의 요소를 임의의 이름 todo로 정하고 화살표함수를 사용해 map 메소드를 테이블에 적용 
                            todo => (
                                // 각 행의 유니크한 키로 배열의 id를 사용
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    {/* 리액트 컴포넌트에 객체를 직접 사용할수없기 때문에 문자열로 변환 */}
                                    <td>{todo.done.toString()}</td>
                                    {/* 리액트 컴포넌트에 객체를 직접 사용할수없기 때문에 문자열로 변환 */}
                                    <td>{todo.targetDate.toDateString()}</td>
                                </tr>    
                            )
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

//어떤화면에서도 보이는 헤더 컴포넌트
function HeaderComponent(){
    return(
        <div className="hader">
            Header<hr/>
        </div>
    )
}


//어떤화면에서도 보이는 푸터 컴포넌트
function FooterComponent(){
    return(
        <div className="footer">
            <hr/>Footer
        </div>
    )
}

//로그아웃 컴포넌트
function LogoutComponent(){
    return(
        <div className="LogoutComponent">
            <h1>Logout Success!</h1>
        </div>
    )
}