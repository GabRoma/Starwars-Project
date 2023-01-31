//navbar
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const { store, setStore, actions } = useContext(Context);
  const params = useParams();
  const navigate = useNavigate()

  function handleLogout() {
		actions.logout()
		navigate("/")
	}

  return (
    <nav className="navbar navbar-black bg-black p-2">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png"
            width="90"
            height="54"
          />
        </span>
      </Link>
      <div className="ml-auto">
        {store.auth === true?<button className="btn btn-outline-warning nav-item dropdown p-0" onClick={(e) => e.stopPropagation()}>
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ color: "white" }}
          >
            Favorites
          </a>
          <ul
            className="dropdown-menu p-1"
            id="favorites"
            style={{
              position: "absolute",
              right: "0px",
              left: "auto",
              backgroundColor: "black",
              opacity: "0.8",
              color: "white",
            }}
          >
            {store.favorites.map((item, index) => (
                
                <li
                  key={index}
                  className="dropdown-menu-item d-flex justify-content-between"
                >
                  <Link to={item.viewType + item.id} style={{color:"white"}}>{item.name}</Link>
                  <i
                    className="far fa-times-circle"
                    onClick={()=>actions.quitFavorite(item)}
                  />
                </li>
                
            ))}
          </ul>
        </button>: null}
        {store.auth === true? <button className="btn btn-outline-warning nav-item p-2 ms-1" onClick={handleLogout} style={{ color: "white" }}>Log out</button> : null}
      </div>
    </nav>
  );
};
