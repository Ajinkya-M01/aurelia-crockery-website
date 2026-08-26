// ============================================================
// AURELIA — Products Data (Single source of truth)
// Replace with actual product data here to update the site
// ============================================================
import royalIvory      from '../assets/product_royal_ivory_1787763274799.jpg';
import heritageTea     from '../assets/product_heritage_tea_1787763367613.jpg';
import imperialBlack   from '../assets/product_imperial_black_1787763385566.jpg';
import pearlWhite      from '../assets/product_pearl_white_1787763403106.jpg';
import champagneTea    from '../assets/product_champagne_tea_1787763584320.jpg';
import noirPlatter     from '../assets/product_noir_platter_1787763621248.jpg';

export const products = [
  {
    id: 1,
    slug: 'royal-ivory-dinner-set',
    name: 'Royal Ivory Dinner Set',
    category: 'Dinnerware',
    material: 'Porcelain',
    pieces: '24 Pieces',
    price: '₹4,999',
    priceNum: 4999,
    image: royalIvory,
    description:
      'A refined porcelain dinner set designed for elegant everyday dining and special occasions. The subtle gold rim finish elevates every meal into an experience.',
    specs: [
      { key: 'Material', val: 'Porcelain' },
      { key: 'Pieces', val: '24' },
      { key: 'Capacity', val: '6 Person Set' },
      { key: 'Care', val: 'Dishwasher Safe' },
      { key: 'Finish', val: 'Fine Gold Rim' },
    ],
    amazonUrl: 'https://www.amazon.in/',
    flipkartUrl: 'https://www.flipkart.com/',
    featured: true,
    collectionId: 'dinnerware',
  },
  {
    id: 2,
    slug: 'heritage-gold-tea-set',
    name: 'Heritage Gold Tea Set',
    category: 'Tea & Coffee',
    material: 'Fine Bone China',
    pieces: '12 Pieces',
    price: '₹3,499',
    priceNum: 3499,
    image: heritageTea,
    description:
      'A luxurious fine bone china tea set with hand-gilded gold detailing. Perfect for afternoon tea or as an heirloom-quality gift.',
    specs: [
      { key: 'Material', val: 'Fine Bone China' },
      { key: 'Pieces', val: '12' },
      { key: 'Capacity', val: '6 Person Set' },
      { key: 'Care', val: 'Hand Wash Recommended' },
      { key: 'Finish', val: 'Gold Gilded Detailing' },
    ],
    amazonUrl: 'https://www.amazon.in/',
    flipkartUrl: 'https://www.flipkart.com/',
    featured: true,
    collectionId: 'tea-coffee',
  },
  {
    id: 3,
    slug: 'imperial-black-serveware',
    name: 'Imperial Black Serveware',
    category: 'Serveware',
    material: 'Premium Ceramic',
    pieces: '8 Pieces',
    price: '₹2,899',
    priceNum: 2899,
    image: imperialBlack,
    description:
      'A striking matte black ceramic serveware collection that makes a bold statement on any table. Designed for modern hosts who appreciate drama and simplicity.',
    specs: [
      { key: 'Material', val: 'Premium Ceramic' },
      { key: 'Pieces', val: '8' },
      { key: 'Capacity', val: 'Serving for 6' },
      { key: 'Care', val: 'Dishwasher Safe' },
      { key: 'Finish', val: 'Matte Black Glaze' },
    ],
    amazonUrl: 'https://www.amazon.in/',
    flipkartUrl: 'https://www.flipkart.com/',
    featured: true,
    collectionId: 'serveware',
  },
  {
    id: 4,
    slug: 'pearl-white-dinner-collection',
    name: 'Pearl White Dinner Collection',
    category: 'Dinnerware',
    material: 'Porcelain',
    pieces: '18 Pieces',
    price: '₹4,299',
    priceNum: 4299,
    image: pearlWhite,
    description:
      'An 18-piece porcelain dinner set with a luminous pearlescent glaze. Timeless, versatile and designed to complement any dining aesthetic.',
    specs: [
      { key: 'Material', val: 'Porcelain' },
      { key: 'Pieces', val: '18' },
      { key: 'Capacity', val: '6 Person Set' },
      { key: 'Care', val: 'Dishwasher Safe' },
      { key: 'Finish', val: 'Pearlescent Glaze' },
    ],
    amazonUrl: 'https://www.amazon.in/',
    flipkartUrl: 'https://www.flipkart.com/',
    featured: true,
    collectionId: 'dinnerware',
  },
  {
    id: 5,
    slug: 'champagne-tea-collection',
    name: 'Champagne Tea Collection',
    category: 'Tea & Coffee',
    material: 'Fine Bone China',
    pieces: '6 Pieces',
    price: '₹2,499',
    priceNum: 2499,
    image: champagneTea,
    description:
      'A refined 6-piece bone china tea set in a warm champagne glaze. Understated, warm and perfect for intimate afternoon gatherings.',
    specs: [
      { key: 'Material', val: 'Fine Bone China' },
      { key: 'Pieces', val: '6' },
      { key: 'Capacity', val: '2 Person Set' },
      { key: 'Care', val: 'Hand Wash Recommended' },
      { key: 'Finish', val: 'Champagne Glaze' },
    ],
    amazonUrl: 'https://www.amazon.in/',
    flipkartUrl: 'https://www.flipkart.com/',
    featured: true,
    collectionId: 'tea-coffee',
  },
  {
    id: 6,
    slug: 'noir-signature-platter',
    name: 'Noir Signature Platter',
    category: 'Serveware',
    material: 'Ceramic',
    pieces: '1 Piece',
    price: '₹1,899',
    priceNum: 1899,
    image: noirPlatter,
    description:
      'The Noir Signature Platter is a statement piece in matte black ceramic. Its organic oval form and textured surface make every presentation a work of art.',
    specs: [
      { key: 'Material', val: 'Ceramic' },
      { key: 'Pieces', val: '1' },
      { key: 'Size', val: '38cm × 28cm' },
      { key: 'Care', val: 'Dishwasher Safe' },
      { key: 'Finish', val: 'Matte Black Textured' },
    ],
    amazonUrl: 'https://www.amazon.in/',
    flipkartUrl: 'https://www.flipkart.com/',
    featured: true,
    collectionId: 'serveware',
  },
];

// Utility: generate WhatsApp pre-filled message
export function whatsappUrl(productName) {
  const msg = encodeURIComponent(
    `Hi, I am interested in the ${productName} from AURELIA. Please share more details.`
  );
  return `https://wa.me/919876543210?text=${msg}`;
}
