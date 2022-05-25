import React, { useState } from "react";
import InputControl from "./InputControl";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from ".././firebase";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const ResetPass = () => {
  const [values, setValues] = useState({
    email: "",
  });

  const [errMsg, setErrMsg] = useState("");

  const resetSubmission = () => {
    if (!values.email) {
      setErrMsg("Please valid email");
      return;
    }
    setErrMsg("");
    sendPasswordResetEmail(auth, values.email)
      .then((res) => {
        console.log(res);
        alert("please check your email");
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(values);
  };

  return (
    <>
      <div className="outerBox">
        <div className="innerBox">
          <h1>ResetPass</h1>

          <InputControl
            lable="Email"
            placeholder="enter your email"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
          />

          <div className="signup-footer">
            <p>{errMsg}</p>

            <br />
            <Button variant="contained" onClick={resetSubmission}>
              Send
            </Button>
            <br />

            <b>
              Dont't Have An Account!
              <span>
                <Link to="/signup">Signup</Link>
              </span>
            </b>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPass;
