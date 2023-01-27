import React from "react";
import styled from "styled-components";
import Icon from "../components/common/Icon";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";

const Main = () => {
  const datas = useAppSelector((state) => state.categories);
  // console.log(datas);

  return (
    <StyleBackground>
      <StyleWrap>
        <StyleTitle>
          주문하신 무드에 맞는 음악장르가 나왔습니다 &nbsp;
          <Icon kind="music" size={27} />
        </StyleTitle>
        <StyleCategoryWrap>
          {datas.map((data, index) => {
            return <StyleCategoryItem key={index}>{data}</StyleCategoryItem>;
          })}
        </StyleCategoryWrap>
      </StyleWrap>
    </StyleBackground>
  );
};

const StyleBackground = styled.div`
  background-color: #000000;
  height: 100vh;
  width: 100%;
  padding: 50px 50px 0 50px;
  box-sizing: border-box;
`;

const StyleWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyleTitle = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 25px;
  color: #ffffff;
  margin-bottom: 30px;
`;

const StyleCategoryWrap = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 100px;
  display: flex;
  gap: 20px;
  padding-bottom: 20px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;

const StyleCategoryItem = styled.div`
  width: 170px;
  overflow: hidden;
  flex: 0 0 auto;
  background-color: #2a2a2a;
  padding: 5px 20px;
  border-radius: 20px;
  cursor: pointer;
`;

export default Main;
