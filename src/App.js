import { Route, Routes } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupsPage from './pages/NewMeetups';

function App() {
  return (

    /*
    this is react v6. this uses routes. the guy in the video uses v5 react with switch
    */

    /*
     have to modify the url to see changes
     */

    //localhost:3000/AllMeetupsPage
    <div>
      <Routes>
        <Route
          path='/' exact element={<AllMeetupsPage />}>
        </Route>

        <Route
          path='/new-meetup' element={<NewMeetupsPage />}>
        </Route>

        <Route
          path='/favorites' element={<FavoritesPage />}>
        </Route>
      </Routes>

    </div>
  );
}

export default App;