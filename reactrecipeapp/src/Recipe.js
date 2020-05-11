import React from 'react';
import style from "./recipe.module.css";

const Recipe = ({id,title,image}) => {
    return(
        <div className={style.recipe}>
            <h3>{title}</h3>
            <h3 className="id">Food ID:{id}</h3>
            <p>{image}</p>
            <img className="imgTag" src={image} alt=""/>
        </div>
    );
}
export default Recipe;