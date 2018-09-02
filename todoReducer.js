export default function todoReducer(state = [], action) {
    const { type, payload } = action;

    switch(type) {
        case 'ADD_TODO':
            return state.concat(payload);
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== payload.id);
        case 'TOGGLE_TODO':
            return state.map(todo => todo.id !== payload.id ? todo : {...todo, complete: !todo.complete });
        default:
            return state;
    }
}
