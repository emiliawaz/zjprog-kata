class AgedBrieItem {
  constructor(item) {
    this.item = item
    this.updateQuality()
  }

  updateQuality() {
    let qualityFifty = this.item.quality === 50

    this.item.sellIn -= 1

    if (qualityFifty) return

    this.item.quality += 1
  }
}

module.exports = AgedBrieItem