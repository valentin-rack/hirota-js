// ===== HIROTA PRODUCT CLASS =====
class HirotaProduct {
  constructor(id, name, description, category, price, image) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.category = category;
    this.price = price;
    this.image = image;
  }
}

// ===== PRODUCT INSTANCES =====
const products = [
  // karate-gi  
  new HirotaProduct(
    1,
    "HIROTA Takumi",
    "65% polyester / 35% cotton, 12 oz. – kata karate-gi",
    "karate-gi",
    260,
    "../images/white.png"
  ),
  new HirotaProduct(
    2,
    "HIROTA Tsubasa",
    "95% polyester / 5% elasthan – kumite karate-gi",
    "karate-gi",
    212,
    "../images/white.png"
  ),
  new HirotaProduct(
    3,
    "HIROTA Kū",
    "65 % cotton / 35 % polyester, 7,5 oz. - kumite karate-gi",
    "karate-gi",
    212,
    "../images/white.png"
  ),
  new HirotaProduct(
    4,
    "HIROTA Pinac-kata",
    "70 % cotton / 30 % polyester, 13 oz. - kata karate-gi",
    "karate-gi",
    212,
    "../images/white.png"
  ),
  new HirotaProduct(
    5,
    "HIROTA Pinac-kumite",
    "70 % cotton / 30 % polyester, 11 oz. - kumite karate-gi",
    "karate-gi",
    212,
    "../images/white.png"
  ),
  new HirotaProduct(
    6,
    "HIROTA MH-12",
    "100 % cotton, 7.9 oz. - kumite karate-gi",
    "karate-gi",
    212,
    "../images/white.png"
  ),
  new HirotaProduct(
    7,
    "HIROTA MH-11",
    "100 % cotton, 12 oz. - all-round karate-gi",
    "karate-gi",
    212,
    "../images/white.png"
  ),
  new HirotaProduct(
    8,
    "HIROTA MH-10",
    "100 % cotton, 14 oz. - kata karate-gi",
    "karate-gi",
    212,
    "../images/white.png"
  ),
  // obi 
  new HirotaProduct(
    9,
    "HIROTA B-503",
    "100% cotton, 4.5 cm width - cotton kuro obi",
    "obi",
    60,
    "../images/white.png"
  ),
  new HirotaProduct(
    10,
    "HIROTA B-602",
    "100% silk outer, 4.5 cm width - silk kuro obi",
    "obi",
    110,
    "../images/white.png"
  ),
];
