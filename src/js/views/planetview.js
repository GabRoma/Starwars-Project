//Planet View
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetView = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const [planet, setPlanet] = useState({});

  function fetchPlan() {
    fetch("https://www.swapi.tech/api/planets/" + params.theid)
      .then((res) => res.json())
      .then((data) => setPlanet(data.result.properties));
  }

  useEffect(() => fetchPlan(), []);

  return (
    <div className="jumbotron d-flex h-75 p-4 m-4 border border-warning border rounded">
      <img
        src={
          "https://starwars-visualguide.com/assets/img/planets/" +
          params.theid +
          ".jpg"
        }
        className="card-img-left border border-light border rounded"
        alt="..."
      ></img>
      <div className="planData p-4" style={{ color: "white" }}>
        <h4>{planet.name}</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima,
          perspiciatis! Voluptas nulla quibusdam eum ducimus? Quia distinctio
          odit ut nam exercitationem quibusdam doloribus quisquam, reprehenderit
          saepe nihil molestias nemo fuga.
        </p>
		<hr className="my-4" />
		<h6><u>Data table</u></h6>
        <ul className="d-flex text-center">
          <li
            className="list-group-item d-flex bg-dark border border-warning"
            style={{ color: "white" }}
          >
            Diameter:<br></br>
            {planet.diameter}
          </li>
          <li
            className="list-group-item d-flex bg-dark border border-warning"
            style={{ color: "white" }}
          >
            Rotation Period:<br></br>
            {planet.rotation_period}
          </li>
          <li
            className="list-group-item d-flex bg-dark border border-warning"
            style={{ color: "white" }}
          >
            Orbital Period:<br></br>
            {planet.orbital_period}
          </li>
          <li
            className="list-group-item d-flex bg-dark border border-warning"
            style={{ color: "white" }}
          >
            Gravity:<br></br>
            {planet.gravity}
          </li>
          <li
            className="list-group-item d-flex bg-dark border border-warning"
            style={{ color: "white" }}
          >
            Population:<br></br>
            {planet.population}
          </li>
          <li
            className="list-group-item d-flex bg-dark border border-warning"
            style={{ color: "white" }}
          >
            Climate:<br></br>
            {planet.climate}
          </li>
          <li
            className="list-group-item d-flex bg-dark border border-warning"
            style={{ color: "white" }}
          >
            Terrain:<br></br>
            {planet.terrain}
          </li>
          <li
            className="list-group-item d-flex bg-dark border border-warning"
            style={{ color: "white" }}
          >
            Surface Water:<br></br>
            {planet.surface_water}
          </li>
        </ul>
        <hr className="my-4" />

        <Link to="/">
          <span className="btn btn-outline-warning" href="#" role="button">
            Back home
          </span>
        </Link>
      </div>
    </div>
  );
};

PlanetView.propTypes = {
  match: PropTypes.object,
};
