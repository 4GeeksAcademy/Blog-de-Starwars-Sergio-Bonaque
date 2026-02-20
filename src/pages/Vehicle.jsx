import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Vehicle = () => {
    const { id } = useParams();
    const { store, dispatch } = useGlobalReducer();
    const [vehicle, setVehicle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // CORRECCIÓN: Ruta completa de la API
        fetch(`https://www.swapi.tech{id}`)
            .then(res => res.json())
            .then(data => {
                setVehicle({
                    uid: data.result.uid,
                    ...data.result.properties
                });
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [id]);

    if (loading) return <p className="text-center mt-5">Cargando la maquinaria...</p>;
    if (!vehicle) return <p className="text-center mt-5">Vehículo no encontrado</p>;

    const isFavorite = store.favorites.some(f => f.id == id && f.type === "vehicles");

    const toggleFavorite = () => {
        if (isFavorite) {
            dispatch({ type: "REMOVE_FAVORITE", payload: { id, type: "vehicles" } });
        } else {
            dispatch({ type: "ADD_FAVORITE", payload: { id: id, name: vehicle.name, type: "vehicles" } });
        }
    };

    return (
        <div className="container mt-5">
            <div className="row mb-5 pb-4">
                <div className="col-md-6 text-center">
                    <img 
                        // CORRECCIÓN: Ruta completa de la imagen
                        src={`https://starwars-visualguide.com{id}.jpg`}
                        className="img-fluid rounded shadow" 
                        alt={vehicle.name}
                        // CORRECCIÓN: Placeholder oficial
                        onError={(e) => e.target.src = "https://starwars-visualguide.com"}
                    />
                </div>
                <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                    <h1 className="display-4 mb-4 font-weight-bold">{vehicle.name}</h1>
                    <p className="lead px-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tellus risus, 
                        dignissim sit amet auctor sit amet, ultrices nec dolor. Maecenas viverra est nibh, 
                        id tristique neque cursus sit amet. Proin vel vestibulum nulla. Aenean sollicitudin 
                        non enim eu molestie. Duis quis risus at enim rhoncus tempus.
                    </p>
                    <div className="mt-3">
                        <button 
                            className={`btn btn-lg ${isFavorite ? 'btn-danger' : 'btn-outline-warning'}`}
                            onClick={toggleFavorite}
                        >
                            <i className={`bi ${isFavorite ? 'bi-heart-fill' : 'bi-heart'} me-2`}></i>
                            {isFavorite ? 'Remove Favorite' : 'Add to Favorites'}
                        </button>
                    </div>
                </div>
            </div>

            {/* TABLA TÉCNICA DE VEHÍCULOS */}
            <div className="row text-danger text-center border-top border-danger pt-4 mt-5">
                <div className="col-2 border-end border-danger">
                    <p className="fw-bold mb-1">Model</p>
                    <p className="text-dark small">{vehicle.model}</p>
                </div>
                <div className="col-2 border-end border-danger">
                    <p className="fw-bold mb-1">Vehicle Class</p>
                    <p className="text-dark small">{vehicle.vehicle_class}</p>
                </div>
                <div className="col-2 border-end border-danger">
                    <p className="fw-bold mb-1">Manufacturer</p>
                    <p className="text-dark small">{vehicle.manufacturer}</p>
                </div>
                <div className="col-2 border-end border-danger">
                    <p className="fw-bold mb-1">Cost (Credits)</p>
                    <p className="text-dark small">{vehicle.cost_in_credits}</p>
                </div>
                <div className="col-2 border-end border-danger">
                    <p className="fw-bold mb-1">Passengers</p>
                    <p className="text-dark small">{vehicle.passengers}</p>
                </div>
                <div className="col-2">
                    <p className="fw-bold mb-1">Cargo Capacity</p>
                    <p className="text-dark small">{vehicle.cargo_capacity}</p>
                </div>
            </div>

            <div className="mt-5 mb-5 text-center">
                <Link to="/" className="btn btn-outline-secondary">Back Home</Link>
            </div>
        </div>
    );
};
