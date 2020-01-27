const axios = require('axios');

const appid = '99f708da5d179945914e0f0727a4b149';

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${appid}&units=metric`)
    console.log("tess");
    return resp.data.main.temp;

}

module.exports = {
    getClima
}