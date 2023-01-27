import React, { useState } from "react";
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
import { shuffleMusic } from "../../redux/modules/musicplayer";

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
  const [overdiplay, setOverdisplay] = useState(false);
  const { isPlay, musicnum } = useAppSelector((state) => state.musicplayer);

  const Overstate: any = ({ overdiplay, index }: any) => {
    if (index == musicnum) {
      return (
        <Overview>
          <Icon kind="pause" size={20}></Icon>
        </Overview>
      );
    }
    if (overdiplay) {
      return (
        <Overview>
          <Icon kind="play" size={20}></Icon>
        </Overview>
      );
    }
  };

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
        dispatch(shuffleMusic(false));
        moodStorage.addMangoHistory(data);
      }}
      onMouseOver={() => {
        setOverdisplay(true);
      }}
      onMouseLeave={() => {
        setOverdisplay(false);
      }}
    >
      <ImgWrap>
        <img src={data.thumbnail}></img>
        <Overstate
          overdiplay={overdiplay}
          index={index}
          musicnum={musicnum}
        ></Overstate>
      </ImgWrap>
      <RankNumber overdiplay={overdiplay} index={index} musicnum={musicnum}>
        {index + 1}
      </RankNumber>
      <MusicInfo overdiplay={overdiplay} index={index} musicnum={musicnum}>
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
const RankNumber = styled.div<any>`
  position: relative;
  left: ${(props) =>
    props.overdiplay || props.musicnum == props.index ? "-107px" : "0"};
  font-size: 14px;
  font-weight: 300;
  width: 72px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MusicInfo = styled.div<any>`
  position: relative;
  left: ${(props) =>
    props.overdiplay || props.musicnum == props.index ? "-107px" : "0"};
  max-width: 800px;
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
  display: flex;
`;

const ChannelTitle = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 10px;
`;

const Overview = styled.div`
  left: -107px;
  width: 107px;
  height: 60px;
  position: relative;
  background-color: hsl(100 0% 0% / 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgWrap = styled.div`
  display: flex;
`;
