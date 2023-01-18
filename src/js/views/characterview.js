//welcome single
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterView = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const [character, setCharacter] = useState({});

  function fetchChars() {
    fetch("https://www.swapi.tech/api/people/" + params.theid)
      .then((res) => res.json())
      .then((data) => setCharacter(data.result.properties));
  }

  useEffect(() => fetchChars(), []);

  return (
    <div className="jumbotron d-flex h-75 p-4 m-4 border border-warning border rounded">
      <img
        src={
          "https://starwars-visualguide.com/assets/img/characters/" +
          params.theid +
          ".jpg"
        }
        className="card-img-left border border-light border rounded"
        alt="..."
      ></img>
      <div className="charData p-4" style={{ color: "white" }}>
        <h4>{character.name}</h4>
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
            Height:<br></br>
            {character.height}
          </li>
          <li
            className="list-group-item d-flex bg-dark border border-warning"
            style={{ color: "white" }}
          >
            Mass:<br></br>
            {character.mass}
          </li>
          <li
            className="list-group-item d-flex bg-dark border border-warning"
            style={{ color: "white" }}
          >
            Gender:<br></br>
            {character.gender}
          </li>
          <li
            className="list-group-item d-flex bg-dark border border-warning"
            style={{ color: "white" }}
          >
            Birth Year:<br></br>
            {character.birth_year}
          </li>
          <li
            className="list-group-item d-flex bg-dark border border-warning"
            style={{ color: "white" }}
          >
            Hair Color:<br></br>
            {character.hair_color}
          </li>
          <li
            className="list-group-item d-flex bg-dark border border-warning"
            style={{ color: "white" }}
          >
            Skin Color:<br></br>
            {character.skin_color}
          </li>
          <li
            className="list-group-item d-flex bg-dark border border-warning"
            style={{ color: "white" }}
          >
            Eye Color:<br></br>
            {character.eye_color}
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

CharacterView.propTypes = {
  match: PropTypes.object,
};
