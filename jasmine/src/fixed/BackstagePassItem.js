class BackstagePassItem {
  constructor(item) {
    this.item = item;
    this.updateQuality();
  }

  updateQuality() {
    this.item.sellIn -= 1;

    let qualityZero = this.item.sellIn <= 0,
      qualityOne = this.item.sellIn > 10,
      qualityTwo = this.item.sellIn > 5 && this.item.sellIn <= 10,
      qualityThree = this.item.sellIn > 0 && this.item.sellIn <= 5,
      qualityFifty = this.item.quality === 50,
      qualityEquals = this.item.quality = this.item.quality;

    if (qualityFifty) return;

    qualityZero ? this.item.quality = 0 : qualityEquals;
    qualityOne ? this.item.quality += 1 : qualityEquals;
    qualityTwo ? this.item.quality += 2 : qualityEquals;
    qualityThree ? this.item.quality += 3 : qualityEquals;
  }
}

module.exports = BackstagePassItem;