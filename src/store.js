export const initialStore = () => {
    return {
        favorites: []
    };
};

export default function storeReducer(store, action = {}) {
    switch (action.type) {
        case "ADD_FAVORITE":
            return {
                ...store,
                favorites: [...store.favorites, action.payload]
            };
        case "REMOVE_FAVORITE":
            return {
                ...store,
                favorites: store.favorites.filter(fav => 
                    !(fav.id === action.payload.id && fav.type === action.payload.type)
                )
            };
        default:
            return store;
    }
}
