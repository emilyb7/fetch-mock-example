const fetchMock = require("fetch-mock")
const myFetchFunction = require('./fetch')

describe('makes a request', () => {

    beforeEach(() => {
        fetchMock.get(('end:/my-api'), 200)
    })

    it('makes a request to /my-api', async () => {
        await myFetchFunction()
        expect(fetchMock.called()).toBe(true)
    })
})