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

export default ListTodosComponent