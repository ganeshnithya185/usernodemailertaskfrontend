import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Resetpassword = () => {
  const [password, Setpassword] = useState("");
  const { id, token } = useParams("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("password", password);
    const headers = {
      Authorization: token,
      "Content-Type": "application/json",
    };
    axios
      .post(
        `https://nodemailertask.onrender.com/api/user/update-password/${id}/${token}`,
        { password },
        { headers: headers }
      )
      .then((res) => {
        if (res.data.status === "Success") {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="container">
        <h1 className="heading1">Reset the Password</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3 col-5">
                <Form.Label>Enter the password</Form.Label>
                <Form.Control
                  type="password"
                  rows={2}
                  placeholder="Enter the New password"
                  onChange={(e) => Setpassword(e.target.value)}
                />
              </Form.Group>
              <Button className="mb-3 col-5" type="submit" variant="primary">
                Update
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resetpassword;
