import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) =>{},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetup) => {}
});


export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);


  function addFavoriteHandler(favoriteMeetup) { 
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup)
    });
  }

  function removeFavoritesHandler(meetupId) {
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
    });
   }

  //  check to see if there is an item in the list
  function itemIsFavoriteHandler(meetupId) { 
    return userFavorites.some(meetup => meetup.id === meetupId)
  }
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoritesHandler,
    itemIsFavorite: itemIsFavoriteHandler,

  };

  return <FavoritesContext.Provider value={context}>
    {props.children}
  </FavoritesContext.Provider>
}

export default FavoritesContext;