import { useState } from 'react'
import './TodoApp.css'

export default function TodoApp(){
    return(
        <div className="TodoApp">
            <LoginComponent/>
            {/* <WelcomeComponent/> */}
        </div>
    )
}


function LoginComponent(){
    //useState Hook의 초기값은 비어있음 상태를 변화시킬 메서드는 setUserName
    const [username, setUserName] = useState('')
    //useState Hook의 초기값은 비어있음 상태를 변화시킬 메서드는 setPassword
    const [password, setPassword] = useState('')

    function handleUserNameChange(event){
        console.log(event.target.value);
        //username input에 값을 입력할때마다 상태를 변화시키는 setUserName메서드를 호출한다
        setUserName(event.target.value);
    }

    function handlePasswordChange(event){
        console.log(event.target.value);
        //password input에 값을 입력할때마다 상태를 변화시키는 setPassword메서드를 호출한다
        setPassword(event.target.value);
    }



    return(
        <div className="Login">
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
                    <button type="button" name="login">Login</button>
                </div>
            </div>
        </div>
    )
}


function WelcomeComponent(){
    return(
        <div className="Welcome">
            Welcome Component
        </div>
    )
}