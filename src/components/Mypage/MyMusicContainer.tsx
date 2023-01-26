import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { useAppSelector } from "../../hooks/hooks";
import { PlayerToggle } from "../../redux/modules/musicplayer";
import Aos from "aos";
import Icon from "../common/Icon";

import "aos/dist/aos.css";
import { getMusicNum, togglePlay } from "../../redux/modules/musicplayer";
import Modal from "../Rank/Modal";
import { moodStorage } from "../common/MoodStorage";
import { getPlaylist } from "../../redux/modules/musics";

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

const MyMusicContainer = ({ data, index }: any) => {
  const [modalOpen, setModalOpen] = useState(false);

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };
  const dispatch = useAppDispatch();

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <MusicContainerWrap
      data-aos="fade-in"
      onClick={() => {
        dispatch(getPlaylist(moodStorage.getMangoHistory()));
        dispatch(PlayerToggle(true));
        dispatch(togglePlay(true));
        dispatch(getMusicNum(index));

        // moodStorage.addMangoHistory(data);
      }}
    >
      <MusicContainerOuter>
        <img src={data.thumbnail}></img>
        <RankNumber>{index + 1}</RankNumber>
        <MusicInfo>
          <MusicTitle>{data.title}</MusicTitle>
          <MusicViewCount>{data.viewconut}</MusicViewCount>
        </MusicInfo>
        <ChannelTitle>{data.channeltitle}</ChannelTitle>
        <Icon
          kind={"cloud"}
          size={25}
          style={{
            height: "80px",
          }}
          //  handler={() => moodStorage.addMangoPlayList(data)}
          handler={showModal}
        />
        {modalOpen && (
          <Modal setModalOpen={setModalOpen} data={{ ...data, index: index }} />
        )}
      </MusicContainerOuter>
    </MusicContainerWrap>
  );
};

export default MyMusicContainer;

const MusicContainerOuter = styled.div`
  display: flex;
  background: #121212;
`;

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
