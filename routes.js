const mongoose=require('mongoose');
const router=require('express').Router();
const Courses=require('../CourseApp/model/Courses');

router.post('/courses',async(req,res)=>{
        const courseExist=await Courses.findOne({title:req.body.title});
        if(courseExist){
            res.send("Course already Exists");
            return;
        }
       const course=new Courses({
        title:req.body.title,
        description:req.body.description
       });

       try{
        const saveData=await course.save();
        res.sendAll("Course Added Successfully");
       }catch(err){
        res.status(400).send(err);
       }
});

router.get('/courses',async(req,res)=>{
    const courses=await Courses.find({});
    res.send(courses);
});

router.get('/courses/:_id',async(req,res)=>{
                 const courses=await Courses.findOne({_id:req.params._id});
                 console.log(courses);
               res.send(courses);
});
router.put('/courses/:_id',async(req,res)=>{
    const courses=await Courses.findByIdAndUpdate(req.params._id,{
        title:req.body.title,
        description:req.body.description
    });
     
});

router.delete('/courses/:_id',async(req,res)=>{
  const product=  await Courses.findByIdAndDelete(req.params._id);
    res.send("Delete Success");
})

module.exports=router;