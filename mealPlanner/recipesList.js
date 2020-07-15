

let recipesList = localStorage.getItem('recipes')
if (recipesList) {
    recipesList = JSON.parse(recipesList)
    let parent = document.getElementById('myUL')
    for (let recipe of recipesList) {
        parent.innerHTML += `<li>
            <div class="recipe-name hide-body">${recipe.name}</div>
            <div class="recipe-body">
                <div><span>Ingredient:</span> ${recipe.ingredient}</div>
                <div><span>Type:</span> ${recipe.type}</div>
                <div><span>Instruction:</span> ${recipe.instruction}</div>

            </div>
        </li>`
    }
}

const recipes = document.getElementsByClassName('recipe-name')
for (let recipe of recipes) {
    recipe.addEventListener('click', (e) => {
        if (recipe.classList.contains('hide-body'))
            recipe.classList.remove('hide-body')
        else
            recipe.classList.add('hide-body')
    })
}