import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate, Link } from "react-router-dom";
import VVVERSIONSLOGONEGROMOBILE from "../../img/VVVERSIONSLOGONEGROMOBILE.png";

const Login = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const handleChange = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  const redirectToMainPages = () => {
    console.log("redireccionamos al main");
    navigate("/");
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("me diste click");
    if (loginData.email !== "" || loginData.password != "") {
      const response = await actions.loginFirst({
        email: loginData.email,
        password: loginData.password,
      });
      console.log(response);
      if (response) {
        navigate("/projectinput");
      } else {
        alert("Credenciales invalidas");
      }
    }
  };

  useEffect(() => {
    if (store.token && store.token !== null) navigate("/projectinput");
  }, [store.token]);
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="container col-4  login p-5 text-center">
          <h1 className="text-center text-white">Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label"
              ></label>
              <input
                name="email"
                placeholder="Email"
                value={loginData.email}
                onChange={(event) => handleChange(event)}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label"
              ></label>
              <input
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={(event) => handleChange(event)}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="text-center">
              <button type="submit" className="text-white submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="ms-3">
        <Link to="/">
          <img src={VVVERSIONSLOGONEGROMOBILE} className="back2 p-2"></img>
        </Link>
      </div>
    </div>
  );
};

export default Login;
