import React from "react";
import { RecipeItem } from "../../components";

const Profile = ({user, setUser}) => {
    return <main className="main">
    <section className="main__profile">
        <div className="profile__container container">
            <div className="profile__info">
                <img src={user?.photo} alt="Аватар" className="profile__photo"/>
                <div className="profile__description">
                    <h2 className="profile__nickname"> {user?.username}</h2>
                    <p className="profile__email"><b>E-mail:</b> {user?.email}</p>
                    <p className="profile__bio"><b>Биография:</b> <br/> {user?.bio}</p>
                    <button className="profile__logout" onClick={() => setUser(null)}>Выйти</button>
                </div>
            </div>
            <div className="profile__favourites">
                <h2 className="favourites__header">Избранное</h2>
                <ul className="recipes-page__list">
                    {user?.favourites.map((recipe) => <RecipeItem heading={recipe.heading} to={`/${recipe.id}`} img={recipe.img}/> )}
                </ul>
            </div>
        </div>
    </section>
</main>
}

export default Profile