import { useEffect, useState } from "react"
import { getAllTodosForUsername } from "./api/TodoApiService"

//할일 목록 컴포넌트
function ListTodosComponent(){
    //날짜를 생성
    const today = new Date()

    const targetDate = new Date(today.getFullYear(), today.getMonth(), today.getDay())
    // List<Todo>타입값을 반환하는 api의 호출상태를 나타내는 Hook
    const [todos , setTodos] = useState([])


    // const todos = [
    //                 // {id:1, description:'Learn JavaScript', done:false, targetDate:targetDate},
    //                 // {id:2, description:'Learn SpringClould', done:false, targetDate:targetDate},
    //                 // {id:3, description:'Learn React', done:false, targetDate:targetDate}
    //                 ]

    // useEffect로 Todos목록이 비어있을때[](시작할때 1번)
    // api호출로 가져온 데이터[리스트]로 컴포넌트 상태를 업데이트
    useEffect(
        () => refreshTodos() , []
    )

    function refreshTodos() {
        //URL ${username} 값을 받아 api를 호출
        getAllTodosForUsername('yoon')
        .then(response =>
            //api 호출성공시 해당 데이터를 useState에 적용하는 로직 
            {
                console.log(response.data)
                setTodos(response.data)
            }
        
        )
        .catch(error => console.log(error))
    }



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
                                    {/* <td>{todo.targetDate.toDateString()}</td> */}
                                    {/* api의 문자열 형식으로 변환 */}
                                    <td>{todo.targetDate.toString()}</td>
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

export default ListTodosComponent