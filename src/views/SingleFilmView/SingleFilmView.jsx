import { useState, useEffect} from 'react';
import {useParams,NavLink,Route,useRouteMatch,Switch} from 'react-router-dom';

import { fetchPrimaryInfoAboutFilm, IMAGE_URL } from '../../services/film-api';
import s from './SingleFilmView.module.css';

import Cast from '../CastView/CastView';

import ReviewView from '../ReviewView/ReviewView';


export default function SingleFilmsView() {
  const {moviesId} = useParams();
  const [film, setFilm] = useState([]); 
  const {url,path} = useRouteMatch();
  
 
  
  useEffect(
    () => {
      fetchPrimaryInfoAboutFilm(moviesId).then(setFilm)}, [moviesId]);
  
    return (
        <>
            <div>
                <div className={s.wrapper}>
              <div className={s.image__wrapper} >
                <img className={s.image} src={`${IMAGE_URL}${film.poster_path}`} alt={film.title||film.name}/>
              </div>         
            <div>
                <h3 className={s.title}>{film.title || film.name}</h3>
                <p className={s.rating}>Rating: {film.vote_average}</p>
                <h3 className={s.subtitle}>Overview</h3>
                <p className={s.descr}>{film.overview}</p>
                    <p className={s.release}>Release date : {film.release_date}</p>

            {film.genres && (
            <>
              <h3 className={s.subtitle}>Genres</h3>
                  <ul className={s.genres}>
                    
                {film.genres.map((item, index) => (
                  <li key={index} className={s.item}>
                    {item.name}
                  </li>
                ))}
              </ul>
            </>
          )}
            </div>
            </div>


            <nav>
                <NavLink to={`${url}/cast`} className={ s.link} activeClassName={s.activeLink} >
                    Cast
                </NavLink>
                <NavLink to={`${url}/review`} className={ s.link} activeClassName={s.activeLink} >
                   Review
                </NavLink>
            </nav>

    
            <Switch>
                <Route path={`${path}:moviesid/cast`}>
                    <Cast moviesId={moviesId}/>
                </Route>      
                 <Route path={`${path}:movieId/review`}>
                    <ReviewView movieId={moviesId} />
                 </Route>
            </Switch>
       
            </div>
            </> 
        )}
  
  


