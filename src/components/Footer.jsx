import React from "react";
import logo from "./MyLogo.png"

const Footer = () => {
    return (
        <footer>
            <p>Задание выполнил Коршунов Кирилл Вячеславович</p>
            <a href="https://kirillkorshunov.ru/">
                <img
                    src={logo}
                    alt="Логотип Коршунова Кирилла"
                />
            </a>
        </footer>
    )
}

export default Footer;