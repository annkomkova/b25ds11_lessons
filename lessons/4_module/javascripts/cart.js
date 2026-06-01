renderCart()
buyOnClick()

function getCart() {
  return JSON.parse(localStorage.getItem('cart') || '[]')
}

function renderCart() {
  let cart = getCart()
  let container = document.querySelector('.cartItems')
  let totalPrice = document.querySelector('.totalPrice')

  container.innerHTML = ''

  if (cart.length == 0) {
    container.innerHTML = '<p>Корзина пуста</p>'
    totalPrice.innerHTML = ''
  }

  let total = 0
  cart.forEach((item) => {
    let quantity = item.quantity || 0
    let itemPrice = (item.price || 0) * quantity
    total += itemPrice

    let itemCard = document.createElement('div')
    itemCard.classList.add('itemCard')

    itemCard.innerHTML = `
      <img class="itemImage" src="${item.image}" alt="${item.title}" />
      <div class="itemInfo">
        <h3 class="itemTitle">${item.title}</h3>
        <p class="itemPrice">${item.price}₽</p>
        <h4>${quantity} шт.</h4>
        <button onclick="removeFromCart(${item.id})">🗑️</button>
      </div>
    `

    console.log(item.title)

    container.appendChild(itemCard)
  })

  totalPrice.innerHTML = `Итого: ${total} руб.`
}

function removeFromCart(productId) {
  let cart = getCart()
  cart = cart.filter((product) => product.id !== productId)

  localStorage.setItem('cart', JSON.stringify(cart))
  renderCart()
}

function buyOnClick() {
  let button = document.querySelector('.cartButton')
  let overlay = document.querySelector('.buy')

  button.addEventListener('click', () => {
    overlay.style.display = 'flex'
  })

  overlay.addEventListener('click', () => {
    overlay.style.display = 'none'
  })
}
