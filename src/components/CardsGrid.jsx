import React from 'react';
import classes from "./CardsGrid.module.css"
import Card from "./Card";

const CardsGrid = (props) => {
    return (
        <div className={classes.cardsgrid}>
            {props.cards.map((card) =>
                <Card
                    key={card.image}
                    card={card}
                    remove={props.remove}
                />
            )}
        </div>
    );
};

export default CardsGrid;