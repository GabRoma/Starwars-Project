//welcome home
import React, {useEffect, useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../component/card.jsx";
import { PlanetCard } from "../component/planetcard.jsx";
import { ShipCard } from "../component/shipcard.jsx";
import {Context} from "../store/appContext.js"
import "../../styles/home.css"

export const Home = () =>{

    const navigate = useNavigate();
    const {store}=useContext(Context);

    useEffect(() => {
        store.auth === false ? (navigate("/"), alert("Access Denied: please log in first")):console.log("May the force be with you!")
    }, []);

    return(
    <div className="card-group bg-dark p-4">
        <h2 style={{color:"white"}}>Characters</h2>
        <div className="d-flex flex-row flex-nowrap overflow-auto">
        <div className="d-flex">
        {store.character.map((item, index) => {
            return<Card key={index} name={item.name} id={item.uid} item={item}/>
        })}
        </div>
        </div>
        <hr/>
        <h2 style={{color:"white"}}>Planets</h2>
        <div className="d-flex flex-row flex-nowrap overflow-auto">
        <div className="d-flex">
        {store.planet.map((item, index) => {
            return<PlanetCard key={index} name={item.name} id={item.uid} item={item}/>
        })}
        </div>
	    </div>
        <hr/>
        <h2 style={{color:"white"}}>Spaceships</h2>
        <div className="d-flex flex-row flex-nowrap overflow-auto">
        <div className="d-flex">
        {store.ship.map((item, index) => {
            return<ShipCard key={index} name={item.name} id={item.uid} item={item}/>
        })}
        </div>
        </div>
    </div>
        )}