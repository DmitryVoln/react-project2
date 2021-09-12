import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppState, Film} from "../redux/store";
import {catalogSlice} from "../redux/catalogSlice";
import { Link } from 'react-router-dom';

export const Catalog = () => {
    const dispatch = useDispatch();
    const films = useSelector<AppState>(state=> state.catalog.films) as Film[]
    const loading = useSelector<AppState>(state => state.catalog.loading);
    const [filmName, setFilmName] = useState("");

    const loadFilms = async () => {
        dispatch(catalogSlice.actions.setLoading(true))

        try {
            const filmsResponse = await fetch(`https://www.omdbapi.com/?s=${filmName}&apikey=5a5badce&s`);
            const films = await filmsResponse.json()

            dispatch(catalogSlice.actions.setFilms(films.Search));
        } finally {
            dispatch(catalogSlice.actions.setLoading(false))
        }
    }

    if (loading) {
        return (
            <div className="spinner-border">
                <span className="visually-hidden">Грузимся...</span>
            </div>
        )
    }

    return (<div>
        <h1>Каталог</h1>
        <div className="input-group mb-3">
            <input type="text" className="form-control" value={filmName} onChange={e => setFilmName(e.target.value)}/>
                <button type={"button"} className={"btn btn-primary"} onClick={loadFilms}>Найти</button>
        </div>

        {films.length === 0 && (
            <h2>Ничего не найдено</h2>
        )}
        {films.map(film => (
        <div className="card">
            <img src={film.Poster} className="card-img-top" alt="poster" />
                <div className="card-body">
                    <h5 className="card-title">{film.Title}</h5>
                    <Link to={`/film/${film.imdbID}`}>Подробнее</Link>
                </div>
        </div>
    ))}
    </div>)
}
