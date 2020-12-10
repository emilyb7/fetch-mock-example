require('isomorphic-fetch');

const myFetchFunction = () => {
    return fetch('https://whatever.com/my-api').catch(() => { })
}

const myFetchFunctionWithQuery = () => {
    return fetch('https://whatever.com/my-api?q=1').catch(() => { })
}

module.exports = { myFetchFunction, myFetchFunctionWithQuery }