const AgedBrieItem = require('./AgedBrieItem');
const BackstagePassItem = require('./BackstagePassItem');
const ConjuredItem = require('./ConjuredItem');
const RegularItem = require('./RegularItem');
const SulfurasItem = require('./SulfurasItem');

class ItemFactory {
  static createItem(item) {
    if (item.name.includes('Aged Brie')) {
      return new AgedBrieItem(item);
    } else if (item.name.includes('Sulfuras, Hand of Ragnaros')) {
      return new SulfurasItem(item);
    } else if (item.name.includes('Backstage passes to a TAFKAL80ETC concert')) {
      return new BackstagePassItem(item);
    } else if (item.name.includes('Conjured')) {
        return new ConjuredItem(item);
    } else {
      return new RegularItem(item);
    }
  }
}

module.exports = ItemFactory;