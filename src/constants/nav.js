export const nav = [
  { title: "Trang chủ", path: "/" },
  {
    title: "Nam",
    path: "/men",
    subMenu: [
      {
        title: "Top",
        path: "/men/products/top",
        subMenu: [
          { title: "T-Shirts", path: "/men/products/top/t-shirt" },
          { title: "Shirts", path: "/men/products/top/shirts" },
          { title: "Polo", path: "/men/products/top/polo" },
          { title: "Hoodie", path: "/men/products/top/hoodie" },
        ],
      },
      {
        title: "Bottom",
        path: "/men/products/bottom",
        subMenu: [
          { title: "Pants", path: "/men/products/bottom/pants" },
          { title: "Shorts", path: "/men/products/bottom/shorts" },
        ],
      },
      {
        title: "Accessory",
        path: "/men/products/accessory",
        subMenu: [
          { title: "Mũ", path: "/men/products/accessory/hat" },
          { title: "Túi", path: "/men/products/accessory/bag" },
        ],
      },
    ],
  },
  {
    title: "Nữ",
    path: "/women",
    subMenu: [
      {
        title: "Top",
        path: "/women/products/top",
        subMenu: [
          { title: "T-Shirts", path: "/women/products/top/t-shirt" },
          { title: "Shirts", path: "/women/products/top/shirts" },
          { title: "Polo", path: "/women/products/top/polo" },
          { title: "Hoodie", path: "/women/products/top/hoodie" },
        ],
      },
      {
        title: "Bottom",
        path: "/products/bottom",
        subMenu: [
          { title: "Pants", path: "/products/bottom/pants" },
          { title: "Shorts", path: "/products/bottom/shorts" },
          { title: "Chân váy", path: "/products/bottom/dress" },
        ],
      },
      {
        title: "Accessory",
        path: "/women/products/accessory",
        subMenu: [
          { title: "Mũ", path: "/women/products/accessory/hat" },
          { title: "Túi", path: "/women/products/accessory/bag" },
        ],
      },
    ],
  },
  { title: "Về chúng tôi", path: "/about-us" },
];

export const navWomen = [
  { title: "Trang chủ", path: "/women" },
  { title: "Nam", path: "/men" },
  { title: "Nữ", path: "/women" },
  { title: "Về chúng tôi", path: "/about-us" },
];

export const footerPolicy = [
  { title: "Chính sách vận chuyển", path: "/policy/delivery-policy" },
  { title: "Chính sách thanh toán", path: "/policy/payment-policy" },
  { title: "Chính sách đổi trả", path: "/policy/return-policy" },
];

export const footerContact = [
  { title: "Facebook", path: "https://www.facebook.com/" },
  { title: "Instagram", path: "https://www.instagram.com/" },
  { title: "Hotline: 0344536552", path: "tel:0344536552" },
];

export const storeAdress = [
  { title: "Ngõ 3, Giao Tác, Liên Hà, Đông Anh, Hà Nội" },
];
