const AgedBrieItem = require('./AgedBrieItem')
const BackstagePassItem = require('./BackstagePassItem')
const ConjuredItem = require('./ConjuredItem')
const RegularItem = require('./RegularItem')
const SulfurasItem = require('./SulfurasItem')

class ItemFactory {
  static createItem(item) {
    if (item.name.includes('Aged Brie')) {
      return new AgedBrieItem(item)
    }
  }
}

module.exports = ItemFactory