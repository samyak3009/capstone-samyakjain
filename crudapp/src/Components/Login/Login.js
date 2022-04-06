import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import UserService from "../../Services/UserService";
const Login = () =>{
    const disptach = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        const localData = localStorage.getItem("tokrn");
        if(localData){
            navigate("/list")
        }
    },[])
    const {email,password,islogged} =useSelector((state)=>state)
    const emailchangeHandler = (event)=>{
        disptach({type:"email",value:event.target.value})
    }
    const passwordchangeHandler = (event)=>{
        disptach({type:"password",value:event.target.value})
    }
    const loginHandler = (event)=>{
        event.preventDefault()
        
        UserService.loginUser({"email":email,"password":password}).then((res)=>{
            if(res.data.error == undefined){
                console.log("in")
                localStorage.setItem("token",res.data.token)
                disptach({type:"logged",value:true})
                navigate("/list");
            }else{
                console.log("out")
                disptach({type:"logged",value:false})
            }

        })
    }
    return (
        <div className="container mt-3">
            {islogged === false?(
                <div className="alert alert-danger">
                    <strong>Error:</strong> Login crendentials Faild
                </div>
            ): ('')}
            <form onSubmit={loginHandler}>
                <div className="mb-3 mt-3">
                    <label htmlFor="email">Email</label>
                    <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter Email"
                    onChange={emailchangeHandler}
                    />

                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="password">Password</label>
                    <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter Password"
                    onChange={passwordchangeHandler}
                    />

                </div>
                <button type="submit" className="btn btn-primary">Login</button>

            </form>
        </div>
    )
}
export default Login