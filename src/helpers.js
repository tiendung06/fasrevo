import { serverDomain } from './constants/constants';

export const getImageUrl = (image) => {
  return image?.startsWith('http') || image?.includes('images')
    ? image
    : serverDomain + image;
};

export const getPrice = (discount, cost, isDiscount) => {
  return Boolean(isDiscount) ? cost * ((100 - discount) / 100) : cost;
};

export const formatMoney = (n = 1, currency = ' VND') => {
  return n.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + currency;
};
