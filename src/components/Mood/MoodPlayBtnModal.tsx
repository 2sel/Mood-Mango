import React from "react";
import styled from "styled-components";

const MoodPlayBtnModal = ({ setModalOpen }: { setModalOpen: Function }) => {
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <ModalBackground>
      <ModalBox>
        <ModalText>키워드를 선택해주세요!</ModalText>
        <CloseModalBtn onClick={closeModal}>확인</CloseModalBtn>
      </ModalBox>
    </ModalBackground>
  );
};

export default MoodPlayBtnModal;

const ModalBackground = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.082);
  backdrop-filter: blur(3px);
  z-index: 999;
`;

const ModalBox = styled.div`
  position: fixed;
  width: 400px;
  height: 250px;
  top: 50%;
  left: 50%;
  background: white;
  border-radius: 15px;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModalText = styled.p`
  font-family: "Noto Sans KR", sans-serif;
  color: #464444;
  font-size: 23px;
  font-weight: 500;
`;

const CloseModalBtn = styled.button`
  font-family: "Noto Sans KR", sans-serif;
  margin-top: 45px;
  width: 90px;
  height: 40px;
  font-size: 20px;
  background-color: #ff830a;
  color: white;
  border: none;
  border-radius: 15px;

  cursor: pointer;

  &:hover {
    transform: translateY(2px);
  }
`;
