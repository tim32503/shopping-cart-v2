import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Cart from './cart'
import CartItem from './cartItem'

const cart = new Cart()

const addItem = btn => {
  btn.addEventListener('click', (e) => {
    const card = e.currentTarget.parentElement.parentElement
    const id = card.dataset['productId']
    const title = card.querySelector('.card-title').textContent
    const price = parseFloat(card.querySelector('.price').textContent.replace('$', ''))
    const item = new CartItem({id, title, price})
    
    cart.add(item)
  })
}

const updateItem = event => {
  if(event.target.tagName === 'INPUT'){
    const itemId = event.target.parentElement.parentElement.dataset['productId']
    const item = cart.find(itemId)
    item.update(event.target.value)
    cart.refresh()
  }
}

const removeItem = event => {
  const tagName = event.target.tagName
  let itemId;
  if(tagName === 'BUTTON'){
    itemId = event.target.parentElement.parentElement.dataset['productId']
  }else if(tagName === 'I'){
    itemId = event.target.parentElement.parentElement.parentElement.dataset['productId']
  }

  if(itemId != undefined){
    cart.remove(itemId)
  }
}

const removeCart = () => {
  cart.removeAll()
  cart.refresh()
}

// 商品列表-商品購買按鈕
document.querySelectorAll('.card .btn').forEach(addItem)

// 購物車-更新商品數量
document.querySelector('.cart-item-table tbody').addEventListener('change', updateItem)

// 購物車-刪除指定商品
document.querySelector('.cart-item-table tbody').addEventListener('click', removeItem)

// 購物車-清空購物車
document.querySelector('.empty-cart').addEventListener('click', removeCart)
