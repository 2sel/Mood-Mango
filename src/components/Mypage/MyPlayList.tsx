import { useState, useEffect } from "react";

import styled from "styled-components";
import { moodStorage } from "../common/MoodStorage";
import MyMusicContainer from "../Rank/MyMusicContainer";
import Aos from "aos";
import { useAppDispatch } from "../../hooks/hooks";

import "aos/dist/aos.css";

const MyPlayList = (): JSX.Element => {
  const [playList, setPlayList] = useState(
    Object.keys(moodStorage.getMangoPlayList())
  );
  const [playListData, setPlayListData] = useState(
    Object.values(moodStorage.getMangoPlayList())
  );

  const initList = () => {
    setPlayList(Object.keys(moodStorage.getMangoPlayList()));
    setPlayListData(Object.values(moodStorage.getMangoPlayList()));
  };
  const clearFolder = (folderName: string) => {
    moodStorage.clearMangoPlay(folderName);
    initList();
  };

  const popItem = (folderName: string, id: string) => {
    moodStorage.popMangoPlay(folderName, id);
    initList();
  };

  const popFolder = (folderName: string) => {
    moodStorage.popMangoPlayList(folderName);
    initList();
  };

  return (
    <>
      <div>마이 플레이 리스트</div>
      <ThisContents>
        {playList.length > 0 ? (
          <>
            {playList.map((playListName, index) => {
              return (
                <PlayListWrap key={index}>
                  <PlayList>
                    <PlayListName>{playListName}</PlayListName>
                    <Clear onClick={() => popFolder(playListName)} display={1}>
                      폴더 삭제
                    </Clear>
                    <Clear
                      display={playList[index].length}
                      onClick={() => clearFolder(playListName)}
                    >
                      전체삭제
                    </Clear>
                  </PlayList>

                  {playListData[index].length > 0 ? (
                    <>
                      {playListData[index].map((item, idx) => {
                        return (
                          <PlayListData>
                            <MyMusicContainer
                              data={item}
                              index={idx}
                              key={idx}
                              dataList={playListData[index]}
                              name={playListName}
                              popItem={popItem}
                            />
                          </PlayListData>
                        );
                      })}
                    </>
                  ) : (
                    <>저장한 데이터가 없습니다</>
                  )}
                </PlayListWrap>
              );
            })}
          </>
        ) : (
          <>저장한 플레이 리스트가 없습니다</>
        )}
      </ThisContents>
    </>
  );
};

export default MyPlayList;

const ThisContents = styled.div`
  width: 100%;
  height: 400px;
  font-size: 20px;
  margin-bottom: 100px;
`;

const PlayList = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
const PlayListWrap = styled.div`
  flex-direction: column;
  margin-right: 15%;
  margin-left: 15%;
  margin-top: 50px;
`;
const Clear = styled.p<{ display: number }>`
  color: grey;
  font-size: 15px;
  display: ${(props) => (!!props.display ? "flex" : "none")};
  margin-top: 4px;

  margin-left: 5px;
  cursor: pointer;
`;

const PlayListName = styled.p`
  color: #ffb52b;
  font-size: 20;
  margin: 15;
`;

const PlayListData = styled.div`
  display: flex;
`;
