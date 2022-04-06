const mongoose = require("mongoose")
const UserSchema = require("../models/User")
const User = mongoose.model("User",UserSchema);

class UserService{
    async setUser(user){

        if(user["_id"]!=undefined){
            return await User.updateOne({"_id":user["_id"]},{$set:user})
        }else{
            const obj = new User(user);
            obj.setPassword(user.password)
            const result = await obj.save();
            result["salt"] = ""
            result["hash"] = ""
            return result
        }
    }
    async getUser(){
        return await User.find({isDel: false}).select(["-salt","-hash"])
    }
    async removeUser(_id){
        return await User.updateOne({"_id": _id},{$set:{isDel:true}})
    }

    
    async loginUser(loginObject){
        console.log(loginObject)
        let FoundUser = await User.findOne({email: loginObject.email})
        if(FoundUser){
            console.log("User Found...")
            const user = FoundUser;
                
            if(user.validatePassword(loginObject.password)){
                user.hash = "";
                user.salt = "";
                const obj = user.toObject();
                obj.token = user.generateToken();
                return obj;
            }else{
                console.log("password invalid")
                return {"error":"password invalid"};
            }
        }else{
            console.log("email not found")
            return {"error":"email not found"}
        }

    }
}

module.exports = UserService;