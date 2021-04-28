const buildItemList = cart => {
  return cart.items.map(item => {
    return `<tr>
          <td>${item.title}</td>
          <td><input type="number" class="quantity" value="${item.quantity}"></td>
          <td>$${item.price}</td>
          <td>$${item.totalPrice()}</td>
          <td><button class="remove-item-btn btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button></td>
        </tr>`
  }).join('');
  
}

const calculateTotalPrice = () => {
  const eachTotal = document.querySelectorAll('.tbody tr td:nth-child(4)');

  eachTotal.map(total => total.replace('$', '')).forEach(el => parseFloat(el));
}

export { buildItemList }