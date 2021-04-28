class Cart{
  constructor(items = []){
    this.items = items;
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
}

export default Cart