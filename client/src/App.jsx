import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Mainlayout from "./layout/Mainlayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import AddJobPage from "./pages/AddJobPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import NotFoundPage from "./pages/NotFoundPage";
import EditJobPage from "./pages/EditJobPage";

import axios from 'axios';



// Add Job
const addJob = async (newJob) => {
  await axios.post('http://127.0.0.1:5000/api/v1/jobs', newJob, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
  return;
}

// Delete Job
const deleteJob = async (jobId) => {
  await axios.delete(`http://127.0.0.1:5000/api/v1/jobs/${jobId}`);
  return;
}

// Edit Job
const editJob = async (job) => {
 
  await axios.patch(`http://127.0.0.1:5000/api/v1/jobs/${job.id}`, job, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
  return;
}



const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Mainlayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path="/jobs/edit/:id" element={<EditJobPage  updatedJobSubmit={ editJob } />} loader={jobLoader} />
        <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App