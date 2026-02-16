import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Favorites = () => {
    const { store, dispatch } = useGlobalReducer();

    const removeFavorite = (id, type) => {
        dispatch({ type: "REMOVE_FAVORITE", payload: { id, type } });
    };

    const getImage = (type, id) => {
        if (type === "characters") return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
        if (type === "planets") return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
        if (type === "vehicles") return `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`;
        return "";
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">My Favorites</h1>
            {store.favorites.length === 0 ? (
                <p className="text-center">No favorites yet. Start adding some!</p>
            ) : (
                <div className="row">
                    {store.favorites.map((fav, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="card h-100">
                                <img 
                                    src={getImage(fav.type, fav.id)} 
                                    className="card-img-top" 
                                    alt={fav.name}
                                    style={{ height: '200px', objectFit: 'cover' }}
                                    onError={(e) => e.target.src = "https://via.placeholder.com/286x400?text=No+img"}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{fav.name}</h5>
                                    <p className="card-text">
                                        <span className="badge bg-secondary">{fav.type}</span>
                                    </p>
                                    <div className="d-flex justify-content-between">
                                        <Link to={`/${fav.type.slice(0, -1)}/${fav.id}`} className="btn btn-primary btn-sm">
                                            View Details
                                        </Link>
                                        <button 
                                            className="btn btn-danger btn-sm"
                                            onClick={() => removeFavorite(fav.id, fav.type)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};