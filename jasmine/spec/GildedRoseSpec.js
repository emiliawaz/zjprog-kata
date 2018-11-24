var { Shop, Item } = require('../src/original/GildedRose');
//var { Shop, Item } = require('../src/fixed/GildedRose');

describe("Gilded Rose", function () {
  var item,
    items = [];

  beforeEach(function () {
    item = null;
    items = [];
  });

  /* AGED BRIE */
  it("increases the quality of Aged Brie", function () {
    var shop = new Shop([new Item("Aged Brie", 3, 2)]);
    items = shop.updateQuality();

    expect(items[0].sellIn).toBe(2);
    expect(items[0].quality).toBe(3);
  });

  it("does not increase quality of Aged Brie over 50", function () {
    var shop = new Shop([new Item('Aged Brie', 10, 50)]);
    items = shop.updateQuality();

    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(50);
  });

  /* BACKSTAGE PASSES */
  it("increases the quality of Backstage passes", function () {
    var shop = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 12, 20)]);
    items = shop.updateQuality();

    expect(items[0].sellIn).toBe(11);
    expect(items[0].quality).toBe(21);
  });

  it("increases the quality of Backstage passes twice when sellIn <= 10", function () {
    var shop = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20)]);
    items = shop.updateQuality();

    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(22);
  });

  it("increases the quality of Backstage passes triply when sellIn <= 5", function () {
    var shop = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20)]);
    items = shop.updateQuality();

    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(23);
  });

  it("decreases the quality of Backstage passes to 0 after concert", function () {
    var shop = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20)]);
    items = shop.updateQuality();

    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
  });

  it("does not increase quality of Backstage Pass over 50", function () {
    var shop = new Shop([new Item('Aged Brie', 10, 50)]);
    items = shop.updateQuality();

    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(50);
  });

  /* CONJURED ITEM */
  it("decreases the quality of Conjured item twice when sellIn > 0", function () {
    var shop = new Shop([new Item("Conjured Mana Cake", 3, 6)]);
    items = shop.updateQuality();

    expect(items[0].sellIn).toBe(2);
    expect(items[0].quality).toBe(4);
  });

  it("decreases the quality of Conjured item twice when sellIn <= 0", function () {
    var shop = new Shop([new Item("Conjured Mana Cake", 0, 20)]);
    items = shop.updateQuality();

    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(16);
  });

  /* REGULAR ITEM */
  it("decreases the quality of Regular item when sellIn > 0", function () {
    var shop = new Shop([new Item("+5 Dexterity Vest", 10, 20)]);
    items = shop.updateQuality();

    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(19);
  });

  it("decreases the quality of regular item when sellIn <= 0", function () {
    var shop = new Shop([new Item("Elixir of the Mongoose", 0, 7)]);
    items = shop.updateQuality();

    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(5);
  });

  /* SULFURAS */
  it("does not change the quality of Sulfuras", function () {
    var shop = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 80)]);
    items = shop.updateQuality();

    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(80);
  });

});