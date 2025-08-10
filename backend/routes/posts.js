const express = require('express');

const Posts = require('../models/posts');
const e = require('express');

//give us express router function to request
//Router means interface.it has http request

const router = express.Router();


//save posts

router.post('/post/save',async (req,res)=>{
     let newPost =new Posts(req.body);   //newPost is object  //req.body is object //post is model //save is method

     try{
        await newPost.save();
        res.status(200).json({success:'Post saved successfully'});
     }catch(err){
        res.status(400).json({error:err});
     }

});

//get post

router.get('/posts',async (req,res)=>{
   try{
      let posts = await Posts.find().exec();
      res.json(posts);
   }catch(err){
      res.status(400).json({error:err});
   }
}
);




// Update post
router.put('/post/update/:id', async (req, res) => {
   try {
     await Posts.findByIdAndUpdate(req.params.id, { $set: req.body });
     return res.status(200).json({
       success: "Updated Successfully"
     });
   } catch (err) {
     return res.status(400).json({ error: err.message });
   }
 });
 
 // Delete post
 router.delete('/post/delete/:id', async (req, res) => {
   try {
     const deletePost = await Posts.findByIdAndDelete(req.params.id);
     if (!deletePost) {
       return res.status(404).json({ message: "Post not found" });
     }
     return res.json({
       message: "Delete Successful",
       deletePost
     });
   } catch (err) {
     return res.status(400).json({
       message: "Delete Unsuccessful",
       error: err.message
     });
   }
 });
 
module.exports=router;