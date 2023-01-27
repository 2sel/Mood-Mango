import { useState, useEffect } from "react";

import styled from "styled-components";
import { moodStorage } from "../common/MoodStorage";
import MyMusicContainer from "../Rank/MyMusicContainer";
import Aos from "aos";
import { useAppDispatch } from "../../hooks/hooks";

import "aos/dist/aos.css";

const MyPlayList = (): JSX.Element => {
  const dispatch = useAppDispatch();
  // const playlistId = "PLWTycz4el4t4l6uuriz3OhqR2aKy86EEP";
  //const playlistId = "PLSUHIk4VSHCUT6yEZuwVRuXjjOUeQqxhl";

  // useEffect(() => {
  //   dispatch(getaddMusic(playlistId));
  //   Aos.init();
  // }, []);

  const [foldersNameData, setFoldersNameData] = useState(
    Object.keys(moodStorage.getMangoPlayList())
  );
  const [folderListData, setFolderListData] = useState(
    Object.values(moodStorage.getMangoPlayList())
  );

  const [showList, setShowList] = useState(true);

  const initList = () => {
    setFoldersNameData(Object.keys(moodStorage.getMangoPlayList()));
    setFolderListData(Object.values(moodStorage.getMangoPlayList()));
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

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div>내 플레이 리스트</div>
      <ThisContents>
        {foldersNameData.length > 0 ? (
          <>
            {foldersNameData.map((name, index) => {
              return (
                <PlayList key={index}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p style={{ color: "#ffb52b", fontSize: 20, margin: 15 }}>
                      {name}
                    </p>
                    <p
                      style={{ color: "grey", fontSize: 15, margin: 15 }}
                      onClick={() => popFolder(name)}
                    >
                      폴더 삭제
                    </p>
                    <p
                      style={{
                        color: "grey",
                        fontSize: 15,
                        margin: 15,
                        display:
                          folderListData[index].length === 0 ? "none" : "flex",
                      }}
                      onClick={() => clearFolder(name)}
                    >
                      전체삭제
                    </p>
                  </div>

                  {folderListData[index].length > 0 ? (
                    // <div style={{ marginBottom: 40 }}>
                    <>
                      {folderListData[index].map((item, idx) => {
                        return (
                          <div style={{ display: "flex" }}>
                            <MyMusicContainer
                              data={item}
                              index={idx}
                              key={idx}
                              dataList={folderListData[index]}
                              name={name}
                              popItem={popItem}
                            />
                            {/* <button onClick={() => popItem(name, item.id)}>
                              x
                            </button> */}
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    <>저장한 데이터가 없습니다</>
                  )}
                </PlayList>
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
  flex-direction: column;
  margin-right: 15%;
  margin-left: 15%;
  margin-top: 50px;
`;
const Title = styled.div`
  /* margin: 30px; */
`;
