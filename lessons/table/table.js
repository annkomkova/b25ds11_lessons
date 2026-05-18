addNewRow()

function addNewRow() {
  let button = document.querySelector('button')

  button.addEventListener('click', () => {
    let week = document.querySelector('input[name="week"]').value
    let theme = document.querySelector('input[name="theme"]').value
    let date = document.querySelector('input[name="date"]').value
    let subject = document.querySelector('select[name="subject"]').value
    let type = document.querySelector('select[name="type"]').value

    let tableRow = document.createElement('tr')

    let weekTag = document.createElement('td')
    let themeTag = document.createElement('td')
    let dateTag = document.createElement('td')
    let subjectTag = document.createElement('td')
    let typeTag = document.createElement('td')

    weekTag.innerText = week
    themeTag.innerText = theme
    dateTag.innerText = date

    let subjectColor
    if (subject == 'Технологии') {
      subjectColor = 'red'
    } else {
      subjectColor = 'blue'
    }
    subjectTag.innerHTML = `<span class='${subjectColor}'>${subject}<span/>`

    let typeColor
    if (type == 'Ревью') {
      typeColor = 'red'
    } else if (type == 'Лекция') {
      typeColor = 'yellow'
    } else if (type == 'Воркшоп') {
      typeColor = 'green'
    } else {
      typeColor = 'violet'
    }
    typeTag.innerHTML = `<span class='${typeColor}'>${type}<span/>`

    tableRow.appendChild(weekTag)
    tableRow.appendChild(themeTag)
    tableRow.appendChild(subjectTag)
    tableRow.appendChild(dateTag)
    tableRow.appendChild(typeTag)
    tableRow.appendChild(document.createElement('td'))

    document.querySelector('tbody').appendChild(tableRow)
  })
}
