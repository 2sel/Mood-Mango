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
import { BiColorFill } from "react-icons/bi";
import { BsLockFill } from "react-icons/bs";

const Musicplayer = () => {
  const [videodiplay, setVideodiplay] = useState(false);
  const [repeatestate, setRepeateState] = useState(false);

  const [percentage, setPercentage] = useState(0);
  const [position, setPosition] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState(0);

  const [soundpercentage, setSoundPercentage] = useState(50);
  const [soundposition, setSoundPosition] = useState(0);
  const [soundmarginLeft, setSoundMarginLeft] = useState(0);
  const [soundBarWidth, setSoundBarWidth] = useState(0);

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [duration, setDuration] = useState("0:00");
  const [current, setCurrent] = useState("0:00");

  const rangeRef = useRef();
  const thumbRef = useRef();

  const SoundrangeRef = useRef();
  const SoundthumbRef = useRef();

  const reactplayerRef = useRef();

  const { playerdisplay, isPlay, musicnum } = useAppSelector(
    (state) => state.musicplayer
  );
  const { musics } = useAppSelector((state) => state.musics);

  const [musicsdata, setMusicsData] = useState(musics.slice());

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

  const SoundonChange = (e) => {
    setSoundPercentage(e.target.value);
  };

  const getCurrDuration = (data) => {
    const percent = (data.played * 100).toFixed(2);
    setPercentage(+percent);
  };

  const skipForward = () => {
    if (musicnum + 1 == musics.length) {
      dispatch(getMusicNum(0));
    } else {
      dispatch(getMusicNum(musicnum + 1));
    }
  };

  const skipBackward = () => {
    if (musicnum == 0) {
      dispatch(getMusicNum(musics.length - 1));
    } else {
      dispatch(getMusicNum(musicnum - 1));
    }
  };

  const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
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

  useEffect(() => {
    const soundrangeWidth =
      SoundrangeRef.current?.getBoundingClientRect().width;
    const soundthumbWidth =
      SoundthumbRef.current?.getBoundingClientRect().width; //전체 픽셀치
    const soundcenterThumb = (soundthumbWidth / 100) * soundpercentage * -1;
    const centersoundBar =
      soundthumbWidth +
      (soundrangeWidth / 100) * soundpercentage -
      (soundthumbWidth / 100) * soundpercentage;
    setSoundPosition(soundpercentage);
    setSoundMarginLeft(soundcenterThumb);
    setSoundBarWidth(centersoundBar);
  }, [soundpercentage]);

  return (
    <>
      {playerdisplay && (
        <>
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
              <Toggle
                onClick={() => {
                  setVideodiplay((e) => !e);
                }}
              >
                <Icon
                  kind="video"
                  size={20}
                  color={videodiplay ? "#ff830a" : "#ffffff"}
                />
              </Toggle>
              <Shuffle
                onClick={() => {
                  setMusicsData((e) => {
                    return shuffle(e);
                  });
                }}
              >
                <Icon kind="shuffle" size={20} />
              </Shuffle>
              <RepeateState
                onClick={() => {
                  setRepeateState((e) => !e);
                }}
              >
                {repeatestate ? (
                  <Icon kind="repeatone" size={20} />
                ) : (
                  <Icon kind="repeatall" size={20} />
                )}
              </RepeateState>
              <VolumeState>
                <Icon kind="volume" size={20} />
              </VolumeState>
              <SoundSliderWrap>
                <SoundSliderCover
                  style={{
                    width: `${soundBarWidth}px`,
                  }}
                ></SoundSliderCover>
                <SoundThumb
                  className="thumb"
                  ref={SoundthumbRef}
                  style={{
                    left: `${soundposition}%`,
                    marginLeft: `${soundmarginLeft}px`,
                  }}
                ></SoundThumb>
                <SoundMusicRange
                  type="range"
                  value={soundposition}
                  ref={SoundrangeRef}
                  min="0"
                  max="100"
                  step="0.01"
                  onChange={SoundonChange}
                ></SoundMusicRange>
              </SoundSliderWrap>
              <DownButton
                onClick={() => {
                  dispatch(PlayerToggle(false));
                }}
              ></DownButton>
            </SoundWrap>
          </MusicplayerWrap>
          <ReactPlayerWrap videodiplay={videodiplay}>
            <ReactPlayer
              volume={soundpercentage / 100}
              url={musics[musicnum].url}
              ref={reactplayerRef}
              onEnded={skipForward}
              loop={repeatestate}
              onProgress={(e) => {
                getCurrDuration(e);
                currentSet(e);
              }}
              onPlay={() => {
                dispatch(togglePlay(true));
              }}
              onPause={() => {
                dispatch(togglePlay(false));
              }}
              playing={isPlay}
              width={480}
              height={320}
              pip={true}
            ></ReactPlayer>
          </ReactPlayerWrap>
        </>
      )}
    </>
  );
};

export default Musicplayer;

const Toggle = styled.div`
  color: #ff830a;
  margin-left: 15px;
  cursor: pointer;
`;
const Shuffle = styled.div`
  margin-left: 15px;
  cursor: pointer;
`;
const RepeateState = styled.div`
  margin-left: 15px;
  cursor: pointer;
`;
const VolumeState = styled.div`
  margin-left: 15px;
`;
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
  z-index: 1;
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
  margin: 0 20px 0 15px;
  font-size: 14px;
  width: 60px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #9096a2;
`;

const MusicControl = styled.div`
  font-size: 16px;
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
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
  align-items: center;
  margin-left: auto;
  margin-right: 15px;
  display: flex;
  flex-direction: row-reverse;
  font-size: 14px;
  color: #9096a2;
  display: flex;
`;

const DownButton = styled.div``;

const SliderWrap = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 808px);
  position: relative;
  background-color: #808080;
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

const SoundSliderWrap = styled.div`
  display: flex;
  align-items: center;
  width: 120px;
  position: relative;
  background-color: #808080;
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

const SoundSliderCover = styled.div`
  background-color: #ffffff;
  width: 0%;
  height: 3px;
  display: block;
  position: absolute;
  border-radius: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  user-select: none;
  pointer-events: none;
`;

const SoundMusicRange = styled.input`
  -webkit-appearance: none;
  height: 30px;
  width: 100%;
  cursor: pointer;
  opacity: 0;
  margin: 0 auto;
  &::-webkit-slider-thumb {
    width: 14px;
    height: 14px;
    background: #350f2d;
    border: 1px solid #000000;
    border-radius: 50%;
    cursor: pointer;
    -webkit-appearance: none;
  }
`;

const SoundThumb = styled.div`
  width: 14px;
  height: 14px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.753);
  z-index: 3;
  background: #ffffff;
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
  bottom: ${(props) => (props.videodiplay ? "100px" : "-500px")};
  transition: all 0.2s;
`;
