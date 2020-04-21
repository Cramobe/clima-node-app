const axios = require('axios');


const getClima = async (lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=07491eaf6d11b211225c2bfda57b0568&units=metric`)

    return resp.data.main.temp;

}



module.exports = {
    getClima
}