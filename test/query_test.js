const test = require('tape');
const query = require('../src/query');

test('#index', t => {
    test('returns all games', assert => {
        const result = query.index();

        assert.equal(result.length, 19);
        assert.end();
    });

    t.end();
});
