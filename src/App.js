import React, { useEffect, useState } from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom';


import {Article, Footer, Header} from './components/';
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

  const [recipe, setRecipe] = useState({});
  const [article, setArticle] = useState({});

  const [id, setId] = useState(1);
  
  const RECIPE_URL = `http://127.0.0.1:8000/api/recipes/${id}`
  const ARTICLE_URL = `http://127.0.0.1:8000/api/articles/${id}`
  
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

useEffect(() => {
  const fetchArticles = async () => {
      try {
          const response = await fetch(ARTICLES_URL)
          if (!response.ok) throw Error('Ожидаемые данные не были получены')
          const listArticles = await response.json()
          console.log(listArticles);
          setArticles(listArticles);
          setFetchError(null);
      } catch (err) {
          setFetchError(err.message)
      }
  }

  (async () => await fetchArticles())();
}, [])

useEffect(() => {
  const fetchItem = async () => {
      try {
          const response = await fetch(RECIPE_URL)
          if (!response.ok) throw Error('Ожидаемые данные не были получены')
          const listItem = await response.json()
          console.log(listItem);
          setRecipe(listItem);
          setFetchError(null);
      } catch (err) {
          setFetchError(err.message)
      }
  }

  (async () => await fetchItem())();
}, [])

useEffect(() => {
  const fetchItem = async () => {
      try {
          const response = await fetch(ARTICLE_URL)
          if (!response.ok) throw Error('Ожидаемые данные не были получены')
          const listItem = await response.json()
          console.log(listItem);
          setRecipe(listItem);
          setFetchError(null);
      } catch (err) {
          setFetchError(err.message)
      }
  }

  (async () => await fetchItem())();
}, [id])


  return <HashRouter>
    <Header user={user} setUser={setUser}/>
    <Routes>
      <Route path='/' element={<MainPage user={user}/>}/>
      <Route path='/recipes' element={<Recipes user={user} cathegory='Рецепты'/>}/>
      <Route path='/profile' element={<Profile user={user} setUser={setUser}/>}/>
      <Route path='/articles' element={<Articles user={user} articles={articles}/>}/>
      <Route path='/breakfast' element={<RecipesCath user={user} setUser={setUser} cathegory='Завтрак' recipeItems={items.filter((item) => item.recipe_type[0] === 1)}/>}/>
      <Route path='/lunch' element={<RecipesCath user={user} setUser={setUser} cathegory='Обед' recipeItems={items.filter((item) => item.recipe_type[0] === 2)}/>}/>
      <Route path='/dinner' element={<RecipesCath user={user} setUser={setUser} cathegory='Ужин' recipeItems={items.filter((item) => item.recipe_type[0] === 3)}/>}/>
      <Route path='/desserts' element={<RecipesCath user={user} setUser={setUser} cathegory='Десерты' recipeItems={items.filter((item) => item.recipe_type[0] === 4)}/>}/>
      <Route path='/login' element={<Login user={user} setUser={setUser}/>}/>
      <Route path='/register' element={<Register user={user} setUser={setUser}/>}/>
      <Route path='/recipe' element={<Recipe user={user} setUser={setUser}/>}/>
      <Route path='/add-recipe' element={<RecipeForm user={user} setUser={setUser}/>}/>
      <Route path='/add-article' element={<ArticleForm/>}/>
      <Route path='/article' element={<ArticlePage/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    <Footer/>
  </HashRouter>
}

export default App;
