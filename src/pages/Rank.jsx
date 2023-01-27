import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { getMusic, resetPlaylist } from "../redux/modules/musics";
import { useAppDispatch } from "../hooks/hooks";
import { useAppSelector } from "../hooks/hooks";
import MusicContainer from "../components/Rank/MusicContainer";
import BeatLoader from "react-spinners/BeatLoader";
import Aos from "aos";
import "aos/dist/aos.css";

const Rank = () => {
  const dispatch = useAppDispatch();
  const { musics, isLoading } = useAppSelector((state) => state.musics);
  const playlistId = "PLWTycz4el4t4l6uuriz3OhqR2aKy86EEP";

  useEffect(() => {
    dispatch(getMusic(playlistId));
    Aos.init();
    return () => dispatch(resetPlaylist()); //unmount 될때 return문이 실행 되고 callback으로 dispatch 보내줌
  }, []);

  return (
    <Background>
      <RankWrap data-aos="fade-up">
        <TitleWrap>인기차트</TitleWrap>
        <MusicListWrap>
          {isLoading ? (
            <LoadingWrap>
              <BeatLoader color="#FF830A" />
            </LoadingWrap>
          ) : (
            <>
              {musics.map((data, index) => (
                <MusicContainer
                  key={data.id}
                  index={index}
                  data={data}
                ></MusicContainer>
              ))}
            </>
          )}
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
  min-height: 100vh;
  width: 100%;
  display: flex;
`;
const RankWrap = styled.div`
  width: 100%;
  margin: 0 50px 0 50px;
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
const LoadingWrap = styled.div`
  color: white;
  margin-top: 108px;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
