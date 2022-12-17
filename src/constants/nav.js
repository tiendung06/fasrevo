export const nav = [
  { title: 'Trang chủ', path: '/' },
  {
    title: 'Nam',
    path: '/men',
    subMenu: [
      { title: 'Tất cả sản phẩm', path: '/men' },
      {
        title: 'Top',
        path: '/men/top',
        subMenu: [
          { title: 'Hoodie', path: '/men/top/hoodie' },
          { title: 'Áo phông', path: '/men/top/top/t-shirts' },
          { title: 'Áo sơ mi', path: '/men/top/shirts' },
          { title: 'Áo khoác', path: '/men/top/jacket' },
        ],
      },
      {
        title: 'Bottom',
        path: '/men/bottom',
        subMenu: [
          { title: 'Quần dài', path: '/men/bottom/pants' },
          { title: 'Quần shorts', path: '/men/bottom/shorts' },
          { title: 'Quần jean', path: '/men/bottom/jeans' },
        ],
      },
      {
        title: 'Accessory',
        path: '/men/products/accessory',
        subMenu: [
          { title: 'Mũ', path: '/men/accessory/hat' },
          { title: 'Túi xách', path: '/men/accessory/bag' },
          { title: 'Dây chuyền', path: '/men/accessory/necklace' },
        ],
      },
    ],
  },
  {
    title: 'Nữ',
    path: '/women',
    subMenu: [
      { title: 'Tất cả sản phẩm', path: '/women' },
      {
        title: 'Top',
        path: '/women/top',
        subMenu: [
          { title: 'Hoodie', path: '/women/top/hoodie' },
          { title: 'Áo phông', path: '/women/top/t-shirts' },
          { title: 'Áo sơ mi', path: '/women/top/shirts' },
          { title: 'Áo khoác', path: '/women/top/jacket' },
        ],
      },
      {
        title: 'Bottom',
        path: '/products/bottom',
        subMenu: [
          { title: 'Quần dài', path: '/women/bottom/pants' },
          { title: 'Quần shorts', path: '/women/bottom/shorts' },
          { title: 'Quần jean', path: '/women/bottom/jeans' },
        ],
      },
      {
        title: 'Accessory',
        path: '/women/accessory',
        subMenu: [
          { title: 'Mũ', path: '/women/accessory/hat' },
          { title: 'Túi xách', path: '/women/accessory/bag' },
          { title: 'Dây chuyền', path: '/women/accessory/necklace' },
        ],
      },
    ],
  },
  { title: 'Bộ sưu tập', path: '/collections' },
  { title: 'Về chúng tôi', path: '/about-us' },
];

export const footerPolicy = [
  { title: 'Chính sách vận chuyển', path: '/policy/delivery-policy' },
  { title: 'Chính sách thanh toán', path: '/policy/payment-policy' },
  { title: 'Chính sách đổi trả', path: '/policy/return-policy' },
];

export const footerContact = [
  { title: 'Facebook', path: 'https://www.facebook.com/' },
  { title: 'Instagram', path: 'https://www.instagram.com/' },
];

export const storeAddress = [
  { title: 'Ngõ 3, Giao Tác, Liên Hà, Đông Anh, Hà Nội' },
];

export const category = [
  {
    type: 'Thời trang nam',
    href: '/men/top/hoodie',
    title: 'Hoodie',
    image: './images/men_hoodie.jpg',
  },
  {
    type: 'Thời trang nam',
    href: '/men/top/t-shirts',
    title: 'Áo phông',
    image: './images/men_t-shirts.jpg',
  },
  {
    type: 'Thời trang nam',
    href: '/men/top/shirts',
    title: 'Áo sơ mi',
    image: './images/men_shirts.jpg',
  },
  {
    type: 'Thời trang nam',
    href: '/men/top/jacket',
    title: 'Áo khoác',
    image: './images/men_jackets.jpg',
  },
  {
    type: 'Thời trang nam',
    href: '/men/bottom/pants',
    title: 'Quần dài',
    image: './images/men_pants.jpg',
  },
  {
    type: 'Thời trang nam',
    href: '/men/bottom/jeans',
    title: 'Quần bò',
    image: './images/men_jeans.jpg',
  },
  {
    type: 'Thời trang nam',
    href: '/men/bottom/shorts',
    title: 'Quần shorts',
    image: './images/men_shorts.jpg',
  },
  {
    type: 'Thời trang nam',
    href: '/men/accessory/hat',
    title: 'Mũ',
    image: './images/men_hats.jpg',
  },
  {
    type: 'Thời trang nam',
    href: '/men/accessory/bag',
    title: 'Túi xách',
    image: './images/men_bag.jpg',
  },
  {
    type: 'Thời trang nam',
    href: '/men/accessory/necklace',
    title: 'Dây chuyền',
    image: './images/men_necklace.jpg',
  },
  {
    type: 'Thời trang nữ',
    href: '/women/top/hoodie',
    title: 'Hoodie',
    image: './images/women_hoodie.jpg',
  },
  {
    type: 'Thời trang nữ',
    href: '/women/top/t-shirts',
    title: 'Áo phông',
    image: './images/women_t-shirts.jpg',
  },
  {
    type: 'Thời trang nữ',
    href: '/women/top/shirts',
    title: 'Áo sơ mi',
    image: './images/women_shirts.jpg',
  },
  {
    type: 'Thời trang nữ',
    href: '/women/top/jacket',
    title: 'Áo khoác',
    image: './images/women_jackets.jpg',
  },
  {
    type: 'Thời trang nữ',
    href: '/women/bottom/pants',
    title: 'Quần dài',
    image: './images/women_pants.jpg',
  },
  {
    type: 'Thời trang nữ',
    href: '/women/bottom/jeans',
    title: 'Quần bò',
    image: './images/women_jeans.jpg',
  },
  {
    type: 'Thời trang nữ',
    href: '/women/bottom/shorts',
    title: 'Quần shorts',
    image: './images/women_shorts.jpg',
  },
  {
    type: 'Thời trang nữ',
    href: '/women/accessory/hat',
    title: 'Mũ',
    image: './images/women_hats.jpg',
  },
  {
    type: 'Thời trang nữ',
    href: '/women/accessory/bag',
    title: 'Túi xách',
    image: './images/women_bag.jpg',
  },
  {
    type: 'Thời trang nữ',
    href: '/women/accessory/necklace',
    title: 'Dây chuyền',
    image: './images/women_necklace.jpg',
  },
];
