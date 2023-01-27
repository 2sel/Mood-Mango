import React, { useState } from "react";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import { togglePlay, getMusicNum } from "../../redux/modules/musicplayer";
import { useAppDispatch } from "../../hooks/hooks";
import Icon from "../common/Icon";
import Playermusic from "./Playermusic";

const PlayerList = ({ musicsdata }) => {
  const dispatch = useAppDispatch();

  return (
    <PlayerListWrap id="scrollableDiv">
      <InfiniteScroll
        dataLength={musicsdata.length}
        style={{ display: "flex", flexDirection: "column" }} //To put endMessage and loader to the top.
        inverse={true} //
        hasMore={false}
        scrollableTarget="scrollableDiv"
      >
        {musicsdata.map((item, index) => (
          <Playermusic key={item.id} item={item} index={index}></Playermusic>
        ))}
      </InfiniteScroll>
    </PlayerListWrap>
  );
};

export default PlayerList;

const PlayerListWrap = styled.div`
  margin-left: 50px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 70%;
  overflow: auto;
`;
const PlayerMusic = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
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
