import { Link } from "react-router-dom";
import NavgationBar from "../../../components/NavgationBar";
import React, { useState } from "react";
import axios from "axios";
import avatar from "../../../assets/images/login avatar.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Accept, setAccept] = useState(false);
  const [emailerror, setemailError] = useState("");

  async function Submit(e) {
    let flag = true;
    e.preventDefault();
    setAccept(true);
    try {
      if (flag) {
        let res = await axios.post("http://127.0.0.1:8000/api/login", {
          email: email,
          password: password,
        });
        if (res.status === 200) {
          window.localStorage.setItem("email", email);
          window.location.pathname = "/";
        }
      }
    } catch (err) {
      setemailError(err.response.status);
    }
  }
  return (
    <>
      <div style={{ height: "calc(100vh - 88px)" }} className={"flex-center"}>
        <form class="form" onSubmit={Submit}>
          <img src={avatar} alt="" className="w-25 m-auto" />
          <div class="flex"></div>
          <label>
            <input
              placeholder="example@domain.com"
              type="email"
              class="input"
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>Email</span>
          </label>

          <label>
            <input
              placeholder="*********"
              type="password"
              class="input"
              xonChange={(e) => setPassword(e.target.value)}
            />
            <span>Password</span>
          </label>

          <button class="submit">login</button>
          {Accept && emailerror === 422}
          {Accept && emailerror === 401 && (
            <p style={{ fontSize: "10px", color: "red" }}> PassWord error </p>
          )}
          <p class="signin">
            create new account ? <Link to="/signup"> Register</Link>{" "}
          </p>
        </form>
      </div>
    </>
  );
}
