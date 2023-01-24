import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { useAppSelector } from "../../hooks/hooks";
import { PlayerToggle } from "../../redux/modules/musicplayer";
import Aos from "aos";
import Icon from "../common/Icon";
import { moodStorage } from "../common/MoodStorage";
import "aos/dist/aos.css";
import { getMusicNum, togglePlay } from "../../redux/modules/musicplayer";

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

const MusicContainer = ({ data, index }: any) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <MusicContainerWrap
      data-aos="fade-in"
      onClick={() => {
        dispatch(PlayerToggle(true));
        dispatch(togglePlay(true));
        dispatch(getMusicNum(index));

        moodStorage.addMangoHistory(data);
      }}
    >
      <img src={data.thumbnail}></img>
      <RankNumber>{index + 1}</RankNumber>
      <MusicInfo>
        <MusicTitle>{data.title}</MusicTitle>
        <MusicViewCount>{data.viewconut} 회</MusicViewCount>
      </MusicInfo>
      <ChannelTitle>{data.channeltitle}</ChannelTitle>
      <Icon
        kind={"cloud"}
        size={25}
        style={{
          height: "60px",
        }}
        handler={() => moodStorage.addMangoPlayList(data)}
      />
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
  width: 800px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const MusicTitle = styled.div`
  font-size: 14px;
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
