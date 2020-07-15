const addBtn = document.getElementById('addBtn')

addBtn.addEventListener('click', () => {
    const nameEl = document.getElementById('name')
    const ingredientEl = document.getElementById('ingredient')
    const typeEl = document.getElementById('type')
    const instructionEl = document.getElementById('instruction')

    const name = document.getElementById('name').value
    const ingredient = document.getElementById('ingredient').value
    const type = document.getElementById('type').value
    const instruction = document.getElementById('instruction').value

    let recipes = localStorage.getItem('recipes')
    if (recipes) {
        recipes = JSON.parse(recipes)
    } else {
        recipes = []
    }

    recipes.push({ name, ingredient, type, instruction })
    localStorage.setItem('recipes', JSON.stringify(recipes))

    nameEl.value = ""
    ingredientEl.value = ""
    typeEl.value = "desert"
    instructionEl.value = ""
})


