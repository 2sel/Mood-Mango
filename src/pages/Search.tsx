import React from "react";
import styled from "styled-components";
import Icon from "./../components/common/Icon";
import SearchList from "./../components/Search/SearchList";

const Search = () => {
  return (
    <Background>
      <SearchWrap>
        <SearchTitle>원하는 플레이리스트를 검색해보세요.</SearchTitle>
        <SearchInputBox>
          <SearchInput type="text" placeholder="분위기를 입력해주세요" />
          <InputButton type="submit">
            <Icon kind={"search"} />
          </InputButton>
        </SearchInputBox>
      </SearchWrap>
      <SearchList />
    </Background>
  );
};

export default Search;

const Background = styled.div`
  background-color: #000000;
  min-height: 110vh;
  width: 100%;
`;
const SearchWrap = styled.div`
  padding: 100px 100px 0px 100px;
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

const SearchInputBox = styled.div`
  position: relative;
  width: 100%;
`;
const SearchInput = styled.input`
  width: 90%;
  height: 65px;
  margin-top: 35px;
  background-color: #2a2a2a;
  border-radius: 15px;
  font-size: 20px;
  padding: 0 50px 0 35px;
  border: none;
`;

const InputButton = styled.button`
  width: 6%;
  height: 65px;
  position: absolute;
  top: 35%;
  right: 2%;
  cursor: pointer;
  border: none;
  border-radius: 15px;
  background-color: #2a2a2a;
`;
