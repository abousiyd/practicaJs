let  XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

let api = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback) {
    let data = new XMLHttpRequest()
    data.open('GET', url_api, true)
    data.onreadystatechange = (e) => {
        if(data.readyState === 4) {
            if(data.status === 200) {
                callback(null, JSON.parse(data.responseText))
            }else {
                const error = new Error('error ' + url_api)
                return callback(error, null)
            }
        }
    }
    data.send()
}

fetchData(api, (error1, data1) => {
    if(error1) return console.log(error1)
    fetchData(api + data1.results[0].id, (error2, data2) => {
        if(error2) return console.log(error2)
        fetchData(data2.origin.url, (error3, data3) => {
            if(error3) return console.log(error3)

            console.log(data1.info.count);
            console.log(data2.name)
            console.log(data3.dimension)
        })
    })
})