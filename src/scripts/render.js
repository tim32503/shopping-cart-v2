const tbody = document.querySelector('.cart-item-table tbody')
let tr, td, input, btn, i;

class Render{
  static createCartItem(cartItem){
    tr = document.createElement('tr')
    tr.dataset['productId'] = cartItem.id

    td = document.createElement('td')
    td.textContent = cartItem.title
    tr.appendChild(td)

    td = document.createElement('td')
    input = document.createElement('input')
    input.type = 'number'
    input.classList.add('quantity')
    input.setAttribute('min', '0')
    input.value = cartItem.quantity
    td.appendChild(input)
    tr.appendChild(td)

    td = document.createElement('td')
    td.textContent = `$${cartItem.price}`
    tr.appendChild(td)

    td = document.createElement('td')
    td.classList.add('subtotal')
    td.textContent = `$${cartItem.subtotal}`
    tr.appendChild(td)

    td = document.createElement('td')
    btn = document.createElement('button')
    i = document.createElement('i')
    i.classList.add('fas', 'fa-trash-alt')
    btn.classList.add('remove-item-btn', 'btn', 'btn-danger', 'btn-sm')
    btn.appendChild(i)
    td.appendChild(btn)
    tr.appendChild(td)

    tbody.appendChild(tr)
  }

  static updateCartItem(cartItem){
    const item = tbody.querySelector(`tr[data-product-id="${cartItem.id}"]`)

    // 更新數量
    item.querySelector('.quantity').value = cartItem.quantity

    // 更新小計
    item.querySelector('.subtotal').textContent = `$${cartItem.subtotal}`
  }

  static updateCartTotal(total){
    document.querySelector('.total-price').textContent = `$${total}`
  }

  static removeCartItem(itemId){
    tbody.querySelector(`tr[data-product-id='${itemId}']`).remove()
  }

  static removeCart(){
    tbody.innerHTML = ""
  }
}

export default Render