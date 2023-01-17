//welcome home
import React, {useEffect, useState} from "react";
import { Card } from "../component/card.jsx";

export const Home = () =>{

    const [character, setCharacter] = useState([]);

    function fetchChars (){
        fetch("https://www.swapi.tech/api/people/")
        .then(res => res.json())
        .then((data) => setCharacter(data.results))
    }

    useEffect(() =>
    fetchChars()
    ,[]);

    return(
    <div className="conteiner bg-dark p-4">
        <h2 style={{color:"white"}}>Characters</h2>
        <div className="d-flex">
        {character.map((item, index) => {
            return<Card key={index} name={item.name} id={item.uid}/>
        })}
	</div>
    </div>
    
        )}