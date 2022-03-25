import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Meal.css'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
const Meal = ({meal,handler}) => {
    // console.log(meal)
    const {strArea,strMealThumb,strMeal}=meal
    return (
        <div className='cart'>
            <img src={strMealThumb} alt="" />
            <div className="details">
                <h3>Food Name : {strMeal}</h3>
                <h1>{strArea} Food</h1>
            </div>
            <button onClick={()=>handler(meal)} className='add-btn'>Add Your Menu <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
        </div>
    );
};

export default Meal;