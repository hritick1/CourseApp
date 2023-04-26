const router=require('express').Router();
const CourseController=require('./controller/CourseController');

router.route('/courses')
          .post(CourseController.addCourse)
          .get(CourseController.getAllCourses);

router.route('/courses/:_id')
             .get(CourseController.getCourse)
             .put(CourseController.updateCourse)
             .delete(CourseController.deleteCourse);

module.exports=router;