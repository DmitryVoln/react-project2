import React from 'react';
import {useSelector} from "react-redux";
import {AppState, Film} from "../redux/store";
import {Redirect, useParams} from 'react-router-dom';

export const Details = () => {
    const films = useSelector<AppState>(state=> state.catalog.films) as Film[]
    let params = useParams()

    const film = films.find(film => film.imdbID === (params as any).id);
    if (!film) {
        return <Redirect to={"/cat"} />
    }

    return (<div>
        <div className="card" style={{width:"18rem;"}}>
            <img src={film.Poster} alt="poster" className="card-img-top" style={{width: "100px"}} />
                <div className="card-body">
                    <h5 className="card-title">{film.Title}</h5>
                    <p>{film.Type} - {film.Year}</p>
                </div>
        </div>
    </div>)
}
