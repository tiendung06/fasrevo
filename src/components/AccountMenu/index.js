import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthenticated, setUser } from '../../../redux/authSlide';
import { logout } from '../../constants/constants';
import { getImageUrl } from '../../helpers';
import { setCartQuantity } from '../../../redux/cartSlide';

const AccountMenu = () => {
  const router = useRouter();
  const { authenticated, user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleSignOut = () => {
    if (typeof window !== 'undefined') {
      axios.get(logout).then((res) => {
        dispatch(setAuthenticated(false));
        dispatch(setUser(null));
        dispatch(setCartQuantity(0));
        router.push('/');
      });
    }
  };

  // if (typeof window !== 'undefined') {
  //   if (!authenticated) {
  //     router.push('/');
  //   }
  // }

  return (
    <div>
      <div className="w-full flex justify-center">
        <picture>
          <img
            src={user?.image ? getImageUrl(user?.image) : '../images/error.jpg'}
            alt=""
            className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] object-cover rounded-full shadow-lg"
          />
        </picture>
      </div>
      <p className="text-center text-lg lg:text-2xl text-primary font-medium pt-5 uppercase">
        {user?.fullname}
      </p>
      <div className="mt-5 lg:mt-10">
        <ItemMenu href="/account/my-order">Đơn hàng của tôi</ItemMenu>
        <ItemMenu href="/account/profile">Thông tin cá nhân</ItemMenu>
        <ItemMenu href="/account/change-password">Đổi mật khẩu</ItemMenu>
        <ItemMenu href="/account/voucher">Kho voucher</ItemMenu>
        <button
          onClick={handleSignOut}
          className="w-full text-left text-sm lg:text-base font-medium hover:text-primary_red transition-all"
        >
          Đăng xuất
        </button>
      </div>
    </div>
  );
};

function ItemMenu({ href, children }) {
  return (
    <Link href={href}>
      <a className="block pb-4 text-sm font-medium lg:text-base hover:text-primary_red transition-all">
        {children}
      </a>
    </Link>
  );
}

export default AccountMenu;
