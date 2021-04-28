class Cart{
  constructor(items = []){
    this.items = items;
  }

  empty(){
    this.items = [];
  }

  add(item){
    const foundItem = this.items.find(t => t.id == item.id);

    if (foundItem){
      foundItem.increment();
    }else{
      this.items.push(item);
    }
    
    console.log(this.items);
  }

  totalPrice(){
    // let total = 0;

    // this.items.forEach(item => {
    //   total += item.totalPrice();
    // });

    // return total;
    return Math.round(this.items.reduce((total, currentItem) => total + currentItem.totalPrice(), 0)) * 100 / 100;
  }
}

export default Cart