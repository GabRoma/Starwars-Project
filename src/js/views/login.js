//Login Page

import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Navigate } from "react-router-dom";

export const Form = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { store, actions } = useContext(Context);

    function sendData(e) {
    e.preventDefault();
    actions.login(username, password);
    setUsername("");
    setPassword("");
}

return (
    <>
    {store.auth === true ? (
        <Navigate to="/home" />
        ) : (
        <div className="jumbotron d-flex h-75 p-4 m-4 border border-warning border rounded">
            <form className="w-50 m-auto" onSubmit={sendData} style={{ color: "white" }}>
            <h3 className="mb-3">Log in</h3>
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
            Enter
            </button>
            <p>or {" "}
			<a style={{color:"white"}} href="/signup">
			create an account</a>
		    </p>
            </div>
        </form>
        </div>
        )}
    </>
    );
};