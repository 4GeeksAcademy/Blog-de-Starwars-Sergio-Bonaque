export const initialStore = () => {
  return {
    message: null,
    favorites: [],
    todos: [
      { id: 1, title: "Make the bed", background: null },
      { id: 2, title: "Do my homework", background: null }
    ]
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "add_task": {
      const { id, color } = action.payload;
      return {
        ...store,
        todos: store.todos.map((todo) =>
          todo.id === id ? { ...todo, background: color } : todo
        ),
      };
    }

    case "ADD_FAVORITE": {
      return {
        ...store,
        favorites: [...store.favorites, action.payload],
      };
    }

    case "REMOVE_FAVORITE": {
      const { id, type } = action.payload;
      return {
        ...store,
        favorites: store.favorites.filter(
          (fav) => !(fav.id === id && fav.type === type)
        ),
      };
    }

    default:
      throw new Error("Unknown action.");
  }
}