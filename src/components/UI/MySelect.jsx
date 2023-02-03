import React from 'react';
import classes from './MySelect.module.css'

const MySelect = ({options, onChange, selectedSort}) => {
    return (
        <form
            className={classes.sorter}
            onChange={event => onChange(event.target.value)}
        >
            {options.map(option =>
                <div
                    className={classes.sorter_button}
                    key={option.value}
                >
                    <input
                        type="radio"
                        value={option.value}
                        id={option.name}
                        name="sort"
                        checked={option.value == selectedSort ? "checked" : false}
                    />
                    <label htmlFor={option.name}>
                        {option.name}
                    </label>
                </div>
                )
            }
        </form>
    );
};

export default MySelect;