import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes";

const Card = ({ name, username, id }) => {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFav = favs.find((fav) => fav.id === id) ? true : false;
    setIsFav(isFav);
  }, [id]);

  const addFav = () => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    const newFavs = favs.filter((fav) => fav.id !== id);
    setIsFav(!isFav);

    if (isFav) {
      localStorage.setItem("favorites", JSON.stringify(newFavs));
      return;
    }

    localStorage.setItem(
      "favorites",
      JSON.stringify([...favs, { name, username, id }])
    );
  };

  return (
    <div className="card" key={id}>
      <img className="doctor-img" src="./images/doctor.jpg" alt="DH-logo"/>
      <h3>{id}</h3>
      <h2>{name}</h2>
      <h3>{username}</h3>
      <Link key={id} to={"/dentista/" + id}>
        Details
      </Link>
      <button onClick={addFav} className="favButton">
        🖤
      </button>
    </div>
  );
};

export default Card;