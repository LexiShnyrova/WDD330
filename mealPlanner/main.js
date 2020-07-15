


const days = document.getElementsByClassName('day')
for (let day of days) {
    day.addEventListener('click', (e) => {
        if (day.classList.contains('hide-body'))
            day.classList.remove('hide-body')
        else
            day.classList.add('hide-body')
    })
}

