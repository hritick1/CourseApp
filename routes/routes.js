const router=require('express').Router();
const CourseController=require('../controller/CourseController');
const verifyToken=require('../middleware/verifyToken');

router.route('/courses')
          .post(verifyToken,CourseController.addCourse)
          .get(verifyToken,CourseController.getAllCourses);

router.route('/courses/:_id')
             .get(CourseController.getCourse)
             .put(CourseController.updateCourse)
             .delete(CourseController.deleteCourse);

module.exports=router;