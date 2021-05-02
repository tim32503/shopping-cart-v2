import Render from './render'

class Cart{
  constructor(){
    this.itemList = []
  }

  add(item){
    const existedItem = this.find(item.id)

    if(existedItem){
      existedItem.increase()
    }else{
      this.itemList.push(item)
      Render.createCartItem(item)
    }

    this.refresh()
  }

  remove(itemId){
    this.itemList = this.itemList.filter(item => item.id != itemId)
    Render.removeCartItem(itemId)
    this.refresh()
  }

  removeAll(){
    this.itemList = []
    Render.removeCart()
    console.log(this.itemList);
    console.log(this.totalPrice);
  }

  find(itemId){
    return this.itemList.find(i => i.id === itemId)
  }

  refresh(){
    this.itemList.forEach(item => {
      Render.updateCartItem(item)
    })
    Render.updateCartTotal(this.totalPrice)
  }

  get totalPrice(){
    if (this.itemList.length <= 0){
      return 0
    }

    return Math.round(this.itemList.map(item => item.subtotal).reduce((accumulator, currentValue) => accumulator + currentValue) * 100) / 100
  }
}

export default Cart