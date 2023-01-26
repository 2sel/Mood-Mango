import React from "react";
import styled from "styled-components";
import Icon from "./../components/common/Icon";

const Search = () => {
  // const [searchText, setSearchText] = useState("");
  // const [value, setValue] = useState("");
  // const inputRef = useRef<HTMLInputElement>(null);

  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setSearchText(value);
  // };

  return (
    <Background>
      <SearchWrap>
        <SearchTitle>원하는 플레이리스트를 검색해보세요.</SearchTitle>
        <SearchInputBox>
          <SearchInput
            type="text"
            // reaf={inputRef}
            // onChange={handleChangeSearchText}
            placeholder="분위기를 입력해주세요"
          />
          <InputButton
            type="submit"
            onClick={() => {
              alert("확인");
            }}
          >
            <Icon kind={"search"} />
          </InputButton>
        </SearchInputBox>
      </SearchWrap>
    </Background>
  );
};

export default Search;

const Background = styled.div`
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
  font-size: 1.25rem;
  padding: 0 50px 0 35px;
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
