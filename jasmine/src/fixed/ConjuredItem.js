class ConjuredItem {
  constructor(item) {
    this.item = item
    this.updateQuality()
  }

  updateQuality() {
    let qualityTwo = this.item.sellIn > 0,
      qualityFour = this.item.sellIn <= 0,
      qualityFifty = this.item.quality === 50,
      qualityEquals = this.item.quality = this.item.quality

    this.item.sellIn -= 1

    if (qualityFifty) return

    qualityTwo ? this.item.quality -= 2 : qualityEquals
    qualityFour ? this.item.quality -= 4 : qualityEquals
  }
}

module.exports = ConjuredItem