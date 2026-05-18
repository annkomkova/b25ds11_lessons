let info = [
  {
    date: '1 мая, пятница',
    time: ['13:00', '16:00', '19:00'],
    name: 'Экскурсия по музею',
    description:
      'Красиво и увлекательно об истории освещения Москвы. Вы прогуляетесь по вечерним улицам столицы разных эпох. Интересно и взрослым, и детям.',
    duration: '1 час'
  },
  {
    date: '9 мая, суббота',
    time: ['15:00'],
    name: 'Семейная экскурсия по музею с мастер классом по изготовлению свечей',
    description:
      'Красиво и увлекательно об истории освещения Москвы. Вы прогуляетесь по вечерним улицам столицы разных эпох. Интересно и взрослым, и детям.',
    duration: '1 час 20 минут'
  },
  {
    date: '15 мая, пятница',
    time: ['19:00'],
    name: 'Презентация выставки страховых досок',
    description:
      'В настоящее время в нашем музее проходит выставка страховых досок, на которой представлено 54 экспоната. ',
    duration: '1 час'
  },
  {
    date: '1 мая, пятница',
    time: ['13:00', '16:00', '19:00'],
    name: 'Экскурсия по музею',
    description:
      'Красиво и увлекательно об истории освещения Москвы. Вы прогуляетесь по вечерним улицам столицы разных эпох. Интересно и взрослым, и детям.',
    duration: '1 час'
  },
  {
    date: '9 мая, суббота',
    time: ['15:00'],
    name: 'Семейная экскурсия по музею с мастер классом по изготовлению свечей',
    description:
      'Красиво и увлекательно об истории освещения Москвы. Вы прогуляетесь по вечерним улицам столицы разных эпох. Интересно и взрослым, и детям.',
    duration: '1 час 20 минут'
  },
  {
    date: '15 мая, пятница',
    time: ['19:00'],
    name: 'Презентация выставки страховых досок',
    description:
      'В настоящее время в нашем музее проходит выставка страховых досок, на которой представлено 54 экспоната. ',
    duration: '1 час'
  }
]

createAfishaCards(info)

function createAfishaCards(info) {
  info.forEach((item) => {
    let date = document.createElement('p')
    date.classList.add('afishaDate')
    date.innerText = item.date

    let header = document.createElement('h3')
    header.classList.add('afishaHeader')
    header.innerText = item.name

    let description = document.createElement('p')
    description.classList.add('afishaDescription')
    description.innerText = item.description

    let duration = document.createElement('p')
    duration.classList.add('afishaDuration')
    duration.innerText = item.duration

    let time = item.time
    let timeWrapper = document.createElement('div')
    timeWrapper.classList.add('afishaTimeWrapper')

    time.forEach((timeItem) => {
      let timeEl = document.createElement('span')
      timeEl.classList.add('afishaTimeEl')
      timeEl.innerText = timeItem
      timeWrapper.appendChild(timeEl)
    })

    let card = document.createElement('div')
    card.classList.add('afishaCard')

    card.appendChild(date)
    card.appendChild(duration)
    card.appendChild(header)
    card.appendChild(description)
    card.appendChild(timeWrapper)

    document.querySelector('.afisha').appendChild(card)
  })
}
