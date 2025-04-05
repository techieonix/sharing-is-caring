import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import { UserContextProvider } from './Contexts/UserContext.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import Recipes from './Recipes.jsx'
import Recipe from './Recipe.jsx'
import { RecipeContextProvider } from './Contexts/RecipeContext.jsx'


const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Login />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path='recipes' element={<Recipes />} />
      <Route path='recipe/:recipeId' element={<Recipe />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <RecipeContextProvider>
        <RouterProvider router={routes}>
          <App />
        </RouterProvider>
      </RecipeContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
)
