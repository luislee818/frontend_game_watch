const test = require('tape');
const Game = require('../src/game');

const before = test;

test('#constructor', t => {
    let game;

    before('before', (assert) => {
        game = new Game('Terraforming Mars', null, 120, 2, 5),
        assert.end();
    });

    test('saves title', assert => {
        assert.equal(game.title, 'Terraforming Mars');
        assert.end();
    });

    t.end();
});

test('#matches', t => {
    let game;

    before('before', (assert) => {
        game = new Game('Terraforming Mars', null, 120, 2, 5),
        assert.end();
    });

    test('matches "Mars"', assert => {
        assert.equal(game.matches('Mars'), true);
        assert.end();
    });

    test('does not match "Marshall"', assert => {
        assert.equal(game.matches('Marshall'), false);
        assert.end();
    });

    t.end();
});
