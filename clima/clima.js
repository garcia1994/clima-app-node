const axios = require('axios')

const getClima = async(lat, lng) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=14f21a13ef9a4213bd1502bc1e4e2cc9`)
    let result = resp.data.main.temp
    return result
}
module.exports = {
    getClima
}