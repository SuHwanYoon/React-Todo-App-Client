import './TodoApp.css'
import LogoutComponent from './LogoutComponent'
import HeaderComponent from './HeaderComponent'
import ListTodosComponent from './ListTodosComponent'
import ErrorComponent from './ErrorComponent'
import WelcomeComponent from './WelcomeComponent'
import LoginComponent from './LoginComponent'
//react-router-dom 라이브러리를 추가하고 import
//BrowserRouter: HTML5의 history API를 사용하여 UI를 URL과 동기화하는 라우터 컴포넌트.
//Route: 특정 경로에 매칭되는 컴포넌트를 렌더링하는 역할.
//Switch: 여러 Route 중에서 매칭된 첫 번째 Route만 렌더링하게 하는 컴포넌트. (React Router v5 이하)
//Routes: 여러 Route를 자식으로 가지고, 매칭된 Route를 렌더링하는 컴포넌트. (React Router v6 이상)
import { BrowserRouter, Route, Routes} from 'react-router-dom'

export default function TodoApp(){
    return(
        <div className="TodoApp">
            <BrowserRouter>
                {/* 어느화면에서도 보이는 헤더 컴포넌트 */}
                {/* 헤더컴포넌트의 Link태그를 사용하려면 컴포넌트가 라우터에 포함되어있어야한다    */}
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
        </div>
    )
}















