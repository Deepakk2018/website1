import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './changepassword';

function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const changePassword = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    if (newPassword !== confirmPassword) {
        alert("New password and confirm password do not match.");
        return;
    }

    axios
        .put(
            "http://localhost:5000/changePassword",
            {
                currentPassword: currentPassword,
                newPassword: newPassword,
            }
        )
        .then((response) => {
            alert("Password changed successfully!");
            navigate('/index'); // Replace '/login' with the correct route to your login page
        });
};

  return (
    <div className="container">
      <div className="col-md-11 grid-margin stretch-card">
        <div className="card">
          <div className="card">
            <div style={{ backgroundColor: "#57c7d4", height: "40px" }}>
              <h4
                style={{ marginLeft: "25px", marginTop: "10px", color:"black" }}
                className="card-title"
              >
                <i className="fa fa-key"> </i> Change Password
              </h4>
            </div>
            <div className="card-body">
              <form className="forms-sample">
                <div className="form-group">
                  <label for="exampleInputUsername1">Current Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="name"
                    id="exampleInputUsername1"
                    value={currentPassword}
                    onChange={(event) => {
                      setCurrentPassword(event.target.value);
                    }}
                    autoComplete="off"
                    placeholder="Current Password"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputConfirmPassword1">New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="description"
                    id="exampleInputConfirmPassword1"
                    value={newPassword}
                    onChange={(event) => {
                      setNewPassword(event.target.value);
                    }}
                    autoComplete="off"
                    placeholder="New Password"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputConfirmPassword2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="price"
                    id="exampleInputConfirmPassword2"
                    value={confirmPassword}
                    onChange={(event) => {
                      setConfirmPassword(event.target.value);
                    }}
                    autoComplete="off"
                    placeholder="Confirm Password"
                  />
                </div>

                <button
                  type="submit"
                  onClick={changePassword}
                  className="btn btn-primary mr-2"
                >
                  Change Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;