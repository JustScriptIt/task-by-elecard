import React, {useState} from 'react';
import classes from "./CardsList.module.css";
import CardSmall from "./CardSmall";

const CardsList = (props) => {
    const [visibleCategory, setVisibleCategory] = useState('')
    const visible = {'height': 'auto'}
    const hidden = {'height': '0'}

    const [categoriesVisability, setCategoriesVisability] = useState([])


    const isShow = () => {

    }

    return (
        <div className={classes.cardslist}>
            {
                props.categories.map((category) =>
                    <div
                        key={category}
                        className={classes.group}>
                        <h3
                            className={classes.group__title}
                        >
                            {category[0].toUpperCase() + category.substring(1)}
                        </h3>
                        <div
                            className={classes.group__block}
                            style={category == visibleCategory ? visible : hidden}
                        >
                            {props.cards.filter(card => card.category == category).map((card) =>
                                <CardSmall
                                    key={card.image}
                                    card={card}
                                />
                            )}
                        </div>
                        <button
                            className={classes.button}
                            value={category}
                            onClick={(event) => setVisibleCategory(event.target.value)}
                        >
                            +
                        </button>
                    </div>
                )
            }
        </div>
    );
};

export default CardsList;
