let products = [
  {
    id: 1,
    title: 'Футболка',
    price: 4500,
    image:
      'https://swg.style/images/detailed/7/%D0%A4%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D0%BA%D0%B0-%D0%B1%D0%B5%D0%BB%D0%B0%D1%8F.jpg'
  },
  {
    id: 2,
    title: 'Кружка',
    price: 2000,
    image: 'https://ffem-baits.com/images/detailed/3/3_ecr7-ot.jpg'
  },
  {
    id: 3,
    title: 'Пин',
    price: 1500,
    image:
      'https://rockbunker.ru/upload/iblock/879/4jjju07uvwh8qwfnocdgqogitqc83sgl.jpg'
  }
]

renderShopList()

function renderShopList() {
  let list = document.querySelector('.shopList')
  list.innerHTML = ''

  products.forEach((product) => {
    let card = document.createElement('div')
    card.classList.add('productCard')

    let id = getProductCount(product.id)

    card.innerHTML = `
      <img class="productImage" src="${product.image}" alt="${product.title}" />
      <div class="productInfo">
        <h3 class="productTitle">${product.title}</h3>
        <p class="productPrice">${product.price}₽</p>
        <div class="productButtons">
          <button onclick="removeFromCart(${product.id})">-</button>
          <p>${id}</p>
          <button onclick="addToCart(${product.id})">+</button>
        </div>
      </div>
    `

    list.appendChild(card)
  })
}

function getCart() {
  return JSON.parse(localStorage.getItem('cart') || '[]')
}

function getProductCount(productId) {
  let cart = getCart()
  let item = cart.find((product) => product.id === productId)
  console.log(item)
  return item ? item.quantity : 0
}

function removeFromCart(productId) {
  let cart = getCart()
  let index = cart.findIndex((product) => product.id === productId)

  if (index != -1) {
    if (cart[index].quantity > 0) {
      cart[index].quantity -= 1
    }
  } else {
    cart.splice(index, 0)
  }

  setCart(cart)
}

function addToCart(productId) {
  let cart = getCart()
  let index = cart.findIndex((product) => product.id === productId)

  if (index != -1) {
    cart[index].quantity += 1
  } else {
    let item = products.find((product) => product.id === productId)

    if (item) {
      cart.push({ ...item, quantity: 1 })
    }
  }

  setCart(cart)
}

function setCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart))
  updateCartCount()
  renderShopList()
}

function updateCartCount() {
  let cart = getCart()
  let count = cart.reduce((sum, item) => sum + (item.quantity || 0), 0)

  if (count != 0) {
    document.querySelector('.cartCount').innerHTML = count
  }
}
