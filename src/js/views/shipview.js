//Ship View
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const ShipView = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => actions.fetchShipData(params.theid), [store.shipData]);

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
        <h4>{store.shipData.name}</h4>
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
            {store.shipData.model}
          </li>
          <li
            className="list-group-item d-flex bg-dark border border-warning"
            style={{ color: "white" }}
          >
            Class:<br></br>
            {store.shipData.starship_class}
          </li>
          <li
            className="list-group-item d-flex bg-dark border border-warning"
            style={{ color: "white" }}
          >
            Manufacturer:<br></br>
            {store.shipData.manufacturer}
          </li>
          <li
            className="list-group-item d-flex bg-dark border border-warning"
            style={{ color: "white" }}
          >
            Length:<br></br>
            {store.shipData.length}
          </li>
          <li
            className="list-group-item d-flex bg-dark border border-warning"
            style={{ color: "white" }}
          >
            Crew:<br></br>
            {store.shipData.crew}
          </li>
          <li
            className="list-group-item d-flex bg-dark border border-warning"
            style={{ color: "white" }}
          >
            Max Speed:<br></br>
            {store.shipData.max_atmosphering_speed}
          </li>
          <li
            className="list-group-item d-flex bg-dark border border-warning"
            style={{ color: "white" }}
          >
            Rating:<br></br>
            {store.shipData.hyperdrive_rating}
          </li>
          <li
            className="list-group-item d-flex bg-dark border border-warning"
            style={{ color: "white" }}
          >
            Consumables:<br></br>
            {store.shipData.consumables}
          </li>
        </ul>
        <hr className="my-4" />

        <Link to="/home">
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
