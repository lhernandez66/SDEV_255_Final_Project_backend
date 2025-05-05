const express = require('express');
const router = express.Router();
const Course = require('./courseModel');

// Get all courses
router.get('/', async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

// Add a new course
router.post('/', async (req, res) => {
  const newCourse = new Course(req.body);
  await newCourse.save();
  res.status(201).json(newCourse);
});

// DELETE route for deleting a course
router.delete('/:id', async (req, res) => {
    try {
      const deletedCourse = await Course.findByIdAndDelete(req.params.id);
      if (!deletedCourse) {
        return res.status(404).json({ message: 'Course not found' });
      }
      res.status(204).send(); 
    } catch (error) {
      res.status(500).json({ message: 'Error deleting course' });
    }
  });
  
module.exports = router;