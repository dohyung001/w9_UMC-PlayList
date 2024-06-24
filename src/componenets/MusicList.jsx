import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MusicListContainer, MusicListHeader, PriceContainer, CustomDiv, CustomHr, ClearButton, CustomBox } from './styledComponents';
import { calculateTotals } from '../redux/cartSlice';
import { openModal } from '../redux/modalSlice';
import Music from './Music';
import Modal from './Modal';

export default function MusicList() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cart.items, dispatch]);

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <CustomDiv>
      <MusicListContainer>
        <MusicListHeader>당신이 선택한 음반</MusicListHeader>
        {cart.items.length > 0 ? (
          <>
            {cart.items.map(e => (
              <Music key={e.id} id={e.id} />
            ))}
            <CustomHr />

            <PriceContainer>
              <div>총 가격</div>
              <CustomBox />
              <div>₩ {cart.priceSum}</div>
            </PriceContainer>
            <ClearButton onClick={handleOpenModal}>장바구니 초기화</ClearButton>
          </>
        ) : (
          <div>고객님이 좋아하는 음반을 담아보세요~!</div>
        )}
      </MusicListContainer>
      <Modal />
    </CustomDiv>
  );
}