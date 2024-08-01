const express = require('express');
const router = express.Router();

const jobController = require('../controllers/jobController');


router.route('/')
  .get(jobController.getAllJobs)
  .post(jobController.addJob);


router.route('/:id')
  .get(jobController.getJob)
  .delete(jobController.deleteJob)
  .patch(jobController.updateJob)


module.exports = router;