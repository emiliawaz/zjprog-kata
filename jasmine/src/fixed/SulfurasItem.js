class SulfurasItem {
  constructor(item) {
    this.item = item
    this.updateQuality()
  }

  updateQuality() {
    let sellInZero = this.item.sellIn === 0

    sellInZero ? this.item.sellIn = 0 : this.item.sellIn = this.item.sellIn

    this.item.quality = 80
  }
}

module.exports = SulfurasItem