import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecipeContext } from './Contexts/RecipeContext';
import { Link } from 'react-router-dom';

const RecipeCards = () => {

    const { recipes } = useRecipeContext()
    console.log(recipes);
    return (
        <div className="grid grid-cols-4 m-5">
            {recipes.current.map(recipe => (
                <div className='border rounded-xl border-pink-600 p-3 m-3 shadow-pink-600 shadow-lg text-center' key={recipe.id}>
                    <img src={recipe.image} />
                    <h2 className='font-bold text-xl text-pink-600 underline my-2'>{recipe.title}</h2>
                    <p>{recipe.description}</p>
                    <Link to={`/recipe/${recipe.id}`}><button className='bg-pink-600 text-white px-3 py-2 mt-3 rounded-full'>View Recipe</button></Link>
                </div>
            ))}
        </div>
    );
};

const Recipes = () => {
    const navigate = useNavigate()

    const logout = () => {
        window.localStorage.clear()
        window.localStorage.setItem('isLoggedIn', false)
        navigate('/login')
    }

    useEffect(() => {
        if (window.localStorage.getItem('isLoggedIn') === 'false') {
            navigate('/login')
        }
    }, [])

    return (
        <div>
            <div className='flex justify-between'>
                <h1 className='text-4xl font-bold text-pink-600 underline text-center mx-auto my-5'>Delicious Recipes</h1>
                <button onClick={logout} className='bg-pink-600 text-white rounded-full px-5 mr-2 mt-5'>Logout</button>
            </div>
            <RecipeCards />
        </div>
    )
}

export default Recipes