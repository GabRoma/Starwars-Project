//a
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

export const Card = ({name, id}) =>{
  return(
    <div className="card mx-1 bg-black text-white" style={{width: "18rem"}}>
  <img src={"https://starwars-visualguide.com/assets/img/characters/"+(id)+".jpg"} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">some StarWars character</p>
  </div>
  <div className="card-footer">
  <Link to={"/single/"+id} className="btn btn-outline-warning">Learn more!</Link>
  </div>
</div>
  )
}