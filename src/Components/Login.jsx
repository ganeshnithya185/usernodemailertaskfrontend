import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(""); // Initialize the token state as an empty string
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email:", email);
    console.log("password:", password);

    const headers = {
      Authorization: token,
      "Content-Type": "application/json",
    };
    axios
      .post(
        "https://nodemailertask.onrender.com/api/user/login",
        {
          email,
          password,
        },
        { headers: headers }
      )
      .then((result) => {
        console.log(result);
        const { token } = result.data; // Assuming your server returns the token in the response
        setToken(token); // Store the token in the state
        setEmail("");
        setPassword("");
        alert("Login Successfully");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="container">
        <h1 className="heading1">Login page</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3 col-5">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  placeholder="Enter the Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-5">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  rows={2}
                  placeholder="Enter the password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button className="mb-3 col-5" type="submit" variant="primary">
                Login
              </Button>
              <h6>You forgot your password and click here </h6>
              <Link to="/forget">Forgetpassword</Link>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

// isjp fjtl cjgv ptao
