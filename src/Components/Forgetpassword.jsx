import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useNavigate } from "react-router-dom";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  //  const [token, setToken] = useState(""); 
  const navigate = useNavigate()



// axios.defaults.withCredentials=true;
  const handleForgotPassword = (e) => {
    e.preventDefault();
    console.log("email", email)
 
    axios
      .post("https://nodemailertask.onrender.com/api/user/forget-password", {
        email: email,
      })
      .then((res) => {
        if (res.data.Status === "Success") {
          setEmail("");
          // setToken("")
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Email not send");
      });
  };
  return (
    <div>
      <div className="container">
        <h1 className="heading1">ForgetPage</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Form onSubmit={handleForgotPassword}>
              <Form.Group className="mb-3 col-5">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  placeholder="Enter the Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Button className="mb-3 col-5" type="submit" variant="primary">
                Send
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
