import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Planet = () => {
    const { id } = useParams();
    const { store, dispatch } = useGlobalReducer();
    const [planet, setPlanet] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://swapi.tech/api/planets/${id}`)
            .then(res => res.json())
            .then(data => {
                setPlanet({
                    id: data.result.uid.split("/").pop(),
                    ...data.result.properties
                });
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p className="text-center mt-5">Cargando...</p>;
    if (!planet) return <p className="text-center mt-5">Planeta no encontrado</p>;

    const isFavorite = store.favorites.some(f => f.id == id && f.type === "planets");

    const toggleFavorite = () => {
        if (isFavorite) {
            dispatch({ type: "REMOVE_FAVORITE", payload: { id, type: "planets" } });
        } else {
            dispatch({ type: "ADD_FAVORITE", payload: { ...planet, type: "planets" } });
        }
    };

    return (
        <div className="container mt-5">
            <Link to="/" className="btn btn-secondary mb-3">← Back</Link>
            <div className="row">
                <div className="col-md-6">
                    <img 
                        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                        className="img-fluid rounded" 
                        alt={planet.name}
                        onError={(e) => e.target.src = "https://via.placeholder.com/400x400?text=No+img"}
                    />
                </div>
                <div className="col-md-6">
                    <h1>{planet.name}</h1>
                    <p className="lead">"A world far, far away"</p>
                    <ul className="list-group">
                        <li className="list-group-item">Rotation Period: {planet.rotation_period}</li>
                        <li className="list-group-item">Orbital Period: {planet.orbital_period}</li>
                        <li className="list-group-item">Diameter: {planet.diameter}</li>
                        <li className="list-group-item">Climate: {planet.climate}</li>
                        <li className="list-group-item">Gravity: {planet.gravity}</li>
                        <li className="list-group-item">Terrain: {planet.terrain}</li>
                        <li className="list-group-item">Population: {planet.population}</li>
                    </ul>
                    <button 
                        className={`btn mt-3 ${isFavorite ? 'btn-danger' : 'btn-primary'}`}
                        onClick={toggleFavorite}
                    >
                        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                    </button>
                </div>
            </div>
        </div>
    );
};