import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={"/"} className={"nav-link"}>Главная</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/cat"} className={"nav-link"}>Каталог</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/team"} className={"nav-link"}>Команда</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
