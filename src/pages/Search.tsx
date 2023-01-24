import React from "react";
import styled from "styled-components";
import MusicBox from "./../components/Main/MusicBox";

const Search = () => {
  return (
    <Background>
      <SearchWrap>
        <SearchTitle>원하는 플레이리스트를 검색해보세요.</SearchTitle>
        <SearchInput
          placeholder="분위기를 입력해주세요"
          type="search"
        ></SearchInput>
      </SearchWrap>
      <MusicBox></MusicBox>
    </Background>
  );
};

export default Search;

const Background = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  background-color: #000000;
  height: 100vh;
  width: 100%;
`;
const SearchWrap = styled.div`
  padding: 6.25rem;
`;

const SearchTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-weight: 600;
  font-size: 2rem;
  color: #ffffff;
`;

const SearchInput = styled.input`
  width: 90%;
  height: 4.0625rem;
  margin-top: 35px;
  background-color: #2a2a2a;
  border-radius: 15px;
  font-size: 1.25rem;
  padding: 0 50px 0 35px;
`;
