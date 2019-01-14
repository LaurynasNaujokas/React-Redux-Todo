export const gameSelected = (game) => {
    console.log("Game selected: ", game.name);
    return {
        type: "GAME_SELECTED",
        payload: game
    };
};

export const movieSelected = (movie) => {
    console.log("movie seleced: ", movie.name);
    return{
        type: "MOVIE_SELECTED",
        payload: movie
    };
};