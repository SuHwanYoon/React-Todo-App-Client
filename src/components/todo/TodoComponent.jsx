import { useParams } from "react-router-dom"
import { getSpecificTodoApi } from "./api/TodoApiService"
import { useAuth } from "./security/AuthContext"
import { useEffect, useState } from "react"
import { ErrorMessage, Field, Form, Formik } from "formik"

export default function TodoComponent() {
    //parameter값 - id 를 사용하기 위해 useParams Hook사용
    const {id} = useParams()
    //인증 컨텍스트 가져오기
    const authContext = useAuth()
    //인증 컨텍스트에서 인증된 username가져오기
    const username = authContext.username
    //할일 내용 설정하기
    const [description,setDescription] = useState('')
    //날짜 설정하기
    const [targetDate,setTargetDate] = useState('')

    //TodoComponet가 라우팅 될때마다 getSpecificTodo()를 실행
    //의존성배열에 포함된 [id]값이 변경될때도 getSpecificTodo()를 또다시 호출
    useEffect(
        () => {
            //getSpecificTodo 만 하면 함수반환이 되버린다
            // 함수호출을 하려면 ()가 필요
            getSpecificTodo()
        }, [id]
    )

    //특정 Todo 호출 api 함수 (update 버튼 클릭시)
    function getSpecificTodo() {
        getSpecificTodoApi(username,id)
        .then(response => {
            console.log(response)
            // 호출성공시 api의 description값을 가져와서 set해준다
            setDescription(response.data.description)
            // 호출성공시 api의 targetDate값을 가져와서 set해준다
            setTargetDate(response.data.targetDate)
        }
    )
        .catch(error => console.log(error))
    }

    function onSubmit(values) {
        console.log(values)
    }
    //formik 유효성 검사 함수
    function validate(values) {
        //반환할 에러 객체
        let errors =  {
            // description: "Enter a vaild description" ,
            // targetDate: "Enter a valid targetDate"
        }
        if (values.description.length < 5) {
            errors.description = 'Enter at least 5 characters'
        }
        if (values.targetDate === null) {
            errors.targetDate = 'Enter a targetDate'
        }
        console.log(values)
        return errors
    }

    return (


        //bootstrap container
        <div className="container">
            <h1>Enter Todo Details</h1>
            <div>
                {/* api에서 가져온 값을 폼의 입력 초기값으로 설정 name="" 에 매핑 */}
                {/* initialValues가 변경될 때마다 폼의 입력값이 새로운 값으로 다시 초기화*/}
                {/* Save 버튼으로 제출시 onSubmit 메서드 실행 */}
                {/* 내부적으로 필드값이 submit 되기전에 유효성검사를 실행 */}
                {/* 폼 필드 입력이 변할때마다 유효성검사하는것을 비활성화 */}
                {/* 폼 필드에 포커스가 벗어났을때 유효성검사하는것을 비활성화 */}
                <Formik initialValues={ {description, targetDate} }
                 enableReinitialize={true}
                 onSubmit={onSubmit}
                 validate={validate}
                 validateOnChange = {false}
                 validateOnBlur = {false}
                 >
                {/* JSX 리턴함수 설정 */}
                    {
                        (props) => (
                            <Form>
                                {/* description 에러메세지 표시 */}
                                <ErrorMessage 
                                    name="description"
                                    // 에러메세지를 div로서 표시
                                    component="div"
                                    className="alert alert-warning"
                                />
                                {/* targetDate 에러메세지 표시 */}
                                <ErrorMessage 
                                    name="targetDate"
                                    // 에러메세지를 div로서 표시
                                    component="div"
                                    className="alert alert-warning"
                                />
                                {/* bootstrap form-group , form-control */}
                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field type="text" className="form-control" name="description"/>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Target Date</label>
                                    <Field type="date" className="form-control" name="targetDate"/>
                                </fieldset>
                                <div>
                                    {/* formik를 사용해서 input태그에 onChange를 쓰지않아도 자동으로 변화된 입력데이터를 제출 */}
                                    <button className="btn btn-success m-5" type="submit">Save</button>
                                </div>
                            </Form>
                        )
                    }

                </Formik>
            </div>
        </div>
    )
}