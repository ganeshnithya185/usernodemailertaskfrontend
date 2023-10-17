import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Home() {
  const [username, Setname] = useState("");
  const [password, Setpassword] = useState("");
  const [email, Setemail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://nodemailertask.onrender.com/api/user/register", {
        username,
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        Setname("");
        Setemail("");
        Setpassword("");
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
        <div className="container">
          <h1 className="heading1">Register Form</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-2 col-5">
                  <Form.Label>UserName</Form.Label>
                  <Form.Control
                    value={username} // Set the value attribute to the state variable
                    onChange={(e) => Setname(e.target.value)}
                    as="textarea"
                    placeholder="Enter the name"  
                    autoComplete="off"
                  />
                </Form.Group>
                <Form.Group className="mb-3 col-5">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    value={email} // Set the value attribute to the state variable
                    as="textarea"
                    rows={2}
                    placeholder="Enter the Email"
                    onChange={(e) => Setemail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3 col-5"> 
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    value={password} // Set the value attribute to the state variable
                    type="password"
                    rows={2}
                    placeholder="Enter the password"
                    onChange={(e) => Setpassword(e.target.value)}
                  />
                </Form.Group>
                <Button
                  // onClick={() => navigate("/login")}
                  className="mb-3 col-5"
                  type="submit"
                  variant="primary"
                >
                  Register
                </Button>
                <h6>Already have an account. Go to </h6>
                <Button type="submit" variant="secondary">
                  Login
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
