const axios = require('axios');

// Proxy handler for Xano newsletter subscriber endpoint
const newsletterSubscriber = async (req, res) => {
  try {
    const response = await axios.post(
      "https://x8ki-letl-twmt.n7.xano.io/api:0Bs3nDBx/newsletter_subscriber",
      req.body,
      { headers: { "Content-Type": "application/json" } }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Proxy error:", error.response?.data || error.message);
    res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
  }
};

// Proxy handler for Xano signup endpoint
const signup = async (req, res) => {
  try {
    const response = await axios.post(
      "https://x8ki-letl-twmt.n7.xano.io/api:CHZAR35J/auth/signup",
      req.body,
      { headers: { "Content-Type": "application/json" } }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Proxy error:", error.response?.data || error.message);
    res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
  }
};

// Proxy handler for Xano login endpoint
const login = async (req, res) => {
  try {
    const response = await axios.post(
      "https://x8ki-letl-twmt.n7.xano.io/api:CHZAR35J/auth/login",
      req.body,
      { headers: { "Content-Type": "application/json" } }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Proxy error:", error.response?.data || error.message);
    res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
  }
};

// Proxy handler for job posting endpoints
const createJob = async (req, res) => {
  try {
    const response = await axios.post(
      "https://x8ki-letl-twmt.n7.xano.io/api:0Bs3nDBx/job_posting",
      req.body,
      { headers: { "Content-Type": "application/json" } }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Proxy error:", error.response?.data || error.message);
    res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
  }
};

const getJobs = async (req, res) => {
  try {
    const response = await axios.get(
      "https://x8ki-letl-twmt.n7.xano.io/api:0Bs3nDBx/job_posting",
      { headers: { "Content-Type": "application/json" } }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Proxy error:", error.response?.data || error.message);
    res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
  }
};

const getJobById = async (req, res) => {
  try {
    const response = await axios.get(
      `https://x8ki-letl-twmt.n7.xano.io/api:0Bs3nDBx/job_posting/${req.params.id}`,
      { headers: { "Content-Type": "application/json" } }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Proxy error:", error.response?.data || error.message);
    res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
  }
};

const createJobApplication = async (req, res) => {
  try {
    const response = await axios.post(
      "https://x8ki-letl-twmt.n7.xano.io/api:0Bs3nDBx/job_application",
      req.body,
      { headers: { "Content-Type": "application/json" } }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Proxy error:", error.response?.data || error.message);
    res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
  }
};

const getJobApplications = async (req, res) => {
  try {
    const response = await axios.get(
      "https://x8ki-letl-twmt.n7.xano.io/api:0Bs3nDBx/job_application",
      { headers: { "Content-Type": "application/json" } }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Proxy error:", error.response?.data || error.message);
    res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
  }
};

const getMe = async (req, res) => {
  try {
    const response = await axios.get(
      "https://x8ki-letl-twmt.n7.xano.io/api:CHZAR35J/auth/me",
      { headers: { 
        "Content-Type": "application/json",
        "Authorization": req.headers.authorization
      }}
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Proxy error:", error.response?.data || error.message);
    res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
  }
};

const getUsers = async (req, res) => {
  try {
    const response = await axios.get(
      "https://x8ki-letl-twmt.n7.xano.io/api:CHZAR35J/user",
      { headers: { "Content-Type": "application/json" } }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Proxy error:", error.response?.data || error.message);
    res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
  }
};

const getJobApplicationById = async (req, res) => {
  try {
    const response = await axios.get(
      `https://x8ki-letl-twmt.n7.xano.io/api:0Bs3nDBx/job_application/${req.params.id}`,
      { headers: { "Content-Type": "application/json" } }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Proxy error:", error.response?.data || error.message);
    res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
  }
};

const updateJobApplication = async (req, res) => {
  try {
    const response = await axios.patch(
      `https://x8ki-letl-twmt.n7.xano.io/api:0Bs3nDBx/job_application/${req.params.id}`,
      req.body,
      { headers: { "Content-Type": "application/json" } }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Proxy error:", error.response?.data || error.message);
    res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
  }
};

const deleteJobApplication = async (req, res) => {
  try {
    const response = await axios.delete(
      `https://x8ki-letl-twmt.n7.xano.io/api:0Bs3nDBx/job_application/${req.params.id}`,
      { headers: { "Content-Type": "application/json" } }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Proxy error:", error.response?.data || error.message);
    res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
  }
};

const createUser = async (req, res) => {
  try {
    const response = await axios.post(
      "https://x8ki-letl-twmt.n7.xano.io/api:CHZAR35J/user",
      req.body,
      { headers: { "Content-Type": "application/json" } }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Proxy error:", error.response?.data || error.message);
    res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
  }
};

const updateUser = async (req, res) => {
  try {
    const response = await axios.put(
      "https://x8ki-letl-twmt.n7.xano.io/api:CHZAR35J/UpdateUser",
      req.body,
      { headers: { "Content-Type": "application/json" } }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Proxy error:", error.response?.data || error.message);
    res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
  }
};

const updateJob = async (req, res) => {
  try {
    const response = await axios.patch(
      `https://x8ki-letl-twmt.n7.xano.io/api:0Bs3nDBx/job_posting/${req.params.id}`,
      req.body,
      { headers: { "Content-Type": "application/json" } }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Proxy error:", error.response?.data || error.message);
    res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
  }
};

const deleteJob = async (req, res) => {
  try {
    const response = await axios.delete(
      `https://x8ki-letl-twmt.n7.xano.io/api:0Bs3nDBx/job_posting/${req.params.id}`,
      { headers: { "Content-Type": "application/json" } }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Proxy error:", error.response?.data || error.message);
    res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const response = await axios.delete(
      `https://x8ki-letl-twmt.n7.xano.io/api:CHZAR35J/deleteUser`,
      {
        headers: { "Content-Type": "application/json" },
        data: req.body
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Proxy error:", error.response?.data || error.message);
    res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
  }
};

// Call Schedule endpoints
const createCallSchedule = async (req, res) => {
  try {
    const response = await axios.post(
      "https://x8ki-letl-twmt.n7.xano.io/api:0Bs3nDBx/call_schedule",
      req.body,
      { headers: { "Content-Type": "application/json" } }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Proxy error:", error.response?.data || error.message);
    res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
  }
};

const getCallScheduleById = async (req, res) => {
  try {
    const response = await axios.get(
      `https://x8ki-letl-twmt.n7.xano.io/api:0Bs3nDBx/call_schedule/${req.params.id}`,
      { headers: { "Content-Type": "application/json" } }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Proxy error:", error.response?.data || error.message);
    res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
  }
};

const updateCallSchedule = async (req, res) => {
  try {
    const response = await axios.patch(
      `https://x8ki-letl-twmt.n7.xano.io/api:0Bs3nDBx/call_schedule/${req.params.id}`,
      req.body,
      { headers: { "Content-Type": "application/json" } }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Proxy error:", error.response?.data || error.message);
    res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
  }
};

const deleteCallSchedule = async (req, res) => {
  try {
    const response = await axios.delete(
      `https://x8ki-letl-twmt.n7.xano.io/api:0Bs3nDBx/call_schedule/${req.params.id}`,
      { headers: { "Content-Type": "application/json" } }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Proxy error:", error.response?.data || error.message);
    res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
  }
};

const getAllCallSchedules = async (req, res) => {
  try {
    const response = await axios.get(
      "https://x8ki-letl-twmt.n7.xano.io/api:0Bs3nDBx/call_schedule",
      { headers: { "Content-Type": "application/json" } }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Proxy error:", error.response?.data || error.message);
    res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
  }
};

// Contact Submission endpoints
const createContactSubmission = async (req, res) => {
  try {
    const response = await axios.post(
      "https://x8ki-letl-twmt.n7.xano.io/api:0Bs3nDBx/contact_submission",
      req.body,
      { headers: { "Content-Type": "application/json" } }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Proxy error:", error.response?.data || error.message);
    res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
  }
};

const getContactSubmissionById = async (req, res) => {
  try {
    const response = await axios.get(
      `https://x8ki-letl-twmt.n7.xano.io/api:0Bs3nDBx/contact_submission/${req.params.id}`,
      { headers: { "Content-Type": "application/json" } }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Proxy error:", error.response?.data || error.message);
    res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
  }
};

const updateContactSubmission = async (req, res) => {
  try {
    const response = await axios.patch(
      `https://x8ki-letl-twmt.n7.xano.io/api:0Bs3nDBx/contact_submission/${req.params.id}`,
      req.body,
      { headers: { "Content-Type": "application/json" } }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Proxy error:", error.response?.data || error.message);
    res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
  }
};

const deleteContactSubmission = async (req, res) => {
  try {
    const response = await axios.delete(
      `https://x8ki-letl-twmt.n7.xano.io/api:0Bs3nDBx/contact_submission/${req.params.id}`,
      { headers: { "Content-Type": "application/json" } }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Proxy error:", error.response?.data || error.message);
    res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
  }
};

const getAllContactSubmissions = async (req, res) => {
  try {
    const response = await axios.get(
      "https://x8ki-letl-twmt.n7.xano.io/api:0Bs3nDBx/contact_submission",
      { headers: { "Content-Type": "application/json" } }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Proxy error:", error.response?.data || error.message);
    res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
  }
};

module.exports = {
  newsletterSubscriber,
  signup,
  login,
  createJob,
  getJobs,
  getJobById,
  createJobApplication,
  getJobApplications,
  getMe,
  getUsers,
  getJobApplicationById,
  updateJobApplication,
  deleteJobApplication,
  createUser,
  updateUser,
  updateJob,
  deleteJob,
  deleteUser,
  createCallSchedule,
  getCallScheduleById,
  updateCallSchedule,
  deleteCallSchedule,
  getAllCallSchedules,
  createContactSubmission,
  getContactSubmissionById,
  updateContactSubmission,
  deleteContactSubmission,
  getAllContactSubmissions
};