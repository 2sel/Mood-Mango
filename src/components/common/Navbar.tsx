import React from "react";
import styled from "styled-components";
import { AiFillSmile } from "react-icons/ai";
import { BiMusic, BiCloud, BiSearch } from "react-icons/bi";
import { BsBarChart } from "react-icons/bs";

import { useNavigate } from "react-router-dom";
import Icon from "./Icon";
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <StyleNav>
      <StyleNavWrap>
        <StyleBtnWrap
          onClick={() => {
            navigate("/");
          }}
        >
          <Icon kind={"smile"} />
          <StyleText>무드선택</StyleText>
        </StyleBtnWrap>
        <StyleBtnWrap
          onClick={() => {
            navigate("/Main");
          }}
        >
          <Icon kind={"music"} />
          <StyleText>무드플레이</StyleText>
        </StyleBtnWrap>
        <StyleBtnWrap
          onClick={() => {
            navigate("/");
          }}
        >
          <StyleIconWrap>
            <BsBarChart></BsBarChart>
          </StyleIconWrap>
          <StyleText>인기차트</StyleText>
        </StyleBtnWrap>
        <StyleBtnWrap
          onClick={() => {
            navigate("/MyPage");
          }}
        >
          <Icon kind={"cloud"} />
          <StyleText>마이플레이</StyleText>
        </StyleBtnWrap>
        <StyleBtnWrap
          onClick={() => {
            navigate("/Search");
          }}
        >
          <Icon kind={"search"} />
          <StyleText>검색</StyleText>
        </StyleBtnWrap>
      </StyleNavWrap>
    </StyleNav>
  );
};

const StyleNav = styled.div`
  background-color: #121212;
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyleNavWrap = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
`;

const StyleBtnWrap = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;

const StyleIconWrap = styled.div`
  font-size: 25px;
  color: #fff;
  text-align: center;
`;

const StyleText = styled.div`
  color: #fff;
  font-size: 10px;
  text-align: center;
  margin-top: 5px;
`;
export default Navbar;
