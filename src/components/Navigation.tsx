import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={"/"}>Главная</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/cat"}>Каталог</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/team"}>Команда</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
