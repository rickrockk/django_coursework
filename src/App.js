import React, { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


import {Footer, Header} from './components/';
import { Articles, MainPage, RecipesCath, Recipes, Profile, Login, Register, Recipe, RecipeForm, ArticleForm, ArticlePage, About } from './pages/';
import './App.scss';
import './Media.scss';

function App() {
  const [user, setUser] = useState({
    username: 'Admin', 
    email: 'admin@admin.admin', 
    bio: 'admin', 
    photo: '/assets/images/admin.png', 
    favourites: [{
      heading: 'Банановые кесы',
      id: 1,
      img: '/assets/images/dinner.jpg'
    }]
  })

  const RECIPES_URL = 'http://127.0.0.1:8000/api/recipes/'
  const ARTICLES_URL = 'http://127.0.0.1:8000/api/articles/'


  const [items, setItems] = useState([]);
  const [articles, setArticles] = useState([]);
  
  // const RECIPE_URL = `http://127.0.0.1:8000/api/recipes/${id}`
  // const ARTICLE_URL = `http://127.0.0.1:8000/api/articles/${id}`
  
  const [fetchError, setFetchError] = useState(null)

  const recipeItemsArr = [{heading: 'Завтрак', to: '/breakfast', img: '/assets/images/breakfast.jpg'},
    {heading: 'Обед', to: '/lunch', img: '/assets/images/lunch.jpg'}, 
    {heading: 'Ужин', to: '/dinner', img: '/assets/images/dinner.jpg'}]


  useEffect(() => {
    const fetchItems = async () => {
        try {
            const response = await fetch(RECIPES_URL)
            if (!response.ok) throw Error('Ожидаемые данные не были получены')
            const listItems = await response.json()
            setItems(listItems);
            setFetchError(null);
        } catch (err) {
            setFetchError(err.message)
        }
    }

    (async () => await fetchItems())();
}, [])

useEffect(() => {
  const fetchArticles = async () => {
      try {
          const response = await fetch(ARTICLES_URL)
          if (!response.ok) throw Error('Ожидаемые данные не были получены')
          const listArticles = await response.json()
          setArticles(listArticles);
          setFetchError(null);
      } catch (err) {
          setFetchError(err.message)
      }
  }

  (async () => await fetchArticles())();
}, [])

  return <BrowserRouter>
    <Header user={user} setUser={setUser}/>
    <Routes>
      <Route path='/recipes' element={<Recipes user={user} cathegory='Рецепты' recipeItems={recipeItemsArr}/>}/>
      <Route path='/profile' element={<Profile user={user} setUser={setUser}/>}/>
      <Route path='/articles' element={<Articles user={user} articles={articles}/>}/>
      <Route path='/breakfast' element={<RecipesCath user={user} setUser={setUser} cathegory='Завтрак' recipeItems={items.filter((item) => item.recipe_type[0] === 1)} count={items.filter(item => item.recipe_type[0] === 1).length}/>}/> 
      <Route path='/breakfast/:id' element={<Recipe/>}/>
      <Route path='/lunch' element={<RecipesCath user={user} setUser={setUser} cathegory='Обед' recipeItems={items.filter((item) => item.recipe_type[0] === 2)} count={items.filter(item => item.recipe_type[0] === 1).length} />}/>
      <Route path='/lunch/:id' element={<Recipe/>}/> 
      <Route path='/dinner' element={<RecipesCath user={user} setUser={setUser} cathegory='Ужин' recipeItems={items.filter((item) => item.recipe_type[0] === 3)} count={items.filter(item => item.recipe_type[0] === 1).length}/>}/> 
      <Route path='/dinner/:id' element={<Recipe/>}/> 
      <Route path='/lunch/:id' element={<Recipe/>}/>
      <Route path='/desserts' element={<RecipesCath user={user} setUser={setUser} cathegory='Десерты' recipeItems={items.filter((item) => item.recipe_type[0] === 4)} count={items.filter(item => item.recipe_type[0] === 1).length}/>}/> 
      <Route path='/desserts/:id' element={<Recipe/>}/>
      <Route path='/login' element={<Login user={user} setUser={setUser}/>}/>
      <Route path='/register' element={<Register user={user} setUser={setUser}/>}/>
      <Route path='/add-recipe' element={<RecipeForm user={user} setUser={setUser}/>}/>
      <Route path='/add-article' element={<ArticleForm/>}/>
      <Route path='/articles/:id' element={<ArticlePage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/' element={<MainPage user={user}/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
}

export default App;
