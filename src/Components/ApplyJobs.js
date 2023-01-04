import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {loadUsers } from "../redux/action";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
// import axios from "axios";

const ApplyJobs = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [msgError, setMsgError] = useState(false);
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [values, setValues] = useState({
    Name: "",
    Email: "",
    Mobile: "",
    Message: "",
  });
  const location = useLocation()
  const { Disablerole } = location.state;
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => {
    navigate("/jobs");
    dispatch(loadUsers())
  };
  const params = useParams();
  const handleEditUser = (e) => {
    e.preventDefault();
    if (
      values.Name !== "" &&
      values.Email !== "" &&
      values.Mobile !== "" &&
      values.Message
    ) {
      setIsSuccess(!isSuccess);
      setShow(true);
      axios.post("http://localhost:3001/Applied", values).then((res) => {
        console.log(values);
      });
        setShow(true);
    } else {
      setIsSuccess(isSuccess);
      setError("*Enter all the fields");
    }

    setValues({ Name: "", Email: "", Mobile: "", address: "", Experience: "" });
    //setSimpleTextDisplay(true);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-8 mx-auto">
          <form onSubmit={handleEditUser}>
            <div className="mt-2">
              <label className="form-label">Job ID: </label>
              <input
                className="form-control"
                type="text"
                value={params.id}
                disabled
              />
            </div>
            <div className="mt-3">
              <label className="form-label">Role: </label>
              <input
                className="form-control"
                type="text"
                value={Disablerole}
                disabled
              />
            </div>
            <div className="mt-3">
              <label className="form-label">Name: </label>
              <input
                className="form-control"
                defaultValue={values.Name}
                type="text"
                placeholder="Name"
                onChange={(e) => {
                  if (
                    /^[A-Za-z]+$/.test(e.target.value) &&
                    e.target.value !== ""
                  ) {
                    setNameError(false);
                    setValues({ ...values, Name: e.target.value });
                    setIsSuccess(true);
                  } else {
                    setValues({ ...values, Name: e.target.value });
                    setNameError(true);
                  }
                }}
              />
              <p className="text-danger">
                {nameError
                  ? "Name should not be empty and should not contain special characterss"
                  : ""}
              </p>
            </div>
            <div className="mt-3">
              <label className="form-label">Email: </label>
              <input
                className="form-control"
                defaultValue={values.Email}
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  if (
                    /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(
                      e.target.value
                    ) &&
                    e.target.value !== ""
                  ) {
                    setEmailError(false);
                    setValues({ ...values, Email: e.target.value });
                    setIsSuccess(true);
                  } else {
                    setValues({ ...values, Email: e.target.value });
                    setEmailError(true);
                  }
                }}
              />
              <p className="text-danger">
                {emailError
                  ? "Email should not be empty and should be valid"
                  : ""}
              </p>
            </div>
            <div className="mt-3">
              <label className="form-label">Mobile: </label>
              <input
                className="form-control"
                defaultValue={values.Mobile}
                type="text"
                placeholder="Mobile"
                onChange={(e) => {
                  if (e.target.value !== "" && e.target.value.length === 10) {
                    setMobileError(false);
                    setValues({ ...values, Mobile: e.target.value });
                    setIsSuccess(true);
                  } else {
                    setValues({ ...values, Mobile: e.target.value });
                    setMobileError(true);
                  }
                }}
              />
              <p className="text-danger">
                {mobileError
                  ? "*Mobile Number should not be empty and should be 10 digits"
                  : ""}
              </p>
            </div>

            <div className="mt-3">
              <label className="form-label">Message: </label>
              <textarea
                className="form-control"
                value={values.Message}
                type="text"
                placeholder="Message"
                onChange={(e) => {
                  if (
                    e.target.value !== "" &&
                    e.target.value.length > 10 &&
                    e.target.value.length < 150
                  ) {
                    setMsgError(false);
                    setValues({ ...values, Message: e.target.value });
                    setIsSuccess(true);
                  } else {
                    setValues({ ...values, Message: e.target.value });
                    setMsgError(true);
                  }
                }}
              ></textarea>
              <p className="text-danger">
                {msgError
                  ? "*Message should not be empty and should be more than 10 and less than 150"
                  : ""}
              </p>
            </div>

            <div className="mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-danger">{error}</p>
          </form>
        </div>
        {/* {simpleTextDisplay ? (
          <div>
            <h1 className="text-danger">Application Details</h1>
            <h3>Job Id: {params.id}</h3>
            <p>{users[params.id].company}</p>
            <p>{users[params.id].salary}</p>
            <p>{users[params.id].location}</p>
            <p>{users[params.id].role}</p>
          </div>
        ) : (
          ""
        )} */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="text-success">
              Congratulation for applying{" "}
              <span className="text-danger">{Disablerole}</span> role
              successfully
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>Click back button to go to jobs page</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleShow}>
              Back
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default ApplyJobs;
