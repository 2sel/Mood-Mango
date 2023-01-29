import React, { useState } from "react";
import styled from "styled-components";
import { togglePlay, getMusicNum } from "../../redux/modules/musicplayer";
import Icon from "../common/Icon";
import { useAppDispatch } from "../../hooks/hooks";
import { useAppSelector } from "../../hooks/hooks";

const Playermusic = ({ item, index }) => {
  const [overdiplay, setOverdisplay] = useState(false);
  const dispatch = useAppDispatch();

  const { isPlay, musicnum } = useAppSelector((state) => state.musicplayer);

  const Overstate = ({ overdiplay, index }) => {
    if (index == musicnum) {
      return (
        <Overview>
          <Icon kind="playing" size={20}></Icon>
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

  return (
    <PlayerMusicWrap
      key={item.id}
      onClick={() => {
        dispatch(togglePlay(true));
        dispatch(getMusicNum(index));
      }}
      onMouseOver={() => {
        setOverdisplay(true);
      }}
      onMouseLeave={() => {
        setOverdisplay(false);
      }}
    >
      <ImgWrap>
        <img src={item.thumbnail}></img>

        <Overstate overdiplay={overdiplay} index={index}></Overstate>
      </ImgWrap>
      <MusicInfo overdiplay={overdiplay} index={index} musicnum={musicnum}>
        <MusicTitle>{item.title}</MusicTitle>
        <MusicViewCount>{item.channeltitle}</MusicViewCount>
      </MusicInfo>
    </PlayerMusicWrap>
  );
};

export default Playermusic;

const ImgWrap = styled.div`
  display: flex;
`;
const Overview = styled.div`
  left: -80px;
  width: 60px;
  height: 60px;
  position: relative;
  background-color: hsl(100 0% 0% / 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlayerMusicWrap = styled.div`
  cursor: pointer;
  padding-left: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 80px;
  border-bottom: 0.1px solid rgba(255, 255, 255, 0.3);
  &:hover {
    background: #1d160f;
  }
  img {
    margin-right: 20px;
    width: 60px;
    height: 60px;
    object-fit: cover;
    object-position: center;
  }
`;

const MusicInfo = styled.div`
  position: relative;
  left: ${(props) =>
    props.overdiplay || props.musicnum == props.index ? "-60px" : "0"};
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
