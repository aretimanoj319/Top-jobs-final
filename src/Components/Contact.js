import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Contact = () => {
  const navigate = useNavigate();
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [msgError, setMsgError] = useState(false);
  const [error,setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [values, setValues] = useState({
    Name: "",
    Email: "",
    Mobile: "",
    Message: "",
  });

  const handleEditUser = (e) => {
    e.preventDefault();
    if (
      values.Name !== "" &&
      values.Email !== "" &&
      values.Mobile !== "" &&
      values.Message
    ) {
      setIsSuccess(!isSuccess);
      axios.post("http://localhost:3001/contact_info", values).then((res) => {
        navigate("/Home");
      });
    } else {
      setIsSuccess(isSuccess);
      setError("*Enter all the fields");
    }

    setValues({ Name: "", Email: "", Mobile: "", address: "", Message: "" });
    //setSimpleTextDisplay(true);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
          <h3 className="text-danger text-center">Get In Touch</h3>
          <form onSubmit={handleEditUser}>
            <div className="mt-3">
              <label className="form-label">Name: </label>
              <input
                className="form-control"
                defaultValue={values.Name}
                type="text"
                placeholder="Name"
                onChange={e => {
                     if ((/^[A-Za-z]+$/).test(e.target.value) && (e.target.value) !== ""){
                      setNameError(false);
                      setValues({...values,Name: e.target.value});
                      setIsSuccess(true);
                    } else {
                      setValues({...values,Name: e.target.value});
                      setNameError(true);
                    }}
                 }
              />
              <p className="text-danger">{nameError ? "Name should not be empty and should not contain special characterss" : ""}</p>
            </div>
            <div className="mt-3">
              <label className="form-label">Email: </label>
              <input
                className="form-control"
                defaultValue={values.Email}
                type="email"
                placeholder="Email"
                onChange={e => {
                     if ((/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/).test(e.target.value) && (e.target.value) !== ""){
                      setEmailError(false);
                      setValues({...values,Email: e.target.value});
                      setIsSuccess(true);
                    } else {
                      setValues({...values,Email: e.target.value});
                      setEmailError(true);
                      
                    }
  
                }
                }
              />
              <p className="text-danger">{emailError ? "Email should not be empty and should be valid" : ""}</p>
            
            </div>
            <div className="mt-3">
              <label className="form-label">Mobile: </label>
              <input
                className="form-control"
                defaultValue={values.Mobile}
                type="text"
                placeholder="Mobile"
                onChange={e => {
                   if ((e.target.value) !== "" && (e.target.value).length === 10) {
                    setMobileError(false);
                    setValues({...values,Mobile: e.target.value});
                    setIsSuccess(true);
                  } else {
                    setValues({...values,Mobile: e.target.value});
                    setMobileError(true);
                  }

              }}
              />
              <p className="text-danger">{mobileError ? "*Mobile Number should not be empty and should be 10 digits" : ""}</p>
            
            </div>

            <div className="mt-3">
              <label className="form-label">Message: </label>
              <textarea
                className="form-control"
                value={values.Message}
                type="text"
                placeholder="Message"
                onChange={e => {
                  if (e.target.value !== "" &&
                  e.target.value.length > 10 &&
                  e.target.value.length < 150) {
                   setMsgError(false);
                   setValues({...values,Message: e.target.value});
                   setIsSuccess(true);
                 } else {
                   setValues({...values,Message: e.target.value});
                   setMsgError(true);
                 }

             }}></textarea>
             <p className="text-danger">{msgError ? "*Message should not be empty and should be more than 10 and less than 150":""}</p>
            </div>

            <div className="mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-danger">{error}</p>
          </form>
        </div>
        <img
          className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6"
          src="https://aus-finance.com.au/wp-content/uploads/2020/06/shirota-yuri-5IZwgy5LJp8-unsplash.jpg"
          alt="contact"
        />
      </div>
      <div className="border text-center w-100 address p-4 my-4">
        <h4>Address: </h4>
        Plot No 129 to 132, 1 & 2nd Floor, Block 1, Dlf Building, Near Aphb
        Colony, Gachibowli, Hyderabad - 500032
        <br />
        040 44514444
      </div>
    </div>
  );
};

export default Contact;
