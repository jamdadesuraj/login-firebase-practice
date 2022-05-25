import React, { useState } from "react";

import InputControl from "./InputControl";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from ".././firebase";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
const Login = () => {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const [values, setValues] = useState({
    email: "",
    pass: "",
  });

  const [errMsg, setErrMsg] = useState("");

  const handlerSubbmission = () => {
    if (!values.email || !values.pass) {
      setErrMsg("invalid data");
      return;
    }
    setErrMsg("");
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(values);
  };

  const googleSubmission = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
        navigate("/");
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
          <h1>Login</h1>

          <InputControl
            lable="Email"
            placeholder="enter your email"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
          />
          <InputControl
            lable="Password"
            placeholder="enter your password"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, pass: event.target.value }))
            }
          />

          <div className="signup-footer">
            <p>{errMsg}</p>
            <b>
              <Link to="/reset-pass">Reset Password</Link>
            </b>
            <Button
              variant="contained"
              color="success"
              onClick={handlerSubbmission}
            >
              Login
            </Button>
            <br />
            <Button
              variant="outlined"
              color="error"
              startIcon={<GoogleIcon />}
              onClick={googleSubmission}
            >
              Sign in with google
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

export default Login;
