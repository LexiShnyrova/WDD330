

function getData(url){
        fetch(url)
        .then(result => result.json())
        .then(pokemon =>{
            
            let parent = document.getElementById('allPokes')
            parent.innerHTML = ''

            for(let poke of pokemon.results){
                parent.innerHTML += poke.name + `<br>`
            }
            
            let nextButton = document.createElement('button')
            nextButton.innerText = 'Next'
            nextButton.addEventListener('click', ()=>{
                getData(pokemon.next)
            })

            let previousButton = document.createElement('button')
            previousButton.innerText = 'Previous'
            previousButton.addEventListener('click', ()=>{
                getData(pokemon.previous)
            })

            parent.append(previousButton)
            parent.append(nextButton)
        })
}

getData('https://pokeapi.co/api/v2/pokemon')

let enter = document.getElementById('enter')
enter.addEventListener('click', ()=>{
    const pageNum = document.getElementById('skip').value
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${(pageNum - 1) * 20}&limit=20`
    getData(url)
})
