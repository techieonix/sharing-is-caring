import { createContext, useContext, useRef } from "react";
import brownie from './assets/brownie.jpg'
import burger from './assets/burger.jpg'
import chickenRoast from './assets/chickenRoast.jpg'
import gyros from './assets/gyros.jpg'
import pancakes from './assets/pancakes.jpg'
import pieTart from './assets/pieTart.jpg'
import pilaf from './assets/pilaf.jpg'
import raspberryTart from './assets/raspberryTart.jpg'
import roastedPot from './assets/roastedPot.jpg'
import salmonPasta from './assets/salmonPasta.jpg'
import tikkaMasala from './assets/tikkaMasala.jpg'
import vegetables from './assets/tikkaMasala.jpg'

const recipeArray = [
    {
        id: 1,
        title: 'Chocolate Brownie',
        image: brownie,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    },
    {
        id: 2,
        title: 'Cheese Burger',
        image: burger,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    },
    {
        id: 3,
        title: 'Chicken Roast',
        image: chickenRoast,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    },
    {
        id: 4,
        title: 'Gyros',
        image: gyros,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    },
    {
        id: 5,
        title: 'Pancakes',
        image: pancakes,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    },
    {
        id: 6,
        title: 'Pie Tart',
        image: pieTart,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    },
    {
        id: 7,
        title: 'Pilaf',
        image: pilaf,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    },
    {
        id: 8,
        title: 'Raspberry Tart',
        image: raspberryTart,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    },
    {
        id: 9,
        title: 'Roasted Pot',
        image: roastedPot,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    },
    {
        id: 10,
        title: 'Salmon Pasta',
        image: salmonPasta,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    },
    {
        id: 11,
        title: 'Chiken Tikka Masala',
        image: tikkaMasala,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    },
    {
        id: 12,
        title: 'Vegetables',
        image: vegetables,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    }
];

const RecipeContext = createContext();

export const RecipeContextProvider = ({ children }) => {
    const recipes = useRef(recipeArray)

    return (
        <RecipeContext.Provider value={{ recipes }}>
            {children}
        </RecipeContext.Provider>
    )
}

export const useRecipeContext = () => useContext(RecipeContext)