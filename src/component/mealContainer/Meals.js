import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import { getData, setDataLocal } from '../data/fakedb';
import Meal from '../meal/Meal';
import './Meals.css'
const Meals = () => {

    const [meals, mealState] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => {
                console.log('first line')
                mealState(data.meals)})
    }, [])

    const [cart, cartState] = useState([])
    // fetch local storage data 
    let newArr=[]
    useEffect(() => {
        console.log('second line')
        const data = getData()
        console.log(data)
        for (let id in data) {
            // console.log(data[id])
            const storeData = meals.find(meal => meal.idMeal === id);
            console.log(storeData)
            if (storeData){
                storeData.quantity=data[id]
                newArr.push(storeData)
            }
        }
        cartState(newArr)
    },[meals])
    console.log(cart)


    let nameCount = 0
    const cartHandler = (selectedProduct) => {
        // console.log(selectedProduct)
        let productArr = []
        const findData = cart.find(meal => (meal.idMeal) === (selectedProduct.idMeal));
        if (!findData) {
            selectedProduct.quantity = 1
            productArr = [...cart, selectedProduct]
        } else {
            let rest = cart.filter(meal => (meal.idMeal) !== findData.idMeal)
            findData.quantity += 1
            let newCount = nameCount++
            let name = findData.strMeal + newCount
            console.log(newCount)
            productArr = [...rest, findData]
        }
        cartState(productArr)
        // console.log(findData)
        setDataLocal(selectedProduct.idMeal)
    }
    // console.log(cart)

    return (
        <div className='meal-container'>
            <div className='meal-body'>
                {
                    meals.map(meal => <Meal key={meal.idMeal} handler={cartHandler} meal={meal}></Meal>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Meals;