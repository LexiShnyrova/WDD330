import { getJSON, getLocation } from './utilities.js';

async function myFunction() {
    let baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

    // baseUrl = await getLocation()
    let location = await getLocation()
    let latitude = location.coords.latitude
    let longitude = location.coords.longitude
    console.log(latitude)

    baseUrl += "&latitude=" + latitude + "&longitude=" + longitude + "&maxradiuskm=100"
    console.log(baseUrl)
}

myFunction()
