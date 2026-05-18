flipCard()
moveProgressBar()
drawSVG()
getRandomImage()
changeImgByCursor()
animatePopup()
// moveCursor()
eyes()
parallax()

function parallax() {
  let section = document.querySelector('.parallax')
  let circles = document.querySelectorAll('.circle')

  window.addEventListener('scroll', () => {
    let rect = section.getBoundingClientRect()
    let vh = window.innerHeight

    let progress = (vh - rect.top) / (vh + rect.height)
    let p = Math.max(0, Math.min(1, progress))

    let moveY = (p - 0.6) * 400
    let moveX = (p - 0.6) * 400
    let scale = p * 0.3 + 1

    circles.forEach((circle) => {
      circle.style.transform = `translate(${-moveX}px, ${-moveY}px) scale(${scale})`
    })
  })
}

function eyes() {
  let dots = document.querySelectorAll('.dot')

  document.addEventListener('mousemove', (event) => {
    dots.forEach((dot) => {
      let rect = dot.getBoundingClientRect()
      let dotX = rect.width / 2 + rect.left
      let dotY = rect.height / 2 + rect.top

      let dX = event.clientX - dotX
      let dY = event.clientY - dotY
      let angle = Math.atan2(dY, dX)

      let deg = (180 / Math.PI) * angle

      dot.style.transform = `rotate(${deg}deg)`
    })
  })
}

function moveCursor() {
  let cursor = document.querySelector('.cursor')

  document.addEventListener('mousemove', (event) => {
    let x = event.pageX
    let y = event.pageY

    cursor.style.top = `${y}px`
    cursor.style.left = `${x}px`
  })
}

function animatePopup() {
  let button = document.querySelector('.randomCoordsButton')
  let popup = document.querySelector('.popup')
  let section = document.querySelector('.header')
  let container = document.querySelector('.popupContainer')

  let sectionW = section.getBoundingClientRect().width
  let sectionH = section.getBoundingClientRect().height

  let containerW = container.getBoundingClientRect().width
  let containerH = container.getBoundingClientRect().height

  let widthRange = sectionW - containerW
  let heightRange = sectionH - containerH

  button.addEventListener('click', () => {
    console.log(containerW, containerH)

    //анимация "убегающей" кнопки
    container.style.position = 'absolute'
    container.style.top = `${Math.random() * heightRange}px`
    container.style.left = `${Math.random() * widthRange}px`

    //анимация попапа
    let popupEl = document.createElement('div')
    popupEl.classList.add('popupEl')
    popupEl.innerText = '🤍'

    popup.appendChild(popupEl)

    setTimeout(() => {
      popupEl.remove()
    }, 2000)
  })
}

function changeImgByCursor() {
  let coordX = document.querySelector('.coordX')
  let coordY = document.querySelector('.coordY')
  let viewport = document.querySelector('.viewport')
  let box = document.querySelector('.imgBox')

  let img0 = document.querySelector('.blickImg0')
  let img1 = document.querySelector('.blickImg1')
  let img2 = document.querySelector('.blickImg2')
  let img3 = document.querySelector('.blickImg3')

  document.addEventListener('mousemove', (event) => {
    let cursorX = event.pageX
    let cursorY = event.pageY

    coordX.innerText = `cursor X: ${cursorX}`
    coordY.innerText = `cursor Y: ${cursorY}`

    let vieportW = document.documentElement.clientWidth
    let vieportH = document.documentElement.clientHeight
    viewport.innerText = `width: ${vieportW}px; height: ${vieportH}px`

    let centerX = parseInt(vieportW / 2)
    let centerY = parseInt(vieportH / 2)

    if (cursorX < centerX && cursorY < centerY) {
      img0.style.opacity = '1'
    } else {
      img0.style.opacity = '0'
    }
    if (cursorX > centerX && cursorY < centerY) {
      img1.style.opacity = '1'
    } else {
      img1.style.opacity = '0'
    }
    if (cursorX > centerX && cursorY > centerY) {
      img2.style.opacity = '1'
    } else {
      img2.style.opacity = '0'
    }
    if (cursorX < centerX && cursorY > centerY) {
      img3.style.opacity = '1'
    } else {
      img3.style.opacity = '0'
    }
  })
}

function getRandomImage() {
  let button = document.querySelector('.randomImageButton')
  let image = document.querySelector('.randomImage img')

  // Math.random() * (max - min) + min
  button.addEventListener('click', () => {
    let randomNumber = Math.floor(Math.random() * 8 + 1)

    image.src = `images/smeshariki/smesharik${randomNumber}.webp`
  })
}

function drawSVG() {
  let star = document.querySelector('.star')
  let length = star.getTotalLength()

  star.style.strokeDasharray = length
  star.style.strokeDashoffset = length

  window.addEventListener('scroll', () => {
    let scrollPercent =
      (document.body.scrollTop + document.documentElement.scrollTop) /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight)

    let draw = length * scrollPercent
    star.style.strokeDashoffset = length - draw
  })
}

function moveProgressBar() {
  let button = document.querySelector('.progressBarButton')
  let number = document.querySelector('.progressNumber')
  let progress = document.querySelector('.progress')
  let width = 0
  let isActive = true

  button.addEventListener('click', () => {
    if (isActive) {
      setInterval(() => {
        progress.style.opacity = 1
        if (width < 100) {
          width++
          progress.style.width = width + '%'
          number.innerText = width + '%'
        } else {
          isActive = false
        }
      }, 50)
    }
  })
}

function flipCard() {
  let cards = document.querySelectorAll('.flipCardWrapper')

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.toggle('flip')
    })
  })
}
