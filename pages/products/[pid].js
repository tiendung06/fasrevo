import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';
import Main from '../../src/layout/Main';
import Section from '../../src/layout/Section';
import Button from '../../src/components/Button';
import SectionHeading from '../../src/components/SectionHeading';
import {
  addCart,
  productDetail,
  searchItem,
} from '../../src/constants/constants';
import { useSelector } from 'react-redux';
import { getImageUrl, getPrice, formatMoney } from '../../src/helpers';
import Breadcrumb from '../../src/components/Breadcrumb';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import Card from '../../src/components/Card';

const ProductDetails = () => {
  const [product, setProduct] = useState();
  const [productDetails, setProductDetails] = useState();
  const [quantity, setQuantity] = useState(1);
  const [colorId, setColorId] = useState(-1);
  const [sizeId, setSizeId] = useState(-1);
  const [productColors, setProductColors] = useState([]);
  const [productSizes, setProductSizes] = useState([]);
  const [colorList, setColorList] = useState([]);
  const [sizeList, setSizeList] = useState([]);
  const [featuredProduct, setFeaturedProduct] = useState();
  const router = useRouter();
  const { pid } = router.query;

  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (pid) {
      axios.get(`${productDetail.getProductDetail(pid)}`).then((res) => {
        setProduct(res.data.product);
        setProductDetails(res.data.productDetail);
        setProductColors(res.data.productColor);
        setProductSizes(res.data.productSize);
        setColorList(res.data.colorList);
        setSizeList(res.data.sizeList);

        if (res.data.productColor && res.data.productColor.length > 0) {
          setColorId(res.data.productColor[0].color_id);
        }

        if (res.data.productSize && res.data.productSize.length > 0) {
          setSizeId(res.data.productSize[0].size_id);
        }
      });
    }
  }, [pid]);

  const handleMinusQuantity = () => {
    if (quantity >= 2) {
      setQuantity(quantity - 1);
    }
  };

  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToACart = () => {
    if (user) {
      axios
        .post(addCart, {
          uid: user.uid,
          pid,
          color_id: colorId,
          size_id: sizeId,
          quantity: quantity,
        })
        .then((res) => {
          if (res.status === 200) {
            alert(res.data.message);
          }
        });
    } else {
      alert('Bạn chưa đăng nhập. Hãy đăng nhập để tiếp tục mua hàng');
    }
  };

  useEffect(() => {
    axios
      .get(searchItem.getSearchByCdid(1, product?.cdid, 0))
      .then((resp) => {
        setFeaturedProduct(resp.data.products);
      })
      .catch((e) => {});
  }, [product]);

  return (
    <Main heading={product?.pname}>
      <Section>
        <Breadcrumb product={product} />
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-y-10 lg:gap-5 justify-between">
          <div className="lg:col-span-2">
            <div className="h-full max-h-[870px]">
              <picture>
                <img
                  src={getImageUrl(product?.image)}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </picture>
            </div>
          </div>
          <div className="hidden md:block invisible"></div>
          <div className="lg:col-span-3">
            <div className="max-w-[500px]">
              <h2 className="text-3xl md:text-4xl font-medium pb-2">
                {product?.pname}
              </h2>
              <div className="flex items-center pb-5">
                <span
                  className={`${
                    product?.isDiscount === 1
                      ? 'text-sm md:text-base line-through text-header'
                      : 'text-base md:text-lg font-medium text-primary_red'
                  }  mr-4`}
                >
                  {formatMoney(product?.cost)}
                </span>
                <span
                  className={`${
                    product?.isDiscount ? '' : 'hidden'
                  } text-base md:text-lg font-medium text-primary_red`}
                >
                  {formatMoney(
                    getPrice(
                      product?.discount,
                      product?.cost,
                      product?.isDiscount
                    )
                  )}
                </span>
              </div>
              <p className="pb-5 text-sm md:text-base">
                {productDetails?.description}
              </p>
              <div className="w-1/2 mb-5">
                <label htmlFor="color" className="text-sm font-medium">
                  Màu sắc
                </label>
                <select
                  name="color"
                  id="color"
                  className="w-full h-10 px-5 text-sm text-secondary_text outline-none border border-border_input"
                  value={colorId}
                  onChange={(e) => setColorId(parseInt(e.target.value))}
                >
                  {productColors.map((pc) => {
                    return (
                      <option value={pc.color_id} key={pc.color_id}>
                        {
                          colorList.find((c) => c.color_id === pc.color_id)
                            ?.color_name
                        }
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="w-1/2 mb-5">
                <label htmlFor="sex" className="text-sm font-medium">
                  Kích cỡ
                </label>
                <select
                  name="size"
                  id="size"
                  className="w-full h-10 px-5 text-sm text-secondary_text outline-none border border-border_input"
                  value={sizeId}
                  onChange={(e) => setSizeId(parseInt(e.target.value))}
                >
                  {productSizes.map((ps) => {
                    return (
                      <option value={ps.size_id} key={ps.size_id}>
                        {
                          sizeList.find((c) => c.size_id === ps.size_id)
                            ?.size_name
                        }
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-5">
                <label className="text-sm font-medium">Số lượng</label>
                <div className="flex justify-between text-header w-40 border border-border_input h-10 px-3">
                  <button onClick={handleMinusQuantity}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 12H6"
                      />
                    </svg>
                  </button>
                  <span className="flex items-center">{quantity}</span>
                  <button onClick={handlePlusQuantity}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <Button onClick={handleAddToACart}>Thêm vào giỏ hàng</Button>
              <div className="mt-10">
                <p className="font-medium text-base md:text-lg pb-2">
                  Chi tiết sản phẩm
                </p>
                <p className="text-sm md:text-base pb-1">
                  Mã sản phẩm: {product?.pid}
                </p>
                <p className="text-sm md:text-base pb-1">
                  Nguồn gốc: {productDetails?.origin}
                </p>
                <p className="text-sm md:text-base pb-1">
                  Chất liệu: {productDetails?.texture}
                </p>
                <p className="text-sm md:text-base pb-1">
                  Chi tiết nhỏ: {productDetails?.small_detail}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <SectionHeading>Sản phẩm tương tự</SectionHeading>
        <Swiper
          slidesPerView={'auto'}
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mx-auto max-w-[1920px] w-full"
        >
          {featuredProduct
            ?.slice(0, 20)
            .map(({ pid, cost, discount, image, isDiscount, pname }) => (
              <SwiperSlide key={pid}>
                <Card
                  key={pid}
                  id={pid}
                  title={pname}
                  image={getImageUrl(image)}
                  basePrice={cost}
                  isDiscount={isDiscount}
                  discount={discount}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </Section>
    </Main>
  );
};

export default ProductDetails;
