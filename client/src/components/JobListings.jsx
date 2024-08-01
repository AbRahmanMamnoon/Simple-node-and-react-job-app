import { useState, useEffect } from "react";
import JobListing from "./JobListing";
import Spinner from "./Spinner";
import axios from 'axios';


const JobListings = ({ isHome = false }) => {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      
      const apiUrl = isHome ? 'http://127.0.0.1:5000/api/v1/jobs?limit=3' : 'http://127.0.0.1:5000/api/v1/jobs';
      try {
        const res = await axios.get(apiUrl);
        setJobs(res.data);
      } catch (error) {
        console.log('Error while fetching data', error);
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "All Jobs"}
        </h2>

        {loading ?
          (<Spinner loading={loading} />) :
          (<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing key={job._id} job={job} />
            ))}

          </div>)
        }

      </div>
    </section>
  )
}

export default JobListings