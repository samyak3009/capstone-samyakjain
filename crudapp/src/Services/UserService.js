import axios from "axios"
const USER_BASE_URL = 'http://localhost:8000/users'


const header = {
    "Content-Type" : 'application/json',
    Authorization : 'Token '+localStorage.getItem("token")
}

class UserService{
    loginUser(crendentials){
        return axios.post(USER_BASE_URL+"/login",crendentials)
        // fetch("url",{
        //     method:'POST',
        //     header:{
        //         "Content-Type" : 'application/json',
        //         Authorization : 'Token '
        //     }
        // })
    }
    getUser(){
        return axios.get(USER_BASE_URL,{headers:header})
    }
    postUser(users){
        return axios.post(USER_BASE_URL,users,{headers:header})
    }

    deleteUser(id){
        console.log(id,"samayk")
        return axios.delete(USER_BASE_URL+"/"+id,{headers:header})
    }
}

export default new UserService();

