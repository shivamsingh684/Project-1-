const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const AuthorController =require("../controllers/authorController")
const BlogController= require("../controllers/blogController")
const authorValid=require("../validation/validation")
const auth=require("../authentication/authentication")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})




router.post("/authors",authorValid.authorVlidation,AuthorController.createAuthor)

router.post("/login",AuthorController.authorLogin)

router.post("/blogs",auth.authentication,BlogController.createblog)

router.get("/getblogs",auth.authentication,BlogController.getBlog)

router.put("/blogs/:blogId",authorValid.updateValidation,auth.authentication,auth.authorization,BlogController.updateBlog) 

router.delete("/deleteBlogs/:blogId",authorValid.updateValidation,auth.authentication,auth.authorization,BlogController.deletedBlog)

router.delete("/blogs",authorValid.delByQeury,auth.authentication,BlogController.deleteByQuery)


 
router.get("/delete",authorValid.delByQeury)



module.exports = router;