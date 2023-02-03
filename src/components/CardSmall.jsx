import React, {useState} from 'react';
import classes from "./CardSmall.module.css";

const CardSmall = (props) => {
    const [visability, setVisability] = useState(false)

    let date = new Date(props.card.timestamp)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()

    const show = () => {
        setVisability(!visability)
        visability ? document.body.style.overflowY = "auto" : document.body.style.overflowY = "hidden"
    }

    const formatDate = (date) => {
        let dd = (day < 10 ? '0' : '') + day
        let mm = (month < 10 ? '0' : '') + month

        return (dd + "." + mm + "." + year)
    }

    let timeStamp = formatDate(date)

    return (
        <div className={classes.card}>
            <div className={classes.card__wrapper}>
                <div
                    className={classes.card__image}
                    onClick={show}
                >
                    <img
                        src={"http://contest.elecard.ru/frontend_data/" + props.card.image}
                        alt=""
                    />
                </div>
                <div className={classes.card__description}>
                    <div>
                        <div>{timeStamp}</div>
                        <div>{props.card.filesize / 100 + " KB"}</div>
                    </div>
                </div>
            </div>
            {visability ?
                <div className={classes.modal}>
                    <div
                        className={classes.modal__background}
                        onClick={show}
                    >

                    </div>
                    <div className={classes.modal__content}>
                        <img
                            src={"http://contest.elecard.ru/frontend_data/" + props.card.image}
                            alt=""
                        />
                        <div
                            className={classes.modal__button}
                            onClick={show}>
                            &#10008;
                        </div>
                    </div>
                </div>
                :
                ''
            }
        </div>
    );
};

export default CardSmall;