const ItemFactory = require('./ItemFactory');

class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    this.items
      .map(ItemFactory.createItem);

    return this.items;
  }
}
module.exports = {
  Shop,
  Item
}