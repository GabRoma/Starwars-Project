//welcome home
import React, {useEffect, useState} from "react";
import { Card } from "../component/card.jsx";
import { PlanCard } from "../component/planetcard.jsx";

export const Home = () =>{

    //settings characters

    const [character, setCharacter] = useState([]);

    function fetchChars (){
        fetch("https://www.swapi.tech/api/people/")
        .then(res => res.json())
        .then((data) => setCharacter(data.results))
    }

    useEffect(() =>
    fetchChars()
    ,[]);

    //settings planets

    const [planet, setPlanet] = useState([]);

    function fetchPlans (){
        fetch("https://www.swapi.tech/api/planets/")
        .then(res => res.json())
        .then((data) => setPlanet(data.results))
    }

    useEffect(() =>
    fetchPlans()
    ,[]);

    return(
    <div className="cardConteiner bg-dark p-4">
        <h2 style={{color:"white"}}>Characters</h2>
        <div className="d-flex">
        {character.map((item, index) => {
            return<Card key={index} name={item.name} id={item.uid}/>
        })}
        </div>
        <hr></hr>
        <h2 style={{color:"white"}}>Planets</h2>
        <div className="d-flex">
        {planet.map((item, index) => {
            return<PlanCard key={index} name={item.name} id={item.uid}/>
        })}
	</div>
    </div>
        )}