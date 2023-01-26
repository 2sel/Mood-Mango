import { useState } from "react";
import { DataType } from "../common/MoodStorage";
import styled from "styled-components";
import { moodStorage } from "../common/MoodStorage";
import MusicContainer from "../Rank/MusicContainer";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { getMusic } from "../../redux/modules/musics";
import Aos from "aos";
import "aos/dist/aos.css";
import { getPlaylist } from "../../redux/modules/musics";

const MyPlayList = ({
  props,
}: {
  props: { [key: string]: DataType[] };
}): JSX.Element => {
  const dispatch = useAppDispatch();
  // const playlistId = "PLWTycz4el4t4l6uuriz3OhqR2aKy86EEP";
  //const playlistId = "PLSUHIk4VSHCUT6yEZuwVRuXjjOUeQqxhl";

  // useEffect(() => {
  //   dispatch(getaddMusic(playlistId));
  //   Aos.init();
  // }, []);

  const [foldersNameData, setFoldersNameData] = useState(Object.keys(props));
  const [folderListData, setFolderListData] = useState(Object.values(props));

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

  const getlist = () => {
    dispatch(getPlaylist(folderListData));
  };

  return (
    <>
      <div>내 플레이 리스트</div>
      <ThisContents>
        {foldersNameData.length > 0 ? (
          <>
            {foldersNameData.map((name, index) => {
              return (
                <PlayList key={index}>
                  <div style={{ display: "flex", margin: 30 }}>
                    <Title>{name}</Title>
                    <p
                      style={{ color: "grey", fontSize: 15 }}
                      onClick={() => popFolder(name)}
                    >
                      폴더 삭제
                    </p>
                    <p
                      style={{ color: "grey", fontSize: 15 }}
                      onClick={() => clearFolder(name)}
                    >
                      전체삭제
                    </p>
                  </div>

                  {folderListData[index].length > 0 ? (
                    <>
                      {folderListData[index].map((item, idx) => {
                        return (
                          <>
                            <MusicContainer
                              data={item}
                              index={item.index}
                              key={idx}
                              getlist={getlist}
                            />
                            <button onClick={() => popItem(name, item.id)}>
                              x
                            </button>
                          </>
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
`;

const PlayList = styled.div`
  flex-direction: column;
  margin-right: 150px;
  margin-left: 50px;
`;
const Title = styled.div`
  /* margin: 30px; */
`;
