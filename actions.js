import {
    ADD_REVIEW,
    REMOVE_REVIEW,
    ADD_MOVIE,
    TOGGLE_MOVIE,
    REMOVE_MOVIE
} from './actionType';

export const addReview = payload => {
    return {
        type: ADD_REVIEW,
        payload,
    };
};

export const removeReview = payload => {
    return {
        type: REMOVE_REVIEW,
        payload,
    };
};

export const addMovie = payload => {
    return {
        type: ADD_MOVIE,
        payload,
    };
};

export const removeMovie = payload => {
    return {
        type: REMOVE_MOVIE,
        payload,
    };
};

export const toggleMovie = payload => {
    return {
        type: TOGGLE_MOVIE,
        payload,
    };
};
