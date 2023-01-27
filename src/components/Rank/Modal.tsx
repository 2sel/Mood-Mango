import styled from "styled-components";
import { useEffect, useState } from "react";
import { moodStorage } from "../common/MoodStorage";
const Modal = ({
  setModalOpen,
  data,
}: {
  setModalOpen: Function;
  data: any;
}) => {
  const [folderList, setFolderList] = useState(moodStorage.getMangoPlayList());

  const [folderName, setFolderName] = useState("");

  const close = () => {
    setModalOpen(false);
  };

  const folderNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFolderName(e.target.value);
  };

  return (
    <Container>
      <Close onClick={close}>X</Close>

      <div>플레이 리스트</div>
      <input
        type="text"
        value={folderName}
        onChange={(event) => folderNameHandler(event)}
      ></input>
      <button
        onClick={() => {
          if (!moodStorage.addPlayListFolder(folderName)) {
            setFolderName("");
            setFolderList(moodStorage.getMangoPlayList());
          }
        }}
      >
        폴더 추가
      </button>
      <div>
        {Object.keys(folderList).map((folderName) => {
          return (
            <>
              <div>{folderName}</div>
              <button
                onClick={() => moodStorage.addMangoPlayList(folderName, data)}
              >
                +
              </button>
            </>
          );
        })}
      </div>
    </Container>
  );
};

export default Modal;

const Container = styled.div`
  /* 모달창 크기 */
  width: 300px;
  height: 300px;

  /* 최상단 위치 */
  z-index: 999;

  /* 중앙 배치 */
  /* top, bottom, left, right 는 브라우저 기준으로 작동한다. */
  /* translate는 본인의 크기 기준으로 작동한다. */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* 모달창 디자인 */
  background-color: gray;
  border: 1px solid black;
  border-radius: 8px;
`;

/* 모달창 내부 X버튼 */
const Close = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`;
