'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  discount: 0,

  add(item, price, amount = 1) {
    const userItemArr = {
      itemName: item,
      itemPrice: price,
      itemAmount: amount,
    };

    this.items.push(userItemArr);
    this.increaseCount(amount);
    this.calculateItemPrice();
  },

  increaseCount(amount) {
    this.count += amount;
  },

  calculateItemPrice() {
    const total = this.items.reduce((acc, item) =>
      acc + (item.itemPrice * item.itemAmount), 0);
    this.totalPrice = total - (total * (this.discount / 100));
  },

  set setDiscount(promocode) {
    if (promocode === 'METHED') {
      this.discount = 15;
    } else if (promocode === 'NEWYEAR') {
      this.discount = 21;
    }
  },

  get finalPrice() {
    return this.totalPrice;
  },

  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
    this.discount = 0;
  },

  print() {
    console.log(JSON.stringify(this.items));
    console.log(`Общая стоимость корзины: ${this.totalPrice} руб.
     с учетом скидки в ${this.discount}%`);
  },
};

cart.setDiscount = 'METHED';

cart.add('Будильник', 1700, 2);
cart.add('Ночник', 228, 1);
cart.add('Снотворное', 500, 10);

cart.print();
