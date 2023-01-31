//Sign Up Page

import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Navigate, useNavigate } from "react-router-dom";

export const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()

    function sendData(e) {
    e.preventDefault();
    actions.signup(username, email, password);
    setUsername("");
    setEmail("");
    setPassword("");
    navigate("/")
}

return (
    <>
        <div className="jumbotron d-flex h-75 p-4 m-4 border border-warning border rounded">
            <form className="w-50 m-auto" onSubmit={sendData} style={{ color: "white" }}>
            <h3 className="mb-3">Create your account</h3>
            <div className="mb-3">
            <label htmlFor="exampleInputUsername1" className="form-label">
                Username
            </label>
            <input
            type="username"
            className="form-control bg-dark"
            id="exampleInputUsername1"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ color: "white" }}
            />
            </div>
            <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
                Email
            </label>
            <input
            type="email"
            className="form-control bg-dark"
            id="exampleInputEmail1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ color: "white" }}
            />
            </div>
            <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
                Password
            </label>
            <input
            type="password"
            className="form-control bg-dark"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ color: "white" }}
            />
            </div>
            <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-outline-warning">
            Sign up
            </button>
            <a class="btn btn-outline-warning" href="/" role="button">Go back</a>
            </div>
        </form>
        </div>
    </>
    );
};