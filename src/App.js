import React, { useEffect, useState } from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom';


import {Footer, Header} from './components/';
import { Articles, MainPage, RecipesCath, Recipes, Profile, Login, Register, Recipe, RecipeForm, ArticleForm, ArticlePage } from './pages/';
import './App.scss';
import './Media.scss';

const RECIPES_URL = 'http://127.0.0.1:8000/api/recipes/'

function App() {
  const [user, setUser] = useState({
    username: 'Arbuz', 
    email: 'aboba@aboba.ru', 
    bio: 'lorem ipusm fisdjfosdjfosijd', 
    photo: '/assets/images/салат.jpg', 
    favourites: [{
      heading: 'Банановые кесы',
      id: 1,
      img: '/assets/images/dinner.jpg'
    }]
  })

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('')
  const [fetchError, setFetchError] = useState(null)

  useEffect(() => {
    const fetchItems = async () => {
        try {
            const response = await fetch(RECIPES_URL)
            if (!response.ok) throw Error('Ожидаемые данные не были получены')
            const listItems = await response.json()
            console.log(listItems);
            setItems(listItems);
            setFetchError(null);
        } catch (err) {
            setFetchError(err.message)
        }
    }

    (async () => await fetchItems())();
}, [])
  return <HashRouter>
    <Header user={user} setUser={setUser}/>
    <Routes>
      <Route path='/' element={<MainPage user={user}/>}/>
      <Route path='/recipes' element={<Recipes user={user} cathegory='Рецепты'/>}/>
      <Route path='/profile' element={<Profile user={user} setUser={setUser}/>}/>
      <Route path='/articles' element={<Articles user={user}/>}/>
      <Route path='/breakfast' element={<RecipesCath user={user} setUser={setUser} cathegory='Завтрак' recipeItems={items.filter((item) => item.recipe_type[0] == 1)}/>}/>
      <Route path='/lunch' element={<RecipesCath user={user} setUser={setUser} cathegory='Обед' recipeItems={items.filter((item) => item.recipe_type[0] == 2)}/>}/>
      <Route path='/dinner' element={<RecipesCath user={user} setUser={setUser} cathegory='Ужин' recipeItems={items.filter((item) => item.recipe_type[0] == 3)}/>}/>
      <Route path='/desserts' element={<RecipesCath user={user} setUser={setUser} cathegory='Десерты' recipeItems={items.filter((item) => item.recipe_type[0] == 4)}/>}/>
      <Route path='/login' element={<Login user={user} setUser={setUser}/>}/>
      <Route path='/register' element={<Register user={user} setUser={setUser}/>}/>
      <Route path='/recipe' element={items.map((item) => <Recipe user={user} setUser={setUser} heading={item.name} description={item.description} cooking={item.cooking}/>)}/>
      <Route path='/add-recipe' element={<RecipeForm user={user} setUser={setUser}/>}/>
      <Route path='/add-article' element={<ArticleForm/>}/>
      <Route path='/article' element={<ArticlePage/>}/>
    </Routes>
    <Footer/>
  </HashRouter>
}

export default App;
