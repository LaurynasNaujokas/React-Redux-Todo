export const gameSelected = (game) => {
    console.log("Game selected: ", game.name);
    return {
        type: "GAME_SELECED",
        payload: game
    };
};
