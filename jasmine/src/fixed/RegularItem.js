class RegularItem {
  constructor(item) {
    this.item = item
    this.updateQuality()
  }

  updateQuality() {
    let qualityOne = this.item.sellIn > 0,
      qualityTwo = this.item.sellIn <= 0,
      qualityFifty = this.item.quality === 50,
      qualityEquals = this.item.quality = this.item.quality

    this.item.sellIn -= 1

    if (qualityFifty) return

    qualityOne ? this.item.quality -= 1 : qualityEquals
    qualityTwo ? this.item.quality -= 2 : qualityEquals
  }
}

module.exports = RegularItem