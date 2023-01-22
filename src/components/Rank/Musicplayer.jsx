import React from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { useEffect, useState } from "react";
import {
  IoPlay,
  IoPlaySkipBack,
  IoPlaySkipForward,
  IoVolumeHigh,
  IoChevronDown,
} from "react-icons/io5";
import ReactPlayer from "react-player";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { PlayerToggle } from "../../redux/modules/musicplayer";

const Musicplayer = () => {
  const { playerdisplay } = useAppSelector((state) => state.musicplayer);

  const dispatch = useAppDispatch();

  return (
    <>
      {playerdisplay && (
        <MusicplayerWrap>
          <img src="https://i.ytimg.com/vi/fgSXAKsq-Vo/maxresdefault.jpg"></img>
          <MusicInfo>
            <MusicTitle>리와인드 (RE:WIND)</MusicTitle>
            <MusicChannelTitle>이세계아이돌</MusicChannelTitle>
          </MusicInfo>
          <MusicControl>
            <IoPlaySkipBack size="20px"></IoPlaySkipBack>
            <IoPlay size="20px"></IoPlay>
            <IoPlaySkipForward size="20px"></IoPlaySkipForward>
          </MusicControl>
          <MusicTime>0:00/3:00</MusicTime>
          <MusicTimeBar
            type="range"
            min="0"
            max="1000"
            // ref={seekBar}
            // onChange={(e) => changeProgress(e.target.value)}
          />
          <SoundWrap>
            <IoVolumeHigh size="20px"></IoVolumeHigh>
            <SoundBar
              type="range"
              min="0"
              max="1000"
              // ref={seekBar}
              // onChange={(e) => changeProgress(e.target.value)}
            />{" "}
            <DownButton>
              <IoChevronDown
                size="30px"
                onClick={() => {
                  dispatch(PlayerToggle(false));
                }}
              ></IoChevronDown>
            </DownButton>
          </SoundWrap>{" "}
        </MusicplayerWrap>
      )}
    </>
  );
};

export default Musicplayer;

const MusicplayerWrap = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 300;
  color: white;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 90px;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #000000;
  align-items: center;
  img {
    width: 168px;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const MusicInfo = styled.div`
  padding: 15px;
  margin-left: 20px;
  width: 150px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const MusicTime = styled.div`
  margin: 0 20px;
  font-size: 14px;
  width: 60px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #9096a2;
`;
const MusicTimeBar = styled.input`
  width: 70%;
  background-color: #f7f0f0;
  height: 20px;
`;
const SoundBar = styled.input`
  margin-left: 10px;
  margin-right: 20px;
  width: 120px;
  background-color: #f7f0f0;
  height: 20px;
`;
const MusicControl = styled.div`
  font-size: 16px;
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const MusicTitle = styled.div`
  font-size: 16px;
  display: flex;
`;
const MusicChannelTitle = styled.div`
  font-size: 14px;
  color: #9096a2;
  display: flex;
`;
const SoundWrap = styled.div`
  padding-left: 20px;
  align-items: center;
  margin-left: auto;
  display: flex;
  width: 240px;
  font-size: 14px;
  color: #9096a2;
  display: flex;
`;

const DownButton = styled.div``;
