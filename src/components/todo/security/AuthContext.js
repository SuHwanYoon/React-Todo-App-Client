import { createContext, useContext, useState } from "react";

//다른 컴포넌트에 인증상태를 공유할 컨텍스트 생성
export const AuthContext = createContext();


//어느 컴포넌트에서든 AuthContext를 사용할수있는 useContext Hook 
export const useAuth = () => useContext(AuthContext);

//생성한 컨텍스트를 다른 컴포넌트에 공유하는 함수
//TodoApp.jsx의  <AuthProvider> 아래 모든 자식 컴포넌트를 children변수에 할당
export default function AuthProvider({ children }) {


  //상태값 test를 위한 useState hook
  //const [number, setNumber] = useState(10);
    
  //인증상태를 위한 useState hook  초기값은 false
  const [isAuthenticated, setAuthenticated] = useState(false);
  //화면 입력 username 확인을 위한 useState hook  초기값은 null
  const [username, setUsername] = useState(null);
  

  //로그인 인증 관련 함수
  function login(username, password) {
    if (username === 'yoon' && password === 'dummy') {
        //로그인 성공시 setAuthenticated 메서드에 true값 설정
        setAuthenticated(true)
        //로그인 성공시 화면에서 받은 username 값 설정
        setUsername(username)
        return true
    }else{
        //로그인 실패시 setAuthenticated메서드에 false값 설정
        setAuthenticated(false)
        //로그인 실패시 null값 설정
        setUsername(null)
        return false
    }
  }
  //로그아웃 함수
    function logout() {
        setAuthenticated(false)
    }

  //10초마다 함수실행
  //setInterval(()=> setNumber(number+1), 10000)

  //자식들에게 컨텍스트값(로그인여부-boolean, username)를 제공하는 JSX를 리턴
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, username }}>
        {children}
    </AuthContext.Provider>
  );
}
