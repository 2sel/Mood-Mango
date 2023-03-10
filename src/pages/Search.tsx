import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getMusic, resetPlaylist } from "../redux/modules/musics";
import { useAppDispatch } from "../hooks/hooks";
import { useAppSelector } from "../hooks/hooks";
import Icon from "./../components/common/Icon";
import Aos from "aos";
import "aos/dist/aos.css";
import MusicContainer from "../components/Rank/MusicContainer";

const Search = () => {
  const [search, setsearch] = useState("");
  const [result, setResult] = useState("");
  const musicsdata = useAppSelector((state) => state.musics);
  const dispatch = useAppDispatch();

  // 입력값을 가져와서 소문자로변경
  const getValue = (e: any) => {
    setsearch(e.target.value.toLowerCase());
  };
  // 띄어쓰기하지 않아도 검색할 수 있게 변경
  const filterTitle = musicsdata.popular.filter((item: any, index: any) => {
    return item.title
      .toLowerCase()
      .includes(result.toLocaleLowerCase().replace(" ", ""));
  });

  useEffect((): any => {
    Aos.init();
    return () => dispatch(resetPlaylist());
  }, []);

  return (
    <Background>
      <SearchWrap>
        <SearchTitle>원하는 플레이리스트를 검색해보세요.</SearchTitle>
        <SearchInputBox>
          <SearchInput
            type="text"
            placeholder="노래 제목을 입력해주세요"
            value={search}
            onChange={getValue}
          />

          <SearchButton
            onClick={() => {
              setResult(search);
            }}
          >
            <Icon kind="search" color="#ffffff"></Icon>
          </SearchButton>
        </SearchInputBox>

        {filterTitle?.map((item: any, index: any) =>
          getValue.length !== 0 ? (
            <MusicContainer
              key={item.id}
              index={index}
              data={item}
              genre="popular"
            ></MusicContainer>
          ) : null
        )}
      </SearchWrap>
    </Background>
  );
};

export default Search;

const Background = styled.div`
  background-color: #000000;
  min-height: 100vh;
  width: 100%;
  padding: 50px 0px 0 0px;
`;
const SearchWrap = styled.div`
  margin: 50px;
  display: flex;
  flex-direction: column;
`;

const SearchTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-weight: 600;
  font-size: 32px;
  color: #ffffff;
  padding-bottom: 30px;
`;

const SearchInputBox = styled.form`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const SearchInput = styled.input`
  color: white;
  width: 100%;
  height: 65px;
  margin: 35px 0 35px 0;
  background-color: #2a2a2a;
  border-radius: 15px;
  font-size: 20px;
  padding: 0 50px 0 35px;
  border: none;
`;

const SearchButton = styled.button`
  width: 60px;
  height: 60px;
  position: absolute;
  top: 28%;
  right: 1%;
  cursor: pointer;
  border: none;
  border-radius: 15px;
  background-color: #2a2a2a;
`;
