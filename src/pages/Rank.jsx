import Icon from "../components/common/Icon";
import Modal from "../components/common/Modal";
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
  // const playlistId = "PLWTycz4el4t4l6uuriz3OhqR2aKy86EEP";
  const playlistId = "PL31nVK1Q1BfHHZoHxUq5LeIUVLQ3ELQYy";

  useEffect(() => {
    dispatch(getMusic(playlistId));
    Aos.init();
    return () => dispatch(resetPlaylist());
  }, []);
  const [modalOpen, setModalOpen] = useState(false);
  const [videoData, setVideoData] = useState({});
  // 모달창 노출
  const showModal = (data) => {
    setModalOpen(true);
    setVideoData(data);
  };
  return (
    <Background>
      {modalOpen && <Modal setModalOpen={setModalOpen} data={videoData} />}
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
                <>
                  <MusicContainer
                    key={data.id}
                    index={index}
                    data={data}
                    showModal={showModal}
                  ></MusicContainer>
                </>
              ))}
            </>
          )}
        </MusicListWrap>
      </RankWrap>
    </Background>
  );
};

export default Rank;

const Background = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  background-color: #000000;
  min-height: 100vh;
  width: 100%;
  display: flex;
`;
const RankWrap = styled.div`
  width: 100%;
  margin: 50px 50px 0 50px;
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
