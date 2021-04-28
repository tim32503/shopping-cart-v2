import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Cart from './cart'
import CartItem from './cart-item'

const cart = new Cart();

// Callback Function-加入購物車
const addToCart = btn => {
  btn.addEventListener('click', (e) => {
    const card = e.currentTarget.parentElement.parentElement;
    const title = card.querySelector('.card-title').textContent;
    const price = parseFloat(card.querySelector('.price')
                                          .textContent
                                          .replace('$',''));

    const item = new CartItem({ title, price });  
    cart.add(item);           
    // alert(`${title}: ${itemPrice}`);
    // console.log(item);
  });
}

// Callback Function-刪除購物車品項 & 重新計算總價
const deleteCartItem = btn => {
  btn.addEventListener('click', (e) => {
    e.target.parentElement.parentElement.parentElement.remove();

    // 抓取各品項小計
    document.querySelectorAll('.cart-item-table tbody tr td:nth-child(4)').forEach(
      el => console.log(el.textContent)
    )
  });
}

// 購物車-購物按鈕
document.querySelectorAll('.card .btn').forEach(addToCart);

// 購物車-刪除按鈕
document.querySelectorAll('.remove-item-btn').forEach(deleteCartItem);

