import React from 'react'
import style from './movies.module.css'
const Movies = ({title,image,rating,date}) => {
    
        return (
        
            <div className={style.movie}>
          
                
                <img className={style.image} title={title} src={image} alt=""/>
                <h3 className={style.title} > {title}</h3>
                <h2 className={style.date}> Relase-Date : {date}</h2>
                <h5 className={style.rate}>Rating : <span className={style.rating}>{rating}</span>/10</h5>
                
            </div>
        );
    }
export default Movies;
    

