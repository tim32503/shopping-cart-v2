class Cart{
  constructor(items = []){
    this.items = items;
  }

  add(item){
    if(this.items.includes(item)){
      this.items
    }
    this.items.push(item);
    console.log(this.items);
  }
}

export default Cart