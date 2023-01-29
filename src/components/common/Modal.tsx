import styled from "styled-components";
import { useEffect, useState } from "react";
import { BiMusic, BiCloud, BiSearch } from "react-icons/bi";
import { DataType, moodStorage } from "./MoodStorage";
import Icon from "./Icon";
const Modal = ({
  setModalOpen,
  data,
}: {
  setModalOpen: Function;
  data: any;
}) => {
  const [playList, setPlayList] = useState(moodStorage.getMangoPlayList());

  const [playListName, setPlayListName] = useState("");

  const close = () => {
    setModalOpen(false);
  };

  const playListNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayListName(e.target.value);
  };

  const addPlayListData = (playListName: string, data: DataType) => {
    moodStorage.addMangoPlayList(playListName, data);
    setPlayList({ ...moodStorage.getMangoPlayList() });
  };

  return (
    <Container>
      <Close onClick={close}>
        <Icon kind="close" size={30} />
      </Close>

      <Title>
        <Icon kind={"cloud"} size={70} />
      </Title>
      <div style={{ position: "relative" }}>
        <input
          type="text"
          value={playListName}
          onChange={(event) => playListNameHandler(event)}
          style={{
            borderRadius: 10,
            border: "0 solid black",
            height: 25,
            marginBottom: 20,
          }}
        ></input>
        <button
          onClick={() => {
            if (!moodStorage.addPlayListFolder(playListName)) {
              setPlayListName("");
              setPlayList(moodStorage.getMangoPlayList());
            }
          }}
          style={{
            all: "unset",
            cursor: "pointer",
            height: 25,
          }}
        >
          <Icon
            kind="cloud"
            style={{ position: "absolute", bottom: 22, right: 110 }}
          />
        </button>
      </div>
      <PlayList>
        {Object.keys(playList).map((playListName, index) => {
          return (
            <PlayListInner key={index}>
              <PlayListItem onClick={() => addPlayListData(playListName, data)}>
                <ImgList>
                  <ImgItem src={playList[playListName][0]?.thumbnail} />
                  <ImgItem src={playList[playListName][1]?.thumbnail} />
                  <ImgItem src={playList[playListName][2]?.thumbnail} />
                  <ImgItem src={playList[playListName][3]?.thumbnail} />
                </ImgList>

                <PlayListName>{playListName}</PlayListName>
              </PlayListItem>
            </PlayListInner>
          );
        })}
      </PlayList>
    </Container>
  );
};

export default Modal;

const Container = styled.div`
  width: 460px;
  height: 700px;
  overflow: auto;
  z-index: 999;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 300;
  background-color: #ffb52b;
  border: 1px solid;
  border-radius: 2%;
`;

const PlayList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 440px;
  margin: 0 auto;
  padding: 10px;
`;

const PlayListItem = styled.div`
  width: 140px;
  height: 190px;
  display: block;
  margin-top: 10px;
  margin-left: 5px;
  cursor: pointer;
  border-radius: 10%;
  background-color: #ff830a;
`;
const Close = styled.div`
  position: absolute;
  cursor: pointer;
`;

const Title = styled.div`
  margin-top: 40px;
  margin-bottom: 15px;
  margin-left: auto;
  margin-right: auto;

  width: 80px;
`;

const PlayListInner = styled.div`
  display: block;
  text-align: center;
  margin-top: 10px;
`;
const ImgList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 106px;
  margin: 0 auto;
  padding: 20px;
`;

const ImgItem = styled.img<{ src: string }>`
  width: 51px;
  height: 51px;
  display: block;

  src: ${(props) => (!!props.src ? props.src : "")};
  border: 0px none;
  border-radius: 50%;
`;

const PlayListName = styled.p`
  width: 140px;
  height: 35%;
  margin-top: 6px;
  font-size: 17px;
`;
