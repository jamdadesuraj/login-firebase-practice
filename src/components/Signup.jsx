import React, { useState } from "react";
import "./signup.css";
import InputControl from "./InputControl";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from ".././firebase";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
const Signup = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
    cPass: "",
  });

  const [errMsg, setErrMsg] = useState("");

  const handlerSubbmission = () => {
    if (!values.name || !values.email || !values.pass || !values.cPass) {
      setErrMsg("invalid data");
      return;
    } else if (values.pass !== values.cPass) {
      alert("password not match plz check");
      setErrMsg("password not match");
      return false;
    }
    setErrMsg("");
    createUserWithEmailAndPassword(auth, values.email, values.pass)
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
          <h1>signup</h1>
          <InputControl
            lable="Name"
            placeholder="enter your name"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, name: event.target.value }))
            }
          />
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
          <InputControl
            lable="Confirm-Password"
            placeholder="enter your confirm-password"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, cPass: event.target.value }))
            }
          />
          <div className="signup-footer">
            <p>{errMsg}</p>
            <Button
              variant="contained"
              color="success"
              onClick={handlerSubbmission}
            >
              Signup
            </Button>
            <br />

            <b>
              Already Have An Account
              <span>
                <Link to="/login">Login</Link>
              </span>
            </b>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
