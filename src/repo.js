const Game = require('./game');

const gamesInfo = [
    ['Terraforming Mars', null, 120, 2, 5],
    ['Twilight Imperium 3rd', 6, 600, 3, 8],
    ['Twilight Struggle', 2, 240, 2, 2],
    ['Puerto Rico', 4, 120, 3, 5],
    ['Monopoly', 0, 180, 2, 6],
    ['Shogun', null, 240, 3, 5],
    ['Azuchi Castle', 3, 30, 2, 4],
    ['Through the Ages', 3, 240, 2, 4],
    ['Concordia', 4, 120, 3, 5],
    ['Cosmic Encounter', 5, 180, 3, 8],
    ['Cacao', 4, 45, 2, 4],
    ['Carcassonne', 4, 60, 2, 5],
    ['Battle Line', 2, 30, 2, 2],
    ['Suburbia', 4, 120, 2, 4],
    ['Mage Knight', 3, 240, 1, 4],
    ['Sun Tzu', 2, 60, 2, 2],
    ['Pandemic', 4, 75, 2, 4],
    ['Blood Rage', 4, 120, 2, 4],
    ['Robinson Crusoe', 4, 180, 1, 5]
];

const games = gamesInfo.map(Game.from);

function get_all () {
    return games;
}

function search (keyword) {
    return games.filter(game => game.matches(keyword));
}

module.exports = {
    get_all,
    search
};
