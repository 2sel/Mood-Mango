import React from "react";
import styled from "styled-components";

const Search = () => {
  return (
    <Background>
      <SearchWrap>
        <SearchTitle>원하는 플레이리스트를 검색해보세요.</SearchTitle>
        <SearchInput></SearchInput>
      </SearchWrap>
    </Background>
  );
};

export default Search;

const Background = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  background-color: #000000;
  min-height: 100vh;
  width: 100%;
  display: flex;
`;
const SearchWrap = styled.div`
  padding: 6.25rem;
`;

const SearchTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  font-size: 2rem;
  color: #ffffff;
`;

const SearchInput = styled.input`
  width: 83.125rem;
  height: 4.0625rem;
  margin-top: 35px;
  background-color: #2a2a2a;
  border-radius: 15px;
  font-size: 1.25rem;
`;
