document.addEventListener('DOMContentLoaded', () => {
  // checkUserAge()
  // helloWithUserName()
  // clickCounter()
  // findElement()
  changeClass()
})

function changeClass() {
  let box = document.querySelector('.box')
  let button = document.querySelector('.changeClass')

  button.addEventListener('click', () => {
    box.classList.toggle('endAnim')
    box.classList.toggle('startAnim')
  })
}

function findElement() {
  let textTag = document.querySelector('p')
  let textClass = document.querySelector('.text')
  let textID = document.querySelector('#text')
  let allTexts = document.querySelectorAll('p')
  let cnt = 0

  allTexts.forEach((text) => {
    text.innerText = `${++cnt}`
  })
}

function clickCounter() {
  let clickButton = document.querySelector('.clickButton')
  let textTag = document.querySelector('p')
  let cnt = 0

  clickButton.addEventListener('click', () => {
    // cnt = cnt + 1
    cnt += 1
    // cnt++

    if (cnt < 10) {
      textTag.innerText = `Ты кликнул всего лишь ${cnt} раз`
    } else if (cnt % 10 == 0) {
      textTag.innerText = `Юбилейный клик!`
    } else if (cnt > 10) {
      textTag.innerText = `Ты кликнул уже ${cnt} раз!`
    }
  })
}

function checkUserAge() {
  let result = prompt('Сколько тебе лет?', 20)

  if (result >= 18) {
    alert(`Доступ разрешён`)
  } else if (result <= 6) {
    alert('Позови родителей')
  } else if (result <= 18) {
    alert(`Доступ запрещён`)
  }
}

function helloWithUserName() {
  let userName = prompt('Как тебя зовут?', 'Аня')

  if (userName == null) {
    alert(`Привет, анон, рад тебя видеть!`)
  } else {
    alert(`Привет, ${userName}, рад тебя видеть!`)
  }
}
