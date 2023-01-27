import { useState } from "react";
import { DataType } from "../common/MoodStorage";
import styled from "styled-components";
import { moodStorage } from "../common/MoodStorage";
import Paging from "../common/Paging";

import "aos/dist/aos.css";
import { StringMappingType } from "typescript";

const MyPlayList = (): JSX.Element => {
  const [mangoPlayList, setMangoPlayList] = useState(
    moodStorage.getMangoPlayList()
  );

  const [foldersNameData, setFoldersNameData] = useState(
    Object.keys(mangoPlayList)
  );
  const [folderListData, setFolderListData] = useState(
    Object.values(mangoPlayList)
  );

  const [nowPage, setNowPage] = useState(() => {
    const folderNowPage: any = new Map();

    for (let i in foldersNameData) {
      folderNowPage.set(foldersNameData[i], 0);
    }
    return folderNowPage;
  });
  // 끝 페이지 설정
  const [totalPage, setTotalPage] = useState(() => {
    const folderTotalPage: any = new Map();

    for (let i in foldersNameData) {
      folderTotalPage.set(foldersNameData[i], folderListData[i].length);
    }
    return folderTotalPage;
  });

  const initList = () => {
    setFoldersNameData(Object.keys(moodStorage.getMangoPlayList()));
    setFolderListData(Object.values(moodStorage.getMangoPlayList()));
  };
  const clearFolder = (folderName: string) => {
    moodStorage.clearMangoPlay(folderName);
    initList();
  };
  const itemPopper = (data: any, folderName: any) => {
    if (moodStorage.popMangoPlay(folderName, data.id)) {
      alert("삭제 성공");
      setMangoPlayList(moodStorage.getMangoPlayList());
      // 데이터 하나를 지웠으니 totalPage 값에서 -1 하기
      setTotalPage(() => {
        const folderTotalPage = totalPage.get(folderName);
        totalPage.set(folderName, folderTotalPage - 1);
        console.log(totalPage.get(folderName));
      });

      setNowPage(() => {
        // 한 페이지 아이템들을 다 지웠을 경우 그 전에 페이지로 이동시키게 하기
        const folderNowPage = nowPage.get(folderName);
        return nowPage.get(folderName) === totalPage.get(folderName) - 1 &&
          totalPage.get(folderName) !== 1
          ? nowPage.set(folderName, folderNowPage - 5)
          : nowPage.set(folderName, folderNowPage);
      });
    }
  };
  // const popItem = (folderName: string, id: string) => {
  //   moodStorage.popMangoPlay(folderName, id);
  //   initList();
  // };

  const popFolder = (folderName: string) => {
    moodStorage.popMangoPlayList(folderName);
    initList();
  };

  return (
    <>
      <div>내 플레이 리스트</div>
      <ThisContents>
        {foldersNameData.length > 0 ? (
          <>
            {foldersNameData.map((folderName, index) => {
              return (
                <PlayList key={index}>
                  <div style={{ display: "flex", margin: 30 }}>
                    <>{folderName}</>
                    <p
                      style={{ color: "grey", fontSize: 15 }}
                      onClick={() => popFolder(folderName)}
                    >
                      폴더 삭제
                    </p>
                    <p
                      style={{
                        color: "grey",
                        fontSize: 15,
                        display:
                          folderListData[index].length === 0 ? "none" : "block",
                      }}
                      onClick={() => clearFolder(folderName)}
                    >
                      전체삭제
                    </p>
                  </div>

                  {folderListData[index].length > 0 ? (
                    <>
                      <Paging
                        dataList={folderListData[index]}
                        setHandler={setFolderListData}
                        nowPage={nowPage.get(foldersNameData[index])}
                        setNowPage={setNowPage}
                        totalPage={totalPage.get(foldersNameData[index])}
                        setTotalPage={setTotalPage}
                        folderName={foldersNameData[index]}
                        itemPopper={itemPopper}
                      />
                    </>
                  ) : (
                    <>저장한 데이터가 없습니다</>
                  )}
                </PlayList>
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

const ThisContents = styled.div`
  width: 100%;
  height: auto;
  font-size: 20px;
  margin-bottom: 100px;
`;

const PlayList = styled.div`
  //flex-direction: column;
  margin-right: 20%;
  margin-left: 20%;
`;

const Alarm = styled.p`
  font-size: 20px;
`;
