import React from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import ReactPlayer from "react-player";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  PlayerToggle,
  togglePlay,
  getMusicNum,
} from "../../redux/modules/musicplayer";
import Icon from "../common/Icon";
import Marquee from "react-fast-marquee";

const Musicplayer = () => {
  const [percentage, setPercentage] = useState(0);
  const [position, setPosition] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [duration, setDuration] = useState("0:00");
  const [current, setCurrent] = useState("0:00");

  const rangeRef = useRef();
  const thumbRef = useRef();
  const reactplayerRef = useRef();

  const { playerdisplay, isPlay, musicnum } = useAppSelector(
    (state) => state.musicplayer
  );
  const { playlist, musics } = useAppSelector((state) => state.musics);

  const dispatch = useAppDispatch();

  const durationSet = () => {
    let seconds = Math.floor(reactplayerRef.current?.getDuration());
    let min = parseInt((seconds % 3600) / 60);
    let sec = seconds % 60;
    if (sec < 10) {
      setDuration(`${min}:0${sec}`);
    } else {
      setDuration(`${min}:${sec}`);
    }
  };

  const currentSet = ({ playedSeconds }) => {
    let Seconds = Math.floor(playedSeconds);
    let min = parseInt((Seconds % 3600) / 60);
    let sec = Seconds % 60;
    if (sec < 10) {
      setCurrent(`${min}:0${sec}`);
    } else {
      setCurrent(`${min}:${sec}`);
    }
  };

  const onChange = (e) => {
    setPercentage(e.target.value);
    reactplayerRef.current.seekTo(e.target.value / 100, "fraction");
  };

  const getCurrDuration = (data) => {
    const percent = (data.played * 100).toFixed(2);
    setPercentage(+percent);
  };

  const skipForward = () => {
    if (musicnum + 1 == playlist.length) {
      dispatch(getMusicNum(0));
    } else {
      dispatch(getMusicNum(musicnum + 1));
    }
  };
  const skipBackward = () => {
    if (musicnum == 0) {
      dispatch(getMusicNum(playlist.length - 1));
    } else {
      dispatch(getMusicNum(musicnum - 1));
    }
  };

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const rangeWidth = rangeRef.current?.getBoundingClientRect().width;
    const thumbWidth = thumbRef.current?.getBoundingClientRect().width; //전체 픽셀치
    const centerThumb = (thumbWidth / 100) * percentage * -1;
    const centerProgressBar =
      thumbWidth +
      (rangeWidth / 100) * percentage -
      (thumbWidth / 100) * percentage;
    setPosition(percentage);
    setMarginLeft(centerThumb);
    setProgressBarWidth(centerProgressBar);
    durationSet();
  }, [percentage, windowSize]);

  return (
    <>
      {playerdisplay && (
        <MusicplayerWrap>
          <img src={musics[musicnum].thumbnail}></img>
          <MarqueeWrap>
            <Marquee gradientWidth={0}>
              <MusicInfo>
                <MusicTitle>{musics[musicnum].title}</MusicTitle>
                <MusicChannelTitle>
                  {musics[musicnum].channeltitle}
                </MusicChannelTitle>
              </MusicInfo>
            </Marquee>
          </MarqueeWrap>
          <MusicControl>
            <div onClick={skipBackward}>
              <Icon kind="skipback" size={16} />
            </div>
            <div
              onClick={() => {
                dispatch(togglePlay(!isPlay));
              }}
            >
              {isPlay ? (
                <Icon kind="pause" size={28} />
              ) : (
                <Icon kind="play" size={28} />
              )}
            </div>
            <div onClick={skipForward}>
              <Icon kind="skipforward" size={16} />
            </div>
          </MusicControl>
          <MusicTime>
            {current}/{duration}
          </MusicTime>
          <SliderWrap>
            <SliderCover
              style={{
                width: `${progressBarWidth}px`,
              }}
            ></SliderCover>
            <Thumb
              className="thumb"
              ref={thumbRef}
              style={{
                left: `${position}%`,
                marginLeft: `${marginLeft}px`,
              }}
            ></Thumb>
            <MusicRange
              type="range"
              value={position}
              ref={rangeRef}
              step="0.01"
              onChange={onChange}
            ></MusicRange>
          </SliderWrap>
          <SoundWrap>
            <Icon kind="volume" size={20} />
            <SoundBar type="range" min="0" max="1000" />
            <DownButton
              onClick={() => {
                dispatch(PlayerToggle(false));
              }}
            >
              <Icon kind="playerhide" size={30} />
            </DownButton>
          </SoundWrap>
          <ReactPlayerWrap>
            <ReactPlayer
              url={playlist[musicnum]}
              ref={reactplayerRef}
              onEnded={skipForward}
              onProgress={(e) => {
                getCurrDuration(e);
                currentSet(e);
              }}
              playing={isPlay}
              width={480}
              height={320}
            ></ReactPlayer>
          </ReactPlayerWrap>
        </MusicplayerWrap>
      )}
    </>
  );
};

export default Musicplayer;

const MarqueeWrap = styled.div`
  width: 150px;
`;

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
  width: calc(100% - 860px);
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

const SliderWrap = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 860px);
  position: relative;
  background-color: #ffffff;
  border-radius: 10px;
  height: 3px;
  & ::before {
    content: "";
    width: 100%;
    height: 3px;
    display: block;
    position: absolute;
    border-radius: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
`;

const SliderCover = styled.div`
  background-color: #ff830a;
  width: 0%;
  height: 4px;
  display: block;
  position: absolute;
  border-radius: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  user-select: none;
  pointer-events: none;
`;

const MusicRange = styled.input`
  -webkit-appearance: none;
  height: 30px;
  width: 100%;
  cursor: pointer;
  opacity: 0;
  margin: 0 auto;
  &::-webkit-slider-thumb {
    width: 20px;
    height: 20px;
    background: #350f2d;
    border: 1px solid #000000;
    border-radius: 50%;
    cursor: pointer;
    -webkit-appearance: none;
  }
`;

const Thumb = styled.div`
  width: 20px;
  height: 20px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.753);
  z-index: 3;
  background: #ff830a;
  position: absolute;
  border-radius: 50%;
  top: 50%;
  transform: translate(0%, -50%);
  pointer-events: none; /* Remove pointer events on thumb so user can click on the actual thumb beaneath it!  */
  user-select: none; /*  Prevent Accidentally highlighting the number while sliding the cursor  */
`;

const ReactPlayerWrap = styled.div`
  position: fixed;
  right: 20px;
  bottom: 100px;
`;
