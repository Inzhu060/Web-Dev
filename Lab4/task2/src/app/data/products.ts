import { Product } from '../models/product.model';

// Временные картинки. Потом заменишь на реальные (как — ниже).
function ph(title: string, n: number) {
  return `https://via.placeholder.com/700x450?text=${encodeURIComponent(title + ' ' + n)}`;
}

function gallery(title: string) {
  return [ph(title, 1), ph(title, 2), ph(title, 3), ph(title, 4)];
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Смартфон Apple iPhone 16 256Gb черный',
    description: 'Apple iPhone 16, 256 GB, black. Link opens Kaspi product page.',
    price: 488035,
    rating: 4.8,
    link: 'https://kaspi.kz/shop/p/apple-iphone-16-256gb-chernyi-123728177/?c=750000000',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h52/h3f/87295472795678.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h45/he1/87295472828446.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h80/hcb/87295472861214.png?format=gallery-medium'
    ],
  },
  {
    id: 2,
    name: 'Ноутбук Apple MacBook Air 13 2020 13.3" / 8 Гб / SSD 256 Гб / macOS / MGN63RU/A',
    description: 'MacBook Air 13 (2020), 8GB RAM, 256GB SSD.',
    price: 419900,
    rating: 4.7,
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hdb/hb3/64213181169694.jpg?format=gallery-medium'
    ],
  },
  {
    id: 3,
    name: 'Наушники Apple AirPods Max 2 золотистый',
    description: 'Over-ear headphones by Apple.',
    price: 293732,
    rating: 4.6,
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-max-2-zolotistyi-128622709/?c=750000000',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pa4/pd5/3527355.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p4c/pcc/3531862.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pce/pcf/3532665.png?format=gallery-medium'
    ],
  },
  {
    id: 4,
    name: 'Смарт-часы Apple Watch SE GPS Gen 3 2025 S/M 40 мм бежевый-бежевый',
    description: 'Apple Watch SE (Gen 3) 2025, 40mm.',
    price: 149900,
    rating: 4.5,
    link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-3-2025-s-m-40-mm-bezhevyi-bezhevyi-146093687/?c=750000000',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p1e/p33/66314384.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p56/p33/66314386.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p72/p33/66314387.png?format=gallery-medium'
    ],
  },
  {
    id: 5,
    name: 'Фотокамера Canon PowerShot G7 X Mark III черный',
    description: 'Compact camera for photo and video.',
    price: 638250,
    rating: 4.4,
    link: 'https://kaspi.kz/shop/p/canon-powershot-g7-x-mark-iii-chernyi-2240141/?c=750000000',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/he0/h0b/63813275058206.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h41/h62/63813277646878.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h82/h27/63813280825374.jpg?format=gallery-medium'
    ],
  },
  {
    id: 6,
    name: 'Мышь Ultra-S ULTMICE11-H2 черный',
    description: 'Computer mouse Ultra-S.',
    price: 9790,
    rating: 4.1,
    link: 'https://kaspi.kz/shop/p/ultra-s-ultmice11-h2-chernyi-146974972/?c=750000000',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p5c/p3b/69280289.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p71/p3e/69280296.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p8d/p3e/69280297.jpg?format=gallery-medium'
    ],
  },
  {
    id: 7,
    name: 'Клавиатура Ultra-S ULTKB03 серый',
    description: 'Keyboard Ultra-S.',
    price: 20642,
    rating: 4.0,
    link: 'https://kaspi.kz/shop/p/ultra-s-ultkb03-seryi-147884231/?c=750000000',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p3d/p48/72176322.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p75/p48/72176324.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pca/p48/72176327.jpg?format=gallery-medium'
    ],
  },
  {
    id: 8,
    name: 'Планшет Apple iPad A16 11 2025 Wi-Fi 11" 6 Гб/128 Гб серебристый',
    description: 'iPad (A16), 11", 6GB/128GB.',
    price: 209292,
    rating: 4.6,
    link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-serebristyi-138199634/?c=750000000',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p85/pe5/37011897.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p69/pe5/37011898.png?format=gallery-medium'
    ],
  },
  {
    id: 9,
    name: 'Монитор 27" Xiaomi Redmi G27Q 240Hz P27QDA-RG черный',
    description: '27-inch monitor, 240Hz.',
    price: 132717,
    rating: 4.3,
    link: 'https://kaspi.kz/shop/p/27-xiaomi-redmi-g27q-240hz-p27qda-rg-chernyi-139856428/?c=750000000',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pf4/pc3/42930761.jpeg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p32/pce/42930764.jpeg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pc8/pca/42930763.jpeg?format=gallery-medium'
    ],
  },
  {
    id: 10,
    name: 'Экшн-камера DJI Pocket 3 Creator Combo',
    description: 'DJI Pocket 3 Creator Combo.',
    price: 295658,
    rating: 4.7,
    link: 'https://kaspi.kz/shop/p/ekshn-kamera-dji-pocket-3-creator-combo-114696264/?c=750000000',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hc9/h4e/84527131131934.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hc4/h1c/84527131197470.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hb8/h71/84527131263006.jpg?format=gallery-medium'
    ],
  },
];
