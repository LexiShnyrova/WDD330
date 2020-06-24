import { getJSON, getLocation } from './utilities.js';
import QuakesControler from './QuakesController.js'

async function myFunction() {
    let baseUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';
}

myFunction()

let myQuake = new QuakesControler('quakeList')
const quakes = document.getElementById('quakeList').children

for (let quake of quakes) {
    quake.addEventListener('click', () => {
        myQuake.getQuakeDetails(quake.id)
    })
}