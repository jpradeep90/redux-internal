import {
    ADD_REVIEW,
    REMOVE_REVIEW,
    ADD_MOVIE,
    TOGGLE_MOVIE,
    REMOVE_MOVIE
} from './actionType';

export function movieReducer(state = [], action) {
    const { type, payload } = action;

    switch(type) {
        case ADD_MOVIE:
            return state.concat(payload);
        case REMOVE_MOVIE:
            return state.filter(movie => movie.id !== payload.id);
        case TOGGLE_MOVIE:
            return state.map(movie => movie.id !== payload.id ? movie : {...movie, complete: !movie.complete });
        default:
            return state;
    }
}

export function reviewReducer(state = [], action) {
    const { type, payload } = action;

    switch(type) {
        case ADD_REVIEW:
            return state.concat(payload);
        case REMOVE_REVIEW:
            return state.filter(review => review.id !== payload.id);
        default:
            return state;
    }
}
