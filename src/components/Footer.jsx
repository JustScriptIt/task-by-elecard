import React from "react";
import logo from "./MyLogo.png"

const Footer = () => {
    return (
        <footer>
            <p>Задание выполнил Коршунов Кирилл Вячеславович</p>
            <img
                src={logo}
                alt="Логотип Коршунова Кирилла"
            />
        </footer>
    )
}

export default Footer;