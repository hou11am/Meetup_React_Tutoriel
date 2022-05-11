import { useContext } from "react";
import { Link } from "react-router-dom";
import calsses from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorite-context";
function MainNavigation() {
  const favoriteCtx = useContext(FavoritesContext);
  return (
    <header className={calsses.header}>
      <div className={calsses.logo}>
        React Meet<span>up</span>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Mettups</Link>
          </li>
          <li>
            <Link to="/newMeetup">New Mettups</Link>
          </li>
          <li>
            <Link to="/favorites">
              My favorites{" "}
              <span className={calsses.favorite}>
                {favoriteCtx.totalFavorites}+
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
