// Quake View handler
export default class QuakesView {
    renderQuakeList(quakeList, listElement) {
        //build a list of the quakes...include the title and time of each quake then append the list to listElement. You should also add the id of the quake record as a data- property to the li. ie. <li data-id="">
        listElement.innerHTML = quakeList.features
            .map(quake => {
                return `<li data-id=${quake.id}>${quake.properties.title}, ${new Date(
                    quake.properties.time
                )}</li>`;
            })
            .join('');
    }
    renderQuake(quake, element) {
        element.innerHTML = ""
        const quakeProperties = Object.entries(quake.properties);
        for (let property of quakeProperties) {
            if (!property[1])
                continue
            element.innerHTML += `<li>${property[0]}: ${property[1]}</li>`
        }

        console.log(quakeProperties)
        // for the provided quake make a list of each of the properties associated with it. Then append the list to the provided element. Notice the first line of this method. Object.entries() is a slick way to turn an object into an array so that we can iterate over it easier! 
    }
}