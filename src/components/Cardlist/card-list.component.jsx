import React from "react";
import "../../components/Cardlist/card-list.styles.css";
import Card from "../Card/card.component";

const CardList = props => {
  return (
    <div className="card-list">
      {props.monsters.map(monster => (
        <Card monster={monster} />
      ))}
    </div>
  );
};
export default CardList;
