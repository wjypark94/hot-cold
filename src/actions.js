export const GENERATE_AURAL_UPDATE = 'GENERATE_AURAL_UPDATE';
export const generateAuralUpdate = () => ({
    type: GENERATE_AURAL_UPDATE
});

export const RESTART_GAME = 'RESTART_GAME';
export const restartGame = correctAnswer => ({
    type: RESTART_GAME,
    correctAnswer
});


export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = guess => ({
    type: MAKE_GUESS,
    guess
});

export const SHOW_GAME_MESSAGE = "SHOW_GAME_MESSAGE";
export const showGameMessage = () => ({
    type: SHOW_GAME_MESSAGE
})

export const HIDE_GAME_MESSAGE = "HIDE_GAME_MESSAGE";
export const hideGameMessage = () => ({
    type: HIDE_GAME_MESSAGE
})