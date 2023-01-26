import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getMusic } from "../redux/modules/musics";
import { useAppDispatch } from "../hooks/hooks";
import { useAppSelector } from "../hooks/hooks";
import Icon from "./../components/common/Icon";
import SearchList from "./../components/Search/SearchList";
import Aos from "aos";
import "aos/dist/aos.css";

const Search = () => {
  const [userInput, setUserInput] = useState("");
  const { musics } = useAppSelector((state) => state.musics);

  const dispatch = useAppDispatch();
  const playlistId = "PLSUHIk4VSHCUT6yEZuwVRuXjjOUeQqxhl";

  useEffect(() => {
    console.log("asdasd");
    dispatch(getMusic(playlistId));
    Aos.init();
  }, []);

  // 입력값을 가져와서 소문자로변경
  const getValue = (e: any) => {
    setUserInput(e.target.value.toLowerCase());
  };

  // 데이터들을 배열로 monsters 에 배열 state로 담아준 상태
  const [searchMusic, setsearchMusic] = useState([]);

  // 데이터 목록중, name에 사용자 입력값이 있는 데이터만 불러오기
  // 사용자 입력값을 소문자로 변경해주었기 때문에 데이터도 소문자로
  const searched = searchMusic.filter((item: any) =>
    item.title.toLowerCase().includes(userInput)
  );

  return (
    <Background>
      <SearchWrap>
        <SearchTitle>원하는 플레이리스트를 검색해보세요.</SearchTitle>
        <SearchInputBox>
          <SearchInput
            type="text"
            placeholder="분위기를 입력해주세요"
            onChange={getValue}
          />
          <InputButton type="submit">
            <Icon kind={"search"} />
          </InputButton>
        </SearchInputBox>
      </SearchWrap>
      {searched.map((item: any) => (
        <SearchList key={item.id} {...item} /> // 잔여연산자 사용
      ))}
    </Background>
  );
};

export default Search;

const Background = styled.div`
  background-color: #000000;
  min-height: 100vh;
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

const SearchInputBox = styled.form`
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
