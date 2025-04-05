import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import { useRecipeContext } from './Contexts/RecipeContext';

const Recipe = () => {
    const navigate = useNavigate()
    const [recipe, setRecipe] = useState({})
    const idParams = useParams()
    const { recipes } = useRecipeContext()

    useEffect(() => {
        recipes.current.map(el => {
            if (el.id == idParams.recipeId) {
                setRecipe(el)
                console.log(el);
            }
        })
    }, [])

    useEffect(() => {
        if (window.localStorage.getItem('isLoggedIn') === 'false') {
            navigate('/login')
        }
    }, [])

    return (
        <div className='border rounded-xl border-pink-600 shadow-pink-600 shadow-lg text-center w-fit mx-auto mt-5 p-5'>
            <h1 className='font-bold text-3xl text-pink-600 underline my-2'>{recipe.title}</h1>
            <img className='m-auto w-64 h-64 p-5' src={recipe.image} alt="" />
            <p>{recipe.description}</p>
            <Link to={`/recipes`}><button className='bg-pink-600 text-white px-3 py-2 mt-3 rounded-full'>Go to Homepage</button></Link>
        </div>
    )
}

export default Recipe