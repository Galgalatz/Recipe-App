import React, {useEffect, useState} from 'react';
import Recipe from "./Recipe";
import fireRing from './images/fire-ring.jpg';
import './App.css';

const App = () => {

    const APP_ID = 'd13617fc';
    const APP_KEY = '96c538dc624332ab3a4620b711de1a57';

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState(''); //search will be now empty string
    const [query, setQuery] = useState('');

    // const exampleReq = "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free";
    useEffect(() => {
        getRecipes();
    }, [query])

    const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
    };

    const updateSearch = (e) => {
        setSearch(e.target.value);
        // console.log(search);
    };

    const getSearch = e => {
         e.preventDefault();
         setQuery(search);
         setSearch('');
    };

    return(
        <div className="App">
            <header>
                <h1>Hungry?</h1>
            </header>

            <form onSubmit={getSearch} className="search-form">
                <button className="search-btn"  type="submit">Search</button>
                <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
            </form>
            <div className="recipes">
            {recipes.map(recipe => (
                <Recipe
                    key={recipe.recipe.label}
                    title={recipe.recipe.label}
                    image={recipe.recipe.image}
                    calories={recipe.recipe.calories}
                    ingredients={recipe.recipe.ingredients}
                />
            )) }
            </div>
        </div>
    );
}

export default App;
