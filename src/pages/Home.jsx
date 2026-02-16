import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Cargar personajes
    fetch("https://swapi.tech/api/people")
      .then(res => res.json())
      .then(data => {
        const list = data.results.map(item => ({
          id: item.uid.split("/").pop(),
          ...item.properties
        }));
        setCharacters(list.slice(0, 6));
      });

    // Cargar planetas
    fetch("https://swapi.tech/api/planets")
      .then(res => res.json())
      .then(data => {
        const list = data.results.map(item => ({
          id: item.uid.split("/").pop(),
          ...item.properties
        }));
        setPlanets(list.slice(0, 5));
      });

    // Cargar vehículos
    fetch("https://swapi.tech/api/vehicles")
      .then(res => res.json())
      .then(data => {
        const list = data.results.map(item => ({
          id: item.uid.split("/").pop(),
          ...item.properties
        }));
        setVehicles(list.slice(0, 5));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const toggleFavorite = (item, type) => {
    const fullItem = { ...item, type };
    const exists = store.favorites.some(fav => fav.id == item.id && fav.type == type);

    if (exists) {
      dispatch({ type: "REMOVE_FAVORITE", payload: { id: item.id, type } });
    } else {
      dispatch({ type: "ADD_FAVORITE", payload: fullItem });
    }
  };

  const getImage = (type, id) => {
    if (type === "characters") return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
    if (type === "planets") return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
    if (type === "vehicles") return `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`;
    return "";
  };

  if (loading) {
    return <p className="text-center mt-5">Cargando...</p>;
  }

  return (
    <div className="text-center mt-5">
      <h1>Characters</h1>
      <div className="d-flex flex-nowrap gap-3 justify-content-center overflow-auto px-3">
        {characters.map(char => (
          <div className="card" key={char.id} style={{ width: '18rem' }}>
            <img
              className="card-img-top"
              src={getImage("characters", char.id)}
              alt={char.name}
              onError={(e) => e.target.src = "https://via.placeholder.com/286x400?text=No+img"}
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5 className="card-title">{char.name}</h5>
              <p className="card-text">
                <small className="d-block">Gender: {char.gender}</small>
                <small className="d-block">Hair: {char.hair_color}</small>
                <small className="d-block">Eyes: {char.eye_color}</small>
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <Link to={`/character/${char.id}`} className="btn btn-primary btn-sm">
                  Learn More!
                </Link>
                <i 
                  className={`bi bi-hand-thumbs-up-fill ${store.favorites.some(f => f.id == char.id && f.type === "characters") ? "text-primary" : "text-secondary"}`}
                  style={{ cursor: "pointer", fontSize: "1.5rem" }}
                  onClick={() => toggleFavorite(char, "characters")}
                ></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h1 className="mt-5">Planets</h1>
      <div className="d-flex flex-nowrap gap-3 justify-content-center overflow-auto px-3">
        {planets.map(planet => (
          <div className="card" key={planet.id} style={{ width: '18rem' }}>
            <img
              className="card-img-top"
              src={getImage("planets", planet.id)}
              alt={planet.name}
              onError={(e) => e.target.src = "https://via.placeholder.com/286x400?text=No+img"}
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5 className="card-title">{planet.name}</h5>
              <p className="card-text">
                <small className="d-block">Population: {planet.population}</small>
                <small className="d-block">Climate: {planet.climate}</small>
                <small className="d-block">Terrain: {planet.terrain}</small>
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <Link to={`/planet/${planet.id}`} className="btn btn-primary btn-sm">
                  Learn More!
                </Link>
                <i 
                  className={`bi bi-hand-thumbs-up-fill ${store.favorites.some(f => f.id == planet.id && f.type === "planets") ? "text-primary" : "text-secondary"}`}
                  style={{ cursor: "pointer", fontSize: "1.5rem" }}
                  onClick={() => toggleFavorite(planet, "planets")}
                ></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h1 className="mt-5">Vehicles</h1>
      <div className="d-flex flex-nowrap gap-3 justify-content-center overflow-auto px-3">
        {vehicles.map(vehicle => (
          <div className="card" key={vehicle.id} style={{ width: '18rem' }}>
            <img
              className="card-img-top"
              src={getImage("vehicles", vehicle.id)}
              alt={vehicle.name || vehicle.model}
              onError={(e) => e.target.src = "https://via.placeholder.com/286x400?text=No+img"}
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5 className="card-title">{vehicle.name || vehicle.model}</h5>
              <p className="card-text">
                <small className="d-block">Model: {vehicle.model}</small>
                <small className="d-block">Manufacturer: {vehicle.manufacturer}</small>
                <small className="d-block">Class: {vehicle.vehicle_class}</small>
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <Link to={`/vehicle/${vehicle.id}`} className="btn btn-primary btn-sm">
                  Learn More!
                </Link>
                <i 
                  className={`bi bi-hand-thumbs-up-fill ${store.favorites.some(f => f.id == vehicle.id && f.type === "vehicles") ? "text-primary" : "text-secondary"}`}
                  style={{ cursor: "pointer", fontSize: "1.5rem" }}
                  onClick={() => toggleFavorite(vehicle, "vehicles")}
                ></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};