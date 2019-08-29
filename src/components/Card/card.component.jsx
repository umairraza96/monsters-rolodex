import React from "react";
import "../components/card.styles.css";

export default function Card(props) {
  return (
    <div className="card-container">
      <img alt="monster" src={`https://robohash.org/${props.monster.id}`} />
      <h2 key={props.monster.id}> {props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
}
