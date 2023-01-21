import React from "react";
import { useEffect } from "react";
import { authenticate, loadClient, execute } from "../api/youtubeapi";
import styled from "styled-components";
import { getMusic } from "../redux/modules/rank";
import { useAppDispatch } from "../hooks/hooks";
import { useAppSelector } from "../hooks/hooks";
import MusicContainer from "../components/common/Rank/MusicContainer";

const Rank = () => {
  const dispatch = useAppDispatch();

  const { rank } = useAppSelector((state) => state.rank);

  useEffect(() => {
    dispatch(getMusic());
  }, []);

  // console.log(rank);
  return (
    <Background>
      <RankWrap>
        <TitleWrap>인기차트</TitleWrap>
        <MusicListWrap>
          {rank.map((data, index) => (
            <MusicContainer
              key={index}
              index={index + 1}
              data={data}
            ></MusicContainer>
          ))}
        </MusicListWrap>
      </RankWrap>
    </Background>
  );
};

export default Rank;

const Button = styled.button``;

const Background = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  background-color: #000000;
  height: 100vh;
  width: 100%;
  display: flex;
`;
const RankWrap = styled.div`
  width: 100%;
  margin: 50px 50px 0 50px;
  display: flex;
  flex-direction: column;
`;
const TitleWrap = styled.div`
  font-weight: 300;
  font-size: 32px;
  color: #ffffff;
`;
const MusicListWrap = styled.div`
  margin-top: 108px;
  display: flex;
  flex-direction: column;
`;

const StyleNav = styled.div`
  background-color: #2d2d2d;
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
