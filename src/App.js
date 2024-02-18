import { Route, Routes } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupsPage from './pages/NewMeetups';
import Layout from './components/layout/Layout';
function App() {
  return (

    /*
    this is react v6. this uses routes. the guy in the video uses v5 react with switch
    */
    <Layout>
      <switch>
        <Routes>
          <Route path='/' element={<AllMeetupsPage />}>
          </Route>
          <Route path='/new-meetup' element={<NewMeetupsPage />}>
          </Route>
          <Route path='/favorites' element={<FavoritesPage />}>
          </Route>
        </Routes>
      </switch>
    </Layout>
  );
}

export default App;