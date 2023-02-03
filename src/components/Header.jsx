import React from "react";
import MySelect from "./UI/MySelect";
import MyButton from "./UI/MyButton";
import classes from "./UI/MySelect.module.css";

const Header = ({selectedSort, onChange, getCards, displaySelection, display}) => {
    return (
        <header>
            <div className="header-top">
                <div className="header-logo">
                    Elecard's task
                </div>
                <div className="header-description"></div>
            </div>
            <div className="header-bottom">
                <div>
                    <MyButton onClick={getCards}>
                        Получить карточки
                    </MyButton>
                    <MyButton onClick={getCards}>
                        Сброс
                    </MyButton>
                </div>
                <MySelect
                    selectedSort={display}
                    onChange={displaySelection}
                    options={[
                        {value: "list", name: "Список"},
                        {value: "grid", name: "Крупные значки"},
                    ]}
                />
                <MySelect
                    selectedSort={selectedSort}
                    onChange={onChange}
                    options={[
                        {value: "category", name: "По категории"},
                        {value: "filesize", name: "По размеру"},
                        {value: "image", name: "По названию"},
                        {value: "timestamp", name: "По дате"},
                    ]}
                />
            </div>
        </header>
    )
}

export default Header;