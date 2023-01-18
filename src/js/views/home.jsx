//welcome home
import React, {useEffect, useState, useContext} from "react";
import { Card } from "../component/card.jsx";
import { PlanCard } from "../component/planetcard.jsx";
import { ShipCard } from "../component/shipcard.jsx";
import {Context} from "../store/appContext.js"
import "../../styles/home.css"

export const Home = () =>{

    //cotexto

    const {store}=useContext(Context);

    //settings characters

    // const [character, setCharacter] = useState([]);

    // function fetchChars (){
    //     fetch("https://www.swapi.tech/api/people/")
    //     .then(res => res.json())
    //     .then((data) => setCharacter(data.results))
    // }

    // useEffect(() =>
    // fetchChars()
    // ,[]);

    //settings planets

    // const [planet, setPlanet] = useState([]);

    // function fetchPlans (){
    //     fetch("https://www.swapi.tech/api/planets/")
    //     .then(res => res.json())
    //     .then((data) => setPlanet(data.results))
    // }

    // useEffect(() =>
    // fetchPlans()
    // ,[]);

    return(
    <div className="card-group bg-dark p-4">
        <h2 style={{color:"white"}}>Characters</h2>
        <div className="d-flex flex-row flex-nowrap overflow-auto">
        <div className="d-flex">
        {store.character.map((item, index) => {
            return<Card key={index} name={item.name} id={item.uid}/>
        })}
        </div>
        </div>
        <hr></hr>
        <h2 style={{color:"white"}}>Planets</h2>
        <div className="d-flex flex-row flex-nowrap overflow-auto">
        <div className="d-flex">
        {store.planet.map((item, index) => {
            return<PlanCard key={index} name={item.name} id={item.uid}/>
        })}
        </div>
	    </div>
        <hr></hr>
        <h2 style={{color:"white"}}>Spaceships</h2>
        <div className="d-flex flex-row flex-nowrap overflow-auto">
        <div className="d-flex">
        {store.ship.map((item, index) => {
            return<ShipCard key={index} name={item.name} id={item.uid}/>
        })}
        </div>
        </div>
    </div>
        )}