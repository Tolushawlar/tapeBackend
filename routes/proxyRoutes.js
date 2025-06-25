const express = require('express');
const router = express.Router();
const { newsletterSubscriber, signup, login, createJob, getJobs, getJobById, createJobApplication, getJobApplications, getMe, getUsers, getJobApplicationById, updateJobApplication, deleteJobApplication, createUser, updateUser, updateJob, deleteJob, deleteUser, createCallSchedule, getCallScheduleById, updateCallSchedule, deleteCallSchedule, getAllCallSchedules, createContactSubmission, getContactSubmissionById, updateContactSubmission, deleteContactSubmission, getAllContactSubmissions } = require('../proxy/xanoProxy');

// Xano API proxy routes
router.post('/newsletter_subscriber', newsletterSubscriber);
router.post('/auth/signup', signup);
router.post('/auth/login', login);
router.get('/auth/me', getMe);

// Job posting routes
router.post('/job_posting', createJob);
router.get('/job_posting', getJobs);
router.get('/job_posting/:id', getJobById);
router.patch('/job_posting/:id', updateJob);
router.put('/job_posting/:id', updateJob);
router.delete('/job_posting/:id', deleteJob);

// Job application routes
router.post('/job_application', createJobApplication);
router.get('/job_application', getJobApplications);
router.get('/job_application/:id', getJobApplicationById);
router.patch('/job_application/:id', updateJobApplication);
router.delete('/job_application/:id', deleteJobApplication);

// User routes
router.post('/user', createUser);
router.get('/users', getUsers);
router.patch('/UpdateUser', updateUser);
router.put('/UpdateUser', updateUser);
router.delete('/deleteUser', deleteUser);

// Call Schedule routes
router.post('/call_schedule', createCallSchedule);
router.get('/call_schedule', getAllCallSchedules);
router.get('/call_schedule/:id', getCallScheduleById);
router.patch('/call_schedule/:id', updateCallSchedule);
router.delete('/call_schedule/:id', deleteCallSchedule);

// Contact Submission routes
router.post('/contact_submission', createContactSubmission);
router.get('/contact_submission', getAllContactSubmissions);
router.get('/contact_submission/:id', getContactSubmissionById);
router.patch('/contact_submission/:id', updateContactSubmission);
router.delete('/contact_submission/:id', deleteContactSubmission);

module.exports = router;