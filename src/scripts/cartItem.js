class CartItem{
  
  constructor({id, title, price, quantity = 1}){
    this.id = id
    this.title = title
    this.price = price
    this.quantity = quantity
  }

  get subtotal(){
    return this.price * this.quantity
  }

  increase(n = 1){
    this.quantity += n
  }

  update(quantity = 1){
    this.quantity = quantity
  }
}

export default CartItem