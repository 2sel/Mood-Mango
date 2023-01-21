import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

interface MusicdataType {
  id: string;
  title: string;
  channeltitle: string;
  time: string;
  viewconut: string;
  likecount: string;
  thumbnail: string;
}
interface Type {
  Imgurl: string;
}

const MusicContainer = ({ data, index, SetPlayerDis }: any) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <MusicContainerWrap
      data-aos="fade-in"
      onClick={() => {
        SetPlayerDis(true);
      }}
    >
      <img src={data.thumbnail}></img>
      <RankNumber>{index}</RankNumber>
      <MusicInfo>
        <MusicTitle>{data.title}</MusicTitle>
        <MusicViewCount>{data.viewconut} 회</MusicViewCount>
      </MusicInfo>
      <ChannelTitle>{data.channeltitle}</ChannelTitle>
    </MusicContainerWrap>
  );
};

export default MusicContainer;

const MusicContainerWrap = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 300;
  color: white;
  background: #121212;
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  padding: 10px;
  transition: all 0.05s linear;
  img {
    width: 107px;
    height: 60px;
    object-fit: cover;
    object-position: center;
  }
  &:hover {
    background: #1d160f;
  }
`;
const RankNumber = styled.div`
  font-size: 14px;
  font-weight: 300;
  width: 72px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MusicInfo = styled.div`
  width: 400px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const MusicTitle = styled.div`
  font-size: 14px;
  width: 400px;
  display: flex;
`;
const MusicViewCount = styled.div`
  font-size: 12px;
  color: #9096a2;
  width: 400px;
  display: flex;
`;

const ChannelTitle = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 10px;
`;
