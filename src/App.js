import React, { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


import {Footer, Header, useToken} from './components/';
import { Articles, MainPage, RecipesCath, Recipes, Profile, Login, Register, Recipe, RecipeForm, ArticleForm, ArticlePage, About } from './pages/';
import './App.scss';
import './Media.scss';


function App() {
  const { token, setToken } = useToken();
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
  const USER_URL = "http://rickrockk.pythonanywhere.com/api/auth/me"

  // const [user, setUser] = useState({})
  const [fetchError, setFetchError] = useState(null)

//   useEffect(() => {
//     const fetchUser = async () => {
//         try {
//             const response = await fetch(USER_URL, {
//                 method: 'POST',
//                 headers: {
//                     'Authorization': 'Bearer' + {token},
//                     'Access-Control-Allow-Headers': 'Content-Type',
//                     'Access-Control-Allow-Credentials': true,
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify()
//             });
//             const userInfo = await response.json()
//             setUser(userInfo);
//             setFetchError(null);
//         } catch (err) {
//             setFetchError(err.message)
//         }
//     }
//     (async () => await fetchUser())();
// }, [])

  const RECIPES_URL = 'http://rickrockk.pythonanywhere.com/api/recipes/'
  const ARTICLES_URL = 'http://rickrockk.pythonanywhere.com/api/articles/'


  const [items, setItems] = useState([]);
  const [articles, setArticles] = useState([]);


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
    <Header token={token} setToken={setToken}/>
    <Routes>
      <Route path='/recipes' element={<Recipes cathegory='Рецепты' recipeItems={recipeItemsArr}/>}/>
      <Route path='/profile' element={<Profile user={user} setUser={setUser} token={token} setToken={setToken}/>}/>
      <Route path='/articles' element={<Articles articles={articles}/>}/>
      <Route path='/breakfast' element={<RecipesCath cathegory='Завтрак' recipeItems={items.filter((item) => item.recipe_type[0] === 1)} count={items.filter(item => item.recipe_type[0] === 1).length}/>}/> 
      <Route path='/breakfast/:id' element={<Recipe/>}/>
      <Route path='/lunch' element={<RecipesCath cathegory='Обед' recipeItems={items.filter((item) => item.recipe_type[0] === 2)} count={items.filter(item => item.recipe_type[0] === 1).length} />}/>
      <Route path='/lunch/:id' element={<Recipe/>}/> 
      <Route path='/dinner' element={<RecipesCath cathegory='Ужин' recipeItems={items.filter((item) => item.recipe_type[0] === 3)} count={items.filter(item => item.recipe_type[0] === 1).length}/>}/> 
      <Route path='/dinner/:id' element={<Recipe/>}/> 
      <Route path='/lunch/:id' element={<Recipe/>}/>
      <Route path='/desserts' element={<RecipesCath cathegory='Десерты' recipeItems={items.filter((item) => item.recipe_type[0] === 4)} count={items.filter(item => item.recipe_type[0] === 1).length}/>}/> 
      <Route path='/desserts/:id' element={<Recipe/>}/>
      <Route path='/login' element={<Login token={token} setToken={setToken}/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/add-recipe' element={<RecipeForm/>}/>
      <Route path='/add-article' element={<ArticleForm/>}/>
      <Route path='/articles/:id' element={<ArticlePage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/' element={<MainPage/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
}

export default App;
