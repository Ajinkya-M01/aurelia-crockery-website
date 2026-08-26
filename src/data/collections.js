// ============================================================
// AURELIA — Collections Data
// Replace images and text here to update the site
// ============================================================
import dinnerwareImg from '../assets/collection_dinnerware_1787763121732.jpg';
import teaImg        from '../assets/collection_tea_1787763134408.jpg';
import servewareImg  from '../assets/collection_serveware_1787763149350.jpg';
import premiumImg    from '../assets/collection_premium_1787763236810.jpg';
import festiveImg    from '../assets/collection_festive_1787763260646.jpg';

export const collections = [
  {
    id: 'dinnerware',
    num: '01',
    title: 'Dinnerware',
    subtitle: 'Elegant sets for everyday and formal dining.',
    image: dinnerwareImg,
    tag: 'Tableware',
  },
  {
    id: 'tea-coffee',
    num: '02',
    title: 'Tea & Coffee',
    subtitle: 'Refined cups, saucers and tea collections.',
    image: teaImg,
    tag: 'Tea & Coffee',
  },
  {
    id: 'serveware',
    num: '03',
    title: 'Serveware',
    subtitle: 'Statement pieces designed for beautiful presentation.',
    image: servewareImg,
    tag: 'Serveware',
  },
  {
    id: 'premium',
    num: '04',
    title: 'Premium',
    subtitle: 'Exclusive tableware for sophisticated spaces.',
    image: premiumImg,
    tag: 'Premium',
  },
  {
    id: 'festive',
    num: '05',
    title: 'Festive',
    subtitle: 'Pieces made for celebrations and gatherings.',
    image: festiveImg,
    tag: 'Festive',
  },
];
