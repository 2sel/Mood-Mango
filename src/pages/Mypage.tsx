import { useState } from "react";
import styled from "styled-components";
import MyHistory from "../components/Mypage/MyHistory";
import MyPlayList from "../components/Mypage/MyPlayList";
import MyRank from "../components/Mypage/MyRank";

const Mypage = () => {
  return (
    <MyPage>
      <MyRank />
      <MyHistory />
      <MyPlayList />
    </MyPage>
  );
};
export default Mypage;

const MyPage = styled.div`
  font-weight: 300;
  font-family: "Noto Sans KR", sans-serif;
  background-color: black;
  color: white;
  font-size: 40px;
  overflow: hidden;
`;
