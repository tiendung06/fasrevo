import { serverDomain } from './constants/constants';

export const getImageUrl = (image) =>
  image?.startsWith('http') || image?.includes('images')
    ? image
    : serverDomain + image;
