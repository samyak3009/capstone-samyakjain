import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import UserService from "../../Services/UserService";

const AddUser = ()=>{
    const {fullname,useremail,userpassword,userphone,usergender} = useSelector((state)=>state)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const submitHandler = (e)=>{
        e.preventDefault();
        const userData = {
            "fullname":fullname,
            "email":useremail,
            "gender":usergender,
            "phone":userphone,
            "password": userpassword
        }
        UserService.postUser(userData).then((res)=>{
            console.log(res)
            if(res.status == 200){
                navigate("/list")
            }
        })
    }   
    return (
        <div className="container m-2">

            <h3>Create new User</h3>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="fullname">Fullname</label>
                    <input typr="text" name="fullname" id="fullname" className="form-control"
                    value={fullname}
                    onChange={(e)=>dispatch({type:"fullname",value: e.target.value})}
                    placeholder="Enter Fullname"/>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input typr="email" name="email" id="email" className="form-control"
                    value={useremail}
                    onChange={(e)=>dispatch({type:"useremail",value: e.target.value})} 
                    placeholder="Enter Email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" className="form-control"
                    
                    value={userpassword}
                    onChange={(e)=>dispatch({type:"userpassword",value: e.target.value})}
                     placeholder="Enter Password"/>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone no.</label>
                    <input typr="text" name="phone" id="phone" className="form-control" 
                    
                    value={userphone}
                    onChange={(e)=>dispatch({type:"userphone",value: e.target.value})}
                    placeholder="Enter Phone no."/>
                </div>
                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input type="radio" name="gender" id="gender" className="form-check-input" value="Male"    
                        checked={usergender==="Male"}
                        onChange={(e)=>dispatch({type:"usergender",value: e.target.value})}/>
                        <label htmlFor="gender" className="form-check-lable">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input type="radio" name="gender" id="gender" className="form-check-input" value="Female"
                        checked={usergender==="Female"}
                        onChange={(e)=>dispatch({type:"usergender",value: e.target.value})}/>
                        <label htmlFor="gender" className="form-check-lable">Female</label>
                    </div><div className="form-check form-check-inline">
                        <input type="radio" name="gender" id="gender" className="form-check-input" value="Other"
                        checked={usergender==="Other"}
                        onChange={(e)=>dispatch({type:"usergender",value: e.target.value})}/>
                        <label htmlFor="gender" className="form-check-lable">Other</label>
                    </div>
                </div>
                <div className="form-group">
                    <input type="submit" value="Add User" className="btn btn-primary"/>
                </div>

            </form>
        </div>
    )
}

export default AddUser;