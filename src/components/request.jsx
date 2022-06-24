import React from 'react';
import axios from "axios";

const Request = () => {
    function getCocktail(){
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass')
            .then(response =>{
                console.log('Other site')
                console.log(response.data)
            })
    }
    function getProfessionList(){
        axios.post('https://togu-prof.4ait.ru/api/main/testone',{})
            .then(response =>{
                console.log('TOGU')
                console.log(response.data)
            })
    }
    return (
        <div>
            <button onClick={getProfessionList}>ТОГУ</button>
            <button onClick={getCocktail}>Другой сайт</button>
            <br/>
        </div>
    );
};

export default Request;