const Courses=require('../model/Courses');


const addCourse=async(req,res)=>{
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
    res.send("Course Added Successfully");
   }catch(err){
    res.status(400).send(err);
   }
}


const getAllCourses=async(req,res)=>{
    // console.log(req.cookies.myCookie);
    const courses=await Courses.find({});
    res.send(courses);
};


const getCourse=async(req,res)=>{
    const courses=await Courses.findOne({_id:req.params._id});
    console.log(courses);
  res.send(courses);
};


const updateCourse=async(req,res)=>{
    const courses=await Courses.findByIdAndUpdate(req.params._id,{
        title:req.body.title,
        description:req.body.description
    });
     
};


const deleteCourse=async(req,res)=>{
    const product=  await Courses.findByIdAndDelete(req.params._id);
      res.send("Delete Success");
  };

module.exports={addCourse,getAllCourses,getCourse,updateCourse,deleteCourse};