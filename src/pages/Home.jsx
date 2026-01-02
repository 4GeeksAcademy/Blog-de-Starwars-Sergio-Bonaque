import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  const getIdFromUrl = (url) => {
    const parts = url.split("/");
    return parts[parts.length - 2];
  };

  const getImageUrl = (category, id) => {
    return `https://starwars-visualguide.com/assets/img/${category}/${id}.jpg`;
  };

  const isFavorite = (item) => {
    return store.favorites.some(fav => fav.url === item.url);
  };

  const toggleFavorite = (item) => {
    dispatch({ type: "TOGGLE_FAVORITE", payload: item });
  };

  useEffect(() => {
    const loadAll = async () => {
      const c = await fetch("https://swapi.dev/api/people/").then(r => r.json());
      const p = await fetch("https://swapi.dev/api/planets/").then(r => r.json());
      const v = await fetch("https://swapi.dev/api/vehicles/").then(r => r.json());
      setCharacters(c.results);
      setPlanets(p.results);
      setVehicles(v.results);
    };
    loadAll();
  }, []);

  return (
    <div className="text-center mt-5">
      <h1>Characters</h1>
      <div className="d-flex flex-nowrap gap-3 justify-content-center">
        {characters.map((char, index) => {
          const id = getIdFromUrl(char.url);
          return (
            <div className="card" key={char.url}>
              <img
                className="card-img-top"
                src={getImageUrl("characters", id)}
                alt={char.name}
                style={{ width: "172px", height: "150px", objectFit: "cover" }}
                onError={(e) => e.currentTarget.src = "https://via.placeholder.com/172x150"}
              />
              <div className="card-body">
                <h5 className="card-title">{char.name}</h5>
                <small className="d-block">Gender: {char.gender || "n/a"}</small>
                <small className="d-block">Hair Color: {char.hair_color || "n/a"}</small>
                <small className="d-block">Eye-color: {char.eye_color || "n/a"}</small>
                <a href="#" className="btn btn-primary btn-sm mt-2">Learn More!</a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill={isFavorite(char) ? "currentColor" : "none"}
                  stroke="currentColor"
                  strokeWidth="1"
                  className="bi bi-hand-thumbs-up ms-3"
                  viewBox="0 0 16 16"
                  onClick={() => toggleFavorite(char)}
                  style={{ cursor: "pointer" }}
                >
                  <path d="M8.864.325c.956-.238 1.843.485 1.908 1.42l.069 1.003c.03.418.327.766.738.869l1.02.255C13.2 3.999 14 5.58 14 7.316v5.368c0 .992-.467 1.843-1.136 2.358-.59.453-1.338.717-2.129.717H8c-.34 0-.666-.054-.966-.158A4.8 4.8 0 0 1 6.07 15.2c-.503-.307-1-.61-2.07-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
                </svg>
              </div>
            </div>
          );
        })}
      </div>

      <h1 className="mt-5">Planets</h1>
      <div className="d-flex flex-nowrap gap-3 justify-content-center">
        {planets.map((planet) => {
          const id = getIdFromUrl(planet.url);
          return (
            <div className="card" key={planet.url}>
              <img
                className="card-img-top"
                src={getImageUrl("planets", id)}
                alt={planet.name}
                style={{ width: "172px", height: "150px", objectFit: "cover" }}
                onError={(e) => e.currentTarget.src = "https://via.placeholder.com/172x150"}
              />
              <div className="card-body">
                <h5 className="card-title">{planet.name}</h5>
                <small className="d-block">Population: {planet.population || "unknown"}</small>
                <small className="d-block">Climate: {planet.climate || "n/a"}</small>
                <a href="#" className="btn btn-primary btn-sm mt-2">Learn More!</a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill={isFavorite(planet) ? "currentColor" : "none"}
                  stroke="currentColor"
                  strokeWidth="1"
                  className="bi bi-hand-thumbs-up ms-3"
                  viewBox="0 0 16 16"
                  onClick={() => toggleFavorite(planet)}
                  style={{ cursor: "pointer" }}
                >
                  <path d="M8.864.325c.956-.238 1.843.485 1.908 1.42l.069 1.003c.03.418.327.766.738.869l1.02.255C13.2 3.999 14 5.58 14 7.316v5.368c0 .992-.467 1.843-1.136 2.358-.59.453-1.338.717-2.129.717H8c-.34 0-.666-.054-.966-.158A4.8 4.8 0 0 1 6.07 15.2c-.503-.307-1-.61-2.07-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
                </svg>
              </div>
            </div>
          );
        })}
      </div>

      <h1 className="mt-5">Vehicles</h1>
      <div className="d-flex flex-nowrap gap-3 justify-content-center">
        {vehicles.map((vehicle) => {
          const id = getIdFromUrl(vehicle.url);
          return (
            <div className="card" key={vehicle.url}>
              <img
                className="card-img-top"
                src={getImageUrl("vehicles", id)}
                alt={vehicle.name}
                style={{ width: "172px", height: "150px", objectFit: "cover" }}
                onError={(e) => e.currentTarget.src = "https://via.placeholder.com/172x150"}
              />
              <div className="card-body">
                <h5 className="card-title">{vehicle.name}</h5>
                <small className="d-block">Model: {vehicle.model || "n/a"}</small>
                <small className="d-block">Manufacturer: {vehicle.manufacturer || "n/a"}</small>
                <a href="#" className="btn btn-primary btn-sm mt-2">Learn More!</a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill={isFavorite(vehicle) ? "currentColor" : "none"}
                  stroke="currentColor"
                  strokeWidth="1"
                  className="bi bi-hand-thumbs-up ms-3"
                  viewBox="0 0 16 16"
                  onClick={() => toggleFavorite(vehicle)}
                  style={{ cursor: "pointer" }}
                >
                  <path d="M8.864.325c.956-.238 1.843.485 1.908 1.42l.069 1.003c.03.418.327.766.738.869l1.02.255C13.2 3.999 14 5.58 14 7.316v5.368c0 .992-.467 1.843-1.136 2.358-.59.453-1.338.717-2.129.717H8c-.34 0-.666-.054-.966-.158A4.8 4.8 0 0 1 6.07 15.2c-.503-.307-1-.61-2.07-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};