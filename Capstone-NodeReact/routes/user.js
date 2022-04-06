const express = require("express")
const router = express.Router();
const UserService = require("../services/UserService")
const auth = require("./auth")

router.get("/",auth.required,async (req,res)=>{
    const userService = new UserService();
    const result = await userService.getUser();
    res.send(result)
})
router.post("/", async(req,res)=>{
    const userService = new UserService();
    const result = await userService.setUser(req.body)
    res.send(result)
})
router.post("/login", async(req,res)=>{
    const userService = new UserService();
    const result = await userService.loginUser({'email': req.body.email,'password' : req.body.password})
    res.send(result)
})
router.delete("/:id",async(req,res)=>{
    console.log(req.params.id)
    const userService = new UserService()
    const result = await userService.removeUser(req.params.id)
    res.send(result)
})



module.exports = router