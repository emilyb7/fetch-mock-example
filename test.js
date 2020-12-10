const fetchMock = require("fetch-mock")
const { myFetchFunction, myFetchFunctionWithQuery } = require('./fetch')

describe('makes a request', () => {

    afterEach(() => fetchMock.reset())

    it('makes a request to /my-api', async () => {
        fetchMock.get(('end:/my-api'), 200)
        await myFetchFunction()
        expect(fetchMock.called()).toBe(true)
    })

    it('makes a request to /my-api with a query', async () => {
        fetchMock.get(({ url: /my-api/, query: { q: 1 } }), 200)
        await myFetchFunctionWithQuery()
        expect(fetchMock.called()).toBe(true)
    })
})