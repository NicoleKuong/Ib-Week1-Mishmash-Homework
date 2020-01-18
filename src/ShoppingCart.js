class ShoppingCart {
  constructor() {
    this.items = [];
  }

  getItems() {
    return this.items;
  }

  addItem(itemName, quantity, price) {
    const item = {
      name: itemName,
      quantity: quantity,
      pricePerUnit: price
    };
    return this.items.push(item);
  }

  clear() {
    return (this.items = []);
  }

  total() {
    return this.items.reduce((totalCost, currentItem) => {
      return totalCost + currentItem.quantity * currentItem.pricePerUnit;
    }, 0);
  }
}

module.exports = ShoppingCart;
