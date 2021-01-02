import { useState, useEffect } from 'react';

import { fetchCastForFilm, IMAGE_URL } from '../../services/film-api';

import photo from '../../images/photo.png'

import s from './CastView.module.css';

export default function CastView({ moviesId }) {
    const [cast, setCast] = useState([]);

 useEffect(
    () => {
      fetchCastForFilm(moviesId).then(request=>setCast(request.cast))}, [moviesId]);

    return (
            <ul className={s.list}>
                {cast.map(member => (
                    
                            <li key={member.id} className={s.item} >
                        <img
                            src={member.profile_path ? `${IMAGE_URL}${member.profile_path}` : photo}
                            alt={member.name}
                            width='100'
                            height='150' />
                        <p className={s.name}>{member.name}</p>
                            </li>
                        
                ))
                }
            </ul>
               
        
    );

};