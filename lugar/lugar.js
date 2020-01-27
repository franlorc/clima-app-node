const axios = require('axios');


const getLugarLatLng = async(dir) => {

    const encoderUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encoderUrl}`,
        headers: { 'x-rapidapi-key': '4ae2fe9611msh334269f163e1699p13dfc2jsn04a04bf57a3b' }
    });

    instance.get()
        .then(resp => {
            //console.log(resp.data.Results[0]);
        })
        .catch(err => {
            console.log('Error!!! ', err);
        });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}