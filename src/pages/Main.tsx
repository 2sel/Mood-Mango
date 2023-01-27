import React from "react";
import styled from "styled-components";
import Icon from "../components/common/Icon";
import { getMusic } from "../redux/modules/musics";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import BeatLoader from "react-spinners/BeatLoader";
import MusicContainer from "../components/Rank/MusicContainer";

const Main = () => {
  const dispatch = useAppDispatch();
  const datas = useAppSelector((state) => state.categories);
  const { musics, isLoading } = useAppSelector((state) => state.musics);
  let id = "";

  const onClickHandler = (data: any) => {
    switch (data) {
      case "뉴에이지":
        id = "PL31nVK1Q1BfFRnClXGE5CoHp6UlXqX6Pd";
        return dispatch(getMusic(id));
      case "발라드":
        id = "PL31nVK1Q1BfEvIGvQqw064187wHtsUaWP";
        return dispatch(getMusic(id));
      case "아이돌댄스곡":
        id = "PL31nVK1Q1BfFMgv_jjzaPHpPGpeh_5WdA";
        return dispatch(getMusic(id));
      case "시티팝":
        id = "PL31nVK1Q1BfF4pgbrGpZ11hZivbnag3Ic";
        return dispatch(getMusic(id));
      case "인디음악":
        id = "PL31nVK1Q1BfFsOJhlT2HupygWQU1L6kOv";
        return dispatch(getMusic(id));
      case "RNB힙합":
        id = "PL31nVK1Q1BfHlnPTrRFakc6Dle9aoW6Fo";
        return dispatch(getMusic(id));
      case "외국힙합":
        id = "PL31nVK1Q1BfHKuvkLSs_yR6YZ3sjp1qiR";
        return dispatch(getMusic(id));
      case "디스코펑크":
        id = "PL31nVK1Q1BfHQkWyTPYxen65D_H5XaDCo";
        return dispatch(getMusic(id));
      case "재즈":
        id = "PL31nVK1Q1BfF3rvKxLqo5FuIcMbjTf5k3";
        return dispatch(getMusic(id));
      case "로파이":
        id = "PL31nVK1Q1BfHDVl1BJAO2lb8cWe-9I2un";
        return dispatch(getMusic(id));
    }
  };

  return (
    <StyleBackground>
      <StyleWrap>
        <StyleTitle>
          주문하신 무드에 맞는 음악장르가 나왔습니다 &nbsp;
          <Icon kind="music" size={27} />
        </StyleTitle>
        <StyleCategoryWrap>
          {datas.map((data, index) => {
            return (
              <StyleCategoryItem
                key={index}
                onClick={() => onClickHandler(data)}
              >
                {data}
              </StyleCategoryItem>
            );
          })}
        </StyleCategoryWrap>
        <MusicListWrap>
          {isLoading ? (
            <LoadingWrap>
              <BeatLoader color="#FF830A" />
            </LoadingWrap>
          ) : (
            <>
              {musics.map((data, index) => (
                <MusicContainer
                  key={index}
                  index={index}
                  data={data}
                ></MusicContainer>
              ))}
            </>
          )}
        </MusicListWrap>
      </StyleWrap>
    </StyleBackground>
  );
};

const StyleBackground = styled.div`
  background-color: #000000;
  height: 100vh;
  width: 100%;
  padding: 50px 50px 0 50px;
  box-sizing: border-box;
`;

const StyleWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyleTitle = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 25px;
  color: #ffffff;
  margin-bottom: 30px;
`;

const StyleCategoryWrap = styled.div`
  width: 100%;
  max-width: 700px;
  height: 100px;
  display: flex;
  gap: 20px;
  padding-bottom: 20px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;

const StyleCategoryItem = styled.button`
  width: 170px;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex: 0 0 auto;
  background-color: #2a2a2a;
  padding: 5px 20px;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    border: 2px #ffb52b solid;
    transform: translateY(3px);
  }
  &:focus {
    background-color: #ffb52b;
  }
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

export default Main;
