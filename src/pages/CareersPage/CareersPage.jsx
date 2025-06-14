import React, { useEffect, useState } from "react";
const API_URL = import.meta.env.VITE_API_URL;


const CareersPage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/career/get-jobs`) 
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setJobs(data);
      })
      .catch((err) => {
        console.error("Error fetching careers:", err);
      });
  }, []);


  return (
    <div>
      <h3>Career Listings</h3>
      <ul>
        {jobs.map((job) => (
          <li key={job._id} style={{ marginBottom: "10px" }}>
            <strong>{job.title}</strong><br />
            {job.description}<br />
            <small>Expires: {new Date(job.expiresAt).toLocaleDateString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CareersPage;
