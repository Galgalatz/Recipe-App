import React from 'react';
import './Recipe.css';

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className="recipe-box">
            <div className="text">
                <h1>{title}</h1>
                <ol>
                    {ingredients.map(ingredient => (<li>{ingredient.text}</li>))}
                </ol>
                <p><b>{calories} Calories</b></p>
            </div>
            <img src={image} alt=""/>
        </div>
    );
}

export default Recipe;