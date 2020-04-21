
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// argv.direccion

// lugar.getLugarLatLng(argv.direccion)
//     .then( console.log )
//     .catch( e => console.log(e));


// clima.getClima(40.750000, -74.000000).then( console.log).catch(console.log)

const getInfo = async (direccion) => {

    try {
        const data = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(data.lat, data.lng);
        
        return `El clima de ${data.direccion} es de ${ temp }`;

    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;   
    }    

}

getInfo(argv.direccion).then(console.log).catch(console.log);

