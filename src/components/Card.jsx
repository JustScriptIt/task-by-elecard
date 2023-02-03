import React from 'react';
import classes from "./Card.module.css"

const Card = (props) => {
    let date = new Date(props.card.timestamp)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()

    const formatDate = (date) => {
        let dd = (day < 10 ? '0' : '') + day
        let mm = (month < 10 ? '0' : '') + month

        return (dd + "." + mm + "." + year)
    }

    let timeStamp = formatDate(date)

    return (
        <div className={classes.card}>
            <div className={classes.card__wrapper}>
                <div className={classes.card__image}>
                    <img
                        src={"http://contest.elecard.ru/frontend_data/" + props.card.image}
                        alt=""
                    />
                </div>
                <div className={classes.card__description}>
                    <div>{timeStamp}</div>
                    <div>{props.card.filesize / 100 + " KB"}</div>
                </div>
            </div>
            <button
                className={classes.card__button}
                onClick={() => props.remove(props.card)}
            >
                &#10008;
            </button>
        </div>
    );
};

export default Card;