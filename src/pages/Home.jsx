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
      <div className="d-flex flex-nowrap gap-3 justify-content-center">
        {characters.map(char => (
          <div className="card" key={char.id} style={{ width: '172px' }}>
            <img
              className="card-img-top"
              src={getImage("characters", char.id)}
              alt={char.name}
              onError={(e) => e.target.src = "https://via.placeholder.com/172x150?text=No+img"}
              style={{ height: '150px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5 className="card-title">{char.name}</h5>
              <small className="d-block">Gender: {char.gender}</small>
              <small className="d-block">Hair: {char.hair_color}</small>
              <small className="d-block">Eyes: {char.eye_color}</small>
              <Link to={`/character/${char.id}`} className="btn btn-primary btn-sm mt-2">
                Learn More!
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill={store.favorites.some(f => f.id == char.id && f.type === "characters") ? "blue" : "currentColor"}
                className="bi bi-hand-thumbs-up-fill ms-3"
                viewBox="0 0 16 16"
                style={{ cursor: "pointer" }}
                onClick={() => toggleFavorite(char, "characters")}
              >
                <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      <h1 className="mt-5">Planets</h1>
      <div className="d-flex flex-nowrap gap-3 justify-content-center">
        {planets.map(planet => (
          <div className="card" key={planet.id} style={{ width: '172px' }}>
            <img
              className="card-img-top"
              src={getImage("planets", planet.id)}
              alt={planet.name}
              onError={(e) => e.target.src = "https://via.placeholder.com/172x150?text=No+img"}
              style={{ height: '150px', objectFit: 'cover' }}
            />
			
            <div className="card-body">
              <h5 className="card-title">{planet.name}</h5>
              <small className="d-block">Population: 270.000{planet.population}</small>
              <small className="d-block">Element: Water {planet.element}</small>
              <Link to={`/planet/${planet.id}`} className="btn btn-primary btn-sm mt-2">
                Learn More!
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill={store.favorites.some(f => f.id == planet.id && f.type === "planets") ? "blue" : "currentColor"}
                className="bi bi-hand-thumbs-up-fill ms-3"
                viewBox="0 0 16 16"
                style={{ cursor: "pointer" }}
                onClick={() => toggleFavorite(planet, "planets")}
              >
                <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      <h1 className="mt-5">Vehicles</h1>
      <div className="d-flex flex-nowrap gap-3 justify-content-center">
        {vehicles.map(vehicle => (
          <div className="card" key={vehicle.id} style={{ width: '172px' }}>
            <img
              className="card-img-top"
              src={getImage("vehicles", vehicle.id)}
              alt={vehicle.name || vehicle.model}
              onError={(e) => e.target.src = "https://via.placeholder.com/172x150?text=No+img"}
              style={{ height: '150px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5 className="card-title">{vehicle.name || vehicle.model}</h5>
              <small className="d-block">Type: Volador{vehicle.vehicle_class}</small>
              <small className="d-block">Manufacturer: Acero {vehicle.material}</small>
              <Link to={`/vehicle/${vehicle.id}`} className="btn btn-primary btn-sm mt-2">
                Learn More!
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill={store.favorites.some(f => f.id == vehicle.id && f.type === "vehicles") ? "blue" : "currentColor"}
                className="bi bi-hand-thumbs-up-fill ms-3"
                viewBox="0 0 16 16"
                style={{ cursor: "pointer" }}
                onClick={() => toggleFavorite(vehicle, "vehicles")}
              >
                <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};