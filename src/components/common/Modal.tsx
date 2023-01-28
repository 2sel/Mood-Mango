import styled from "styled-components";
import { useEffect, useState } from "react";
import { moodStorage } from "./MoodStorage";
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

  return (
    <Container>
      <Close onClick={close}>완료</Close>

      <Title>플레이 리스트</Title>
      <div style={{ position: "relative" }}>
        <input
          type="text"
          value={playListName}
          onChange={(event) => playListNameHandler(event)}
          style={{ borderRadius: 10, border: "0 solid black", height: 20 }}
        ></input>
        <button
          onClick={() => {
            if (!moodStorage.addPlayListFolder(playListName)) {
              setPlayListName("");
              setPlayList(moodStorage.getMangoPlayList());
            }
          }}
          style={{
            border: "0 solid black",
            borderRadius: 10,
            top: 2,
            right: 5,
            position: "absolute",
          }}
        >
          +
        </button>
      </div>
      <PlayList>
        {Object.keys(playList).map((playListName) => {
          return (
            <PlayListInner>
              <div style={{ width: 50 }}>
                <button
                  onClick={() =>
                    moodStorage.addMangoPlayList(playListName, data)
                  }
                  style={{ border: "0 solid black", borderRadius: 10 }}
                >
                  +
                </button>
              </div>
              <div style={{ width: 100 }}>{playListName}</div>
            </PlayListInner>
          );
        })}
      </PlayList>
    </Container>
  );
};

export default Modal;

const Container = styled.div`
  /* 모달창 크기 */
  width: 200px;
  height: 300px;
  overflow: auto;
  /* 최상단 위치 */
  z-index: 999;

  /* 중앙 배치 */
  /* top, bottom, left, right 는 브라우저 기준으로 작동한다. */
  /* translate는 본인의 크기 기준으로 작동한다. */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  /* 모달창 디자인 */
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 300;
  /* color: #ffb52b; */

  background-color: #ffb52b;
  /* background-color: white; */
  border: 1px solid black;
  border-radius: 8px;
`;

/* 모달창 내부 X버튼 */
const Close = styled.div`
  position: absolute;
  font-size: 14px;
  right: 10px;
  top: 10px;
`;
const Title = styled.div`
  margin-top: 35px;
  margin-bottom: 20px;
`;

const PlayList = styled.div`
  display: block;
`;

const PlayListInner = styled.div`
  display: flex;

  margin-top: 10px;
`;
