import { useContext } from 'react';
import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorites-context';
function MainNavigation(){
  const favoritesCtx = useContext(FavoritesContext);
  return <header className={classes.header}>

    <div className={classes.logo}>
      React Meetups
    </div>

    {
      /**
       * ul means unorder list
       * ol means ordered list
       * li means regular list
       */
    }
    <nav>
      <ul>
        <li>
          <Link to='/'>All Meetups</Link>
        </li>

        <li>
          <Link to='/new-meetup'>Add New Meetups</Link>
        </li>

        <li>
          <Link to='/favorites'>
            Favorites
            <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
            </Link>
        </li>
      </ul>
    </nav>
  </header>
}

export default MainNavigation;