import { useState, useEffect } from "react";

import styled from "styled-components";
import { moodStorage } from "../common/MoodStorage";
import MyMusicContainer from "../Rank/MyMusicContainer";
import Icon from "../common/Icon";
import { Introduce, Clear, IconArea, Alarm } from "./style";
import InfiniteScroll from "react-infinite-scroll-component";

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
      <Introduce>
        내 무드 저장소
        <IconArea>
          <Icon
            kind={"cloud"}
            size={60}
            style={{ position: "absolute", left: 15, top: 12 }}
            color={"white"}
          />
        </IconArea>
      </Introduce>
      <ThisContents
        playList={playList}
        height={playList.length}
        data-aos="fade-up"
        id="scrollableDiv"
      >
        {playList.length > 0 ? (
          <>
            {playList.map((playListName, index) => {
              return (
                <PlayListWrap>
                  <PlayList key={index}>
                    <PlayListName>{playListName}</PlayListName>
                    <Clear
                      onClick={() => popFolder(playListName)}
                      display={1}
                      marginTop={2}
                      marginLeft={10}
                      marginRight={1}
                    >
                      폴더 삭제
                    </Clear>

                    <Clear
                      display={playList[index].length}
                      onClick={() => clearFolder(playListName)}
                      marginTop={2}
                      marginLeft={2}
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
          <Alarm>저장한 플레이 리스트가 없습니다</Alarm>
        )}
      </ThisContents>
    </>
  );
};

export default MyPlayList;

const ThisContents = styled.div<{
  playList: string[];
  height?: number;
}>`
  width: 1350px;
  height: ${(props) => (!!props.height ? `${props.height * 300}px` : "300px")};
  font-size: 20px;
  margin: 0 auto;
  text-align: center;
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

const PlayListName = styled.p`
  color: #ff830a;
  font-size: 20;
  margin: 15;
`;

const PlayListData = styled.div`
  display: flex;
`;
