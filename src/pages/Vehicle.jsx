import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const VehicleDetail = () => {
    const { id } = useParams();
    const { store, dispatch } = useGlobalReducer();
    const [vehicle, setVehicle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://swapi.tech/api/vehicles/${id}`)
            .then(res => res.json())
            .then(data => {
                setVehicle({
                    id: data.result.uid.split("/").pop(),
                    ...data.result.properties
                });
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p className="text-center mt-5">Cargando...</p>;
    if (!vehicle) return <p className="text-center mt-5">Vehículo no encontrado</p>;

    const isFavorite = store.favorites.some(f => f.id == id && f.type === "vehicles");

    const toggleFavorite = () => {
        if (isFavorite) {
            dispatch({ type: "REMOVE_FAVORITE", payload: { id, type: "vehicles" } });
        } else {
            dispatch({ type: "ADD_FAVORITE", payload: { ...vehicle, type: "vehicles" } });
        }
    };

    return (
        <div className="container mt-5">
            <Link to="/" className="btn btn-secondary mb-3">← Back</Link>
            <div className="row">
                <div className="col-md-6">
                    <img 
                        src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`} 
                        className="img-fluid rounded" 
                        alt={vehicle.name}
                        onError={(e) => e.target.src = "https://via.placeholder.com/400x300?text=No+img"}
                    />
                </div>
                <div className="col-md-6">
                    <h1>{vehicle.name}</h1>
                    <p className="lead">"Ready for takeoff"</p>
                    <ul className="list-group">
                        <li className="list-group-item">Model: {vehicle.model}</li>
                        <li className="list-group-item">Manufacturer: {vehicle.manufacturer}</li>
                        <li className="list-group-item">Cost: {vehicle.cost_in_credits}</li>
                        <li className="list-group-item">Length: {vehicle.length}</li>
                        <li className="list-group-item">Max Speed: {vehicle.max_atmosphering_speed}</li>
                        <li className="list-group-item">Crew: {vehicle.crew}</li>
                        <li className="list-group-item">Passengers: {vehicle.passengers}</li>
                        <li className="list-group-item">Class: {vehicle.vehicle_class}</li>
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