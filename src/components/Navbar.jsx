import useGlobalReducer from "../hooks/useGlobalReducer";
import { useState } from "react";

export const Navbar = () => {
    const { store } = useGlobalReducer();
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <nav className="navbar navbar-light bg-danger text-white">
            <a className="navbar-brand" href="/">
                <img src="https://img.icons8.com/color/512/star-wars.png" width="80" height="80" className="d-inline-block align-top ms-4" alt="" />
            </a>
            
            <div className="dropdown">
                <button 
                    className="btn btn-primary bg-dark text-white rounded-pill border-0 me-4 dropdown-toggle" 
                    type="button" 
                    onClick={() => setShowDropdown(!showDropdown)}
                    aria-expanded={showDropdown}
                >
                    Favorites {store.favorites.length}
                </button>
                
                {showDropdown && (
                    <ul className="dropdown-menu dropdown-menu-end show" style={{minWidth: '300px', maxHeight: '400px', overflowY: 'auto'}}>
                        {store.favorites.length === 0 ? (
                            <li><span className="dropdown-item text-muted">No favorites yet</span></li>
                        ) : (
                            store.favorites.map((fav, index) => (
                                <li key={index}>
                                    <a className="dropdown-item d-flex justify-content-between align-items-center" href={`/${fav.type.slice(0, -1)}/${fav.id}`}>
                                        <span>{fav.name}</span>
                                        <span className="badge bg-secondary">{fav.type}</span>
                                    </a>
                                </li>
                            ))
                        )}
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item text-primary" href="/favorites">View all favorites</a></li>
                    </ul>
                )}
            </div>
        </nav>
    )
}