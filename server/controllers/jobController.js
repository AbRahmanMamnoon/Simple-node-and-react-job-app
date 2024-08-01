const Job = require('../models/jobModel');



exports.getAllJobs = async (req, res) => {
  const {limit} = req.query;
  const jobs = await Job.find({active: true}).limit(limit)

  res.status(200).json( jobs )
}


exports.getJob = async (req, res) => {
  const { id } = req.params;

  const job = await Job.findOne({_id: id, active: true});

  res.status(200).json(job)
}

exports.addJob = async (req, res) => {
  const { title, type, location, description, salary, company } = req.body;

  const newJob = await Job.create({
    title,
    type,
    location,
    description,
    salary,
    company: {
      name: company.name,
      contactEmail: company.contactEmail,
      contactPhone: company.contactPhone
    }
  });

  res.status(201).json({
    'status': 'success',
  });
}


exports.deleteJob = async (req, res) => {
  const { id } = req.params;

  await Job.findByIdAndUpdate(id, {active: false});

  res.status(204).json({
    status: 'success',
    data: null
  })
}

exports.updateJob = async (req, res) => {
  const { id } = req.params;

  const updatedJob = await Job.findByIdAndUpdate({_id: id}, req.body, {
    runValidators: true,
    new: true
  });

  res.status(200).json({
    status: 'success',
    data: {
      updatedJob
    }
  })
}