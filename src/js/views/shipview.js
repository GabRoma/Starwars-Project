//ship view
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const ShipView = (props) => {
  const { store } = useContext(Context);
  const params = useParams();

  const [ship, setShip] = useState({});

  function fetchShip() {
    fetch("https://www.swapi.tech/api/starships/" + params.theid)
      .then((res) => res.json())
      .then((data) => setShip(data.result.properties));
  }

  useEffect(() => fetchShip(), []);

  return (
    <div className="jumbotron d-flex h-75 p-4 m-4 border border-warning border rounded">
      <img
        src={
          "https://starwars-visualguide.com/assets/img/starships/" +
          params.theid +
          ".jpg"
        }
        className="card-img-left w-25 border border-light border rounded"
        alt="..."
      ></img>
      <div className="shipData p-4" style={{ color: "white" }}>
        <h4>{ship.name}</h4>
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
            Model:<br></br>
            {ship.model}
          </li>
          <li
            className="list-group-item d-flex bg-dark border border-warning"
            style={{ color: "white" }}
          >
            Class:<br></br>
            {ship.starship_class}
          </li>
          <li
            className="list-group-item d-flex bg-dark border border-warning"
            style={{ color: "white" }}
          >
            Manufacturer:<br></br>
            {ship.manufacturer}
          </li>
          <li
            className="list-group-item d-flex bg-dark border border-warning"
            style={{ color: "white" }}
          >
            Length:<br></br>
            {ship.length}
          </li>
          <li
            className="list-group-item d-flex bg-dark border border-warning"
            style={{ color: "white" }}
          >
            Crew:<br></br>
            {ship.crew}
          </li>
          <li
            className="list-group-item d-flex bg-dark border border-warning"
            style={{ color: "white" }}
          >
            Max Speed:<br></br>
            {ship.max_atmosphering_speed}
          </li>
          <li
            className="list-group-item d-flex bg-dark border border-warning"
            style={{ color: "white" }}
          >
            Rating:<br></br>
            {ship.hyperdrive_rating}
          </li>
          <li
            className="list-group-item d-flex bg-dark border border-warning"
            style={{ color: "white" }}
          >
            Consumables:<br></br>
            {ship.consumables}
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

ShipView.propTypes = {
  match: PropTypes.object,
};
