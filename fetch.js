require('isomorphic-fetch');

const myFetchFunction = () => {
    return fetch('https://whatever.com/my-api').catch(() => { })
}

module.exports = myFetchFunction