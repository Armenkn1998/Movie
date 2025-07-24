import { useState } from "react";
import "./MenuBar.css";
export const MenuBar = () => {
  const [active, setActiv] = useState("Home");
  return (
    <div className="menuBar">
      <div className="menuBar-box">
        <div className="profile">
          <div className="img-box">
          <img src="./images/icons/profile.png" alt="Profil_Img" />

          </div>
          <p>Daniel</p>
        </div>
        <div
          className={active === "Search" ? "active" : ""}
          onClick={() => setActiv("Search")}
        >
          <img src="./images/icons/Search.png" alt="Search" />
          <p>Search</p>
        </div>
        <div
          className={active === "Home" ? "active" : ""}
          onClick={() => setActiv("Home")}
        >
          <img src="./images/icons/Group 46.png" alt="Home" />
          <p>Home</p>
        </div>
        <div
          className={active === "TV Shows" ? "active" : ""}
          onClick={() => setActiv("TV Shows")}
        >
          <img src="./images/icons/Group 56.png" alt="TV Shows" />
          <p>TV Shows</p>
        </div>
        <div
          className={active === "Movies" ? "active" : ""}
          onClick={() => setActiv("Movies")}
        >
          <img src="./images/icons/Group 54.png" alt="Movies" />
          <p>Movies</p>
        </div>
        <div
          className={active === "Generes" ? "active" : ""}
          onClick={() => setActiv("Generes")}
        >
          <img src="./images/icons/Group 53.png" alt="Generes" />
          <p>Generes</p>
        </div>
        <div
          className={active === "Watch Later" ? "active" : ""}
          onClick={() => setActiv("Watch Later")}
        >
          <img src="./images/icons/Group 47.png" alt="Watch Later" />
          <p>Watch Later</p>
        </div>
      </div>
      <div className="Info_menu">
        <p>LANGUAGE</p>
        <p>GET HELP</p>
        <p>EXIT</p>
      </div>
    </div>
  );
};
