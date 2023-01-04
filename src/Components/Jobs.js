import React,{ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loadUsers } from "../redux/action";


const Jobs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUsers());
  },)
const { users } = useSelector((state) => state.users);
  return (
    <div className="container">
      {users.map((job) => {
        return (
          <div
            key={job.id}
            // onClick={() => applyJob(job.id)}
            className="shadow p-3 mb-5 mt-3 rounded jobs"
          >
            <Link to={`/ApplyJobs/${job.id}`} state={{ Disablerole: `${job.role}` }}>
            <h3>{job.role}</h3>
            <p>{job.company}</p>
            <p>
              <span>
                <i className="bi bi-briefcase"></i> {job.exp} Yrs
              </span>
              &nbsp;&nbsp;&nbsp;
              <span>
                <i className="bi bi-currency-rupee"></i> {job.salary}
              </span>
              &nbsp;&nbsp;&nbsp;
              <span>
                <i className="bi bi-geo-alt"></i> {job.location}
              </span>
            </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Jobs;
