let mealPlan = localStorage.getItem('mealPlan')
if (mealPlan) {
    mealPlan = JSON.parse(mealPlan)
} else {
    mealPlan = {
        monday: {
            breakfast: 'unselected',
            lunch: 'unselected',
            dinner: 'unselected'
        },
        tuesday: {
            breakfast: 'unselected',
            lunch: 'unselected',
            dinner: 'unselected'
        },
        wednesday: {
            breakfast: 'unselected',
            lunch: 'unselected',
            dinner: 'unselected'
        },
        thursday: {
            breakfast: 'unselected',
            lunch: 'unselected',
            dinner: 'unselected'
        },
        friday: {
            breakfast: 'unselected',
            lunch: 'unselected',
            dinner: 'unselected'
        },
        saturday: {
            breakfast: 'unselected',
            lunch: 'unselected',
            dinner: 'unselected'
        },
        sunday: {
            breakfast: 'unselected',
            lunch: 'unselected',
            dinner: 'unselected'
        }
    }
}

let recipesList = localStorage.getItem('recipes')
if (recipesList)
    recipesList = JSON.parse(recipesList)

const parent = document.getElementById('myUL')
for (let planKey in mealPlan) {
    const plan = mealPlan[planKey]
    const day = planKey[0].toUpperCase() + planKey.substring(1)
    const select = generateMealOptions()
    parent.innerHTML +=
        `<li>
            <div class="day hide-body"><b>${day}</b></div>
            <div class="day-body">
                <div class="row">
                    <div class="col-25">
                        <label for="country">Breakfast</label>
                    </div>
                    <div class="col-75">
                        ${select}
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="country">Lunch</label>
                    </div>
                    <div class="col-75">
                        ${select}
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="country">Dinner</label>
                    </div>
                    <div class="col-75">
                        ${select}
                    </div>
                </div>
            </div>
        </li>`
}

const meals = document.getElementsByClassName('meal')
for (let meal of meals) {
    // selected saved meal plans
    let day = meal.parentElement.parentElement.parentElement.parentElement.firstElementChild.innerText
    day = day[0].toLowerCase() + day.substring(1)

    let type = meal.parentElement.parentElement.firstElementChild.firstElementChild.innerText
    type = type[0].toLowerCase() + type.substring(1)

    meal.value = mealPlan[day][type]

    // add save when changes are made
    meal.addEventListener('change', () => {
        mealPlan[day][type] = meal.value
        localStorage.setItem('mealPlan', JSON.stringify(mealPlan))
    })
}

function generateMealOptions() {
    const select = document.createElement('select')
    select.id = 'type'
    select.name = 'type'
    select.classList.add('meal')
    select.innerHTML += `<option value="unselected">==== Select Your Meal =====</option>`

    for (let recipe of recipesList) {
        select.innerHTML += `<option value="${recipe.name}">${recipe.name}</option>`
    }

    return select.outerHTML
}








