const apiKey = 'AIzaSyA2aNF_jfiHbKp8zEedSNweFkkIKKmvbyo'
const searchEngineId = 'f0a01621fcd2642c2'
const googleSearchApi = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=`

const findAllByQuery = async (clientQuery) => new Promise(async (res, rej) => {
    const results = await fetch(`${googleSearchApi}${clientQuery}`)
        .then(res => res.json())
        .catch(err => {
            console.warn('[API Response Error]: ', err)
            return rej(err)
        })
        .then(data => {
            if (data.error) {
                console.warn('[API Response Error]: ', data.error)
                return rej(data)
            }
            return data.items
        })

    res(results)
})

const findRandomByQuery = async (clientQuery) => new Promise(async (res, rej) => {
    const results = await fetch(`${googleSearchApi}${clientQuery}`)
        .then(res => res.json())
        .catch(err => {
            console.warn('[API Response Error]: ', err)
            return rej(err)
        })
        .then(data => {
            if (data.error) {
                console.warn('[API Response Error]: ', data.error)
                return rej(data)
            }
            const resultsLength = data.items.length
            const randomIndex = Math.floor(Math.random() * resultsLength)
            return data.items[randomIndex]
        })

    res(results)
})

module.exports = {
    findAllByQuery,
    findRandomByQuery
}
