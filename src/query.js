const repo = require('./repo');

function index () {
    return repo.get_all();
}

function search (keyword) {
    return repo.search(keyword);
}

module.exports = {
    index,
    search
};
