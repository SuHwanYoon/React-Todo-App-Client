import { useParams } from "react-router-dom"
import { getSpecificTodoApi } from "./api/TodoApiService"
import { useAuth } from "./security/AuthContext"
import { useEffect, useState } from "react"

export default function TodoComponent() {
    //parameter값 - id 를 사용하기 위해 useParams Hook사용
    const {id} = useParams()
    //인증 컨텍스트 가져오기
    const authContext = useAuth()
    //인증 컨텍스트에서 인증된 username가져오기
    const username = authContext.username
    //
    const [description,setDescription] = useState('')

    //TodoComponet가 라우팅 될때마다 getSpecificTodo()를 실행
    //의존성배열에 포함된 [id]값이 변경될때도 getSpecificTodo()를 또다시 호출
    useEffect(
        () => {
            //getSpecificTodo 만 하면 함수반환이 되버린다
            // 함수호출을 하려면 ()가 필요
            getSpecificTodo()
        }, [id]
    )

    //특정 Todo 호출 api 함수
    function getSpecificTodo() {
        getSpecificTodoApi(username,id)
        .then(response => {
            // 호출성공시 description값을 가져와서 set해준다
            setDescription(response.data.description)
        }
    )
        .catch(error => console.log(error))
    }
    return (


        //bootstrap container
        <div className="container">
            <h1>Enter Todo Details</h1>
            <div>
                description: {description}
            </div>
        </div>
    )
}