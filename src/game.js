class Game {
    constructor (...[title, playerCountBest, avgPlayTime, playerMin, playerMax]) {
        Object.assign(this, {
            title,
            playerCountBest,
            avgPlayTime,
            playerMin,
            playerMax
        });
    }

    static from (props) {
        return Game(props);
    }

    matches (keyword) {
        return this.title.indexOf(keyword) !== -1;
    }
}

module.exports = Game;
