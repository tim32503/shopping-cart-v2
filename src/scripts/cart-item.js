class CartItem{
  // 建構子中使用大括弧包起來 = 變數解構
  // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  constructor({id, title, price, quantity = 1}){
    this.id = id;
    this.title = title;
    this.price = price;
    this.quantity = quantity;
  }

  increment(n = 1){
    this.quantity += n;
  }
}

export default CartItem