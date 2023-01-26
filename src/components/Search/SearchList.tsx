import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { getMusic } from "../redux/modules/musics";
import { useAppDispatch } from "../hooks/hooks";
import { useAppSelector } from "../hooks/hooks";
import MusicContainer from "../components/Rank/MusicContainer";
import BeatLoader from "react-spinners/BeatLoader";
import Aos from "aos";
import "aos/dist/aos.css";

const SearchList = () => {
  const dispatch = useAppDispatch();
  const { musics, playlist, isLoading } = useAppSelector(
    (state) => state.musics
  );
  // const playlistId = "PLWTycz4el4t4l6uuriz3OhqR2aKy86EEP";
  const playlistId = "PLSUHIk4VSHCUT6yEZuwVRuXjjOUeQqxhl";

  useEffect(() => {
    dispatch(getMusic(playlistId));
    Aos.init();
  }, []);
  return (
    <RankWrap data-aos="fade-up">
      <MusicListWrap>
        {isLoading ? (
          <LoadingWrap>
            <BeatLoader color="#FF830A" />
          </LoadingWrap>
        ) : (
          <>
            {musics.map((data, index) => (
              <MusicContainer
                key={data.id}
                index={index}
                data={data}
                playlist={playlist}
              ></MusicContainer>
            ))}
          </>
        )}
      </MusicListWrap>
    </RankWrap>
  );
};

export default SearchList;

const RankWrap = styled.div`
  width: 100%;
  margin: 50px 50px 0 50px;
  display: flex;
  flex-direction: column;
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
