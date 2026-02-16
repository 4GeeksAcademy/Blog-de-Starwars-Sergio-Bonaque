import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const CharacterDetail = () => {
    const { id } = useParams();
    const { store, dispatch } = useGlobalReducer();
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://swapi.tech/api/people/${id}`)  // ← Sin espacios
            .then(res => res.json())
            .then(data => {
                setCharacter({
                    id: data.result.uid.split("/").pop(),
                    ...data.result.properties
                });
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p className="text-center mt-5">Cargando...</p>;
    if (!character) return <p className="text-center mt-5">Personaje no encontrado</p>;

    const isFavorite = store.favorites.some(f => f.id == id && f.type === "characters");

    const toggleFavorite = () => {
        if (isFavorite) {
            dispatch({ type: "REMOVE_FAVORITE", payload: { id, type: "characters" } });
        } else {
            dispatch({ type: "ADD_FAVORITE", payload: { ...character, type: "characters" } });
        }
    };

    return (
        <div className="container mt-5">
            <Link to="/" className="btn btn-secondary mb-3">← Back</Link>
            <div className="row">
                <div className="col-md-6">
                    <img 
                        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}  // ← Sin espacios
                        className="img-fluid rounded" 
                        alt={character.name}
                        onError={(e) => e.target.src = "https://via.placeholder.com/400x600?text=No+img"}  // ← Sin espacios
                    />
                </div>
                <div className="col-md-6">
                    <h1>{character.name}</h1>
                    <p className="lead">"This is the way"</p>
                    <ul className="list-group">
                        <li className="list-group-item">Height: {character.height}</li>
                        <li className="list-group-item">Mass: {character.mass}</li>
                        <li className="list-group-item">Hair Color: {character.hair_color}</li>
                        <li className="list-group-item">Eye Color: {character.eye_color}</li>
                        <li className="list-group-item">Birth Year: {character.birth_year}</li>
                        <li className="list-group-item">Gender: {character.gender}</li>
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