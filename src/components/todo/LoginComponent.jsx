//함수 컴포넌트 내에서 상태 관리를 가능하게 해주는 hook
import { useState } from 'react'
//useNavigate: 탐색(navigation)을 위한 함수를 반환하는 훅입니다. (v6 이상)
import { useNavigate} from 'react-router-dom'
import { useAuth } from './security/AuthContext'


function LoginComponent(){
    //useState Hook의 초기값은 비어있음 상태를 변화시킬 메서드는 setUserName
    const [username, setUserName] = useState('')
    //useState Hook의 초기값은 비어있음 상태를 변화시킬 메서드는 setPassword
    const [password, setPassword] = useState('')
    
    //로그인 실패상태를 나타낼 useState메서드 초기값은 false
    const [showErrorMessage, setErrorMessage] = useState(false)
    //페이지 리다렉트를 위해서 useNavicate 사용
    const navigate = useNavigate();
    //만들어둔 useContext Hook 사용
    const authContext = useAuth()

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
    // async로 hanleSubmit가 비동기작업을 시행함을 명시
    async function hanleSubmit() {
        //비동기작업이 완료될때 까지 기다리고 인증 컨텍스트가 true이면
        if (await authContext.login(username,password)) {
            // 문자열 내부에 변수나 표현식을 넣고 싶으면 ``백틱을 사용
            // 로그인인증 성공시 welcomeComponet페이지로 입력한 {username} 값을 담아 리다이렉트
            navigate(`/welcome/${username}`)
        }else{
            // 로그인실패시 실패상태 메세지 설정 메서드를 true값으로 호출
            setErrorMessage(true)
        }
    }
    
    //Login component의 return - login form 제출
    return(
        <div className="Login">
            {/* 만든 로그인 성공 컴포넌트를 사용
            <SuccessMessageComponent/>
            {/* 만든 로그인 실패 컴포넌트를 사용 */}
            {/* <ErrorMessageComponent/> */}

            {/* 컴포넌트로 사용하기에는 작아서 메서드를 이용해서 메세지를 출력  */}
            <h6>AWS FreeTier가 초과될경우 서버중지로 로그인이 실패할수 있습니다.</h6>
            <h6><a href="https://suhwanyoon.github.io/React-Todo-App-Client/">로그인 실패시 대체 페이지(github pages)</a></h6>
            <h1>Test ID: yoon  PW: dummy</h1>
            <br/>
            <h1>JWT 인증 Login Page</h1>
            {/* 로그인 실패상태 변수가 true라면 로그인 실패메세지를 반환 */}
            {showErrorMessage && <div className='errorMessage'>로그인 실패 ID와PW를 확인해주세요</div>}

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

export default LoginComponent