import React from "react";
import "./card-list.styles.css";
import {Card} from "../card/card.component";
import NotFoundImage from "../../assets/images/not_found.jpg";

export const CardList = ({monsters}) => {
    return (
        <div className={monsters.length === 0 ? "notFoundDiv" : "card-list"}>
            {
                monsters.length === 0
                ? <img src={NotFoundImage} className="notFoundImage"  alt="Not found image"/>
                : monsters.map((monster) => <Card key={monster.id} monster={monster} />)
            }
        </div>
    );
}