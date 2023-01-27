import { useState } from "react";
import { DataType, moodStorage } from "../common/MoodStorage";
import styled from "styled-components";
import Item from "./ImageCircle";
import Icon from "../common/Icon";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { getPlaylist } from "../../redux/modules/musics";

import Paging from "../common/Paging";

export const allPlay = (playList: DataType[]) => {};
const MyHistory = () => {
  const [mangoHistory, setMangoHistory] = useState(
    moodStorage.getMangoHistory()
  );
  const [nowPage, setNowPage] = useState(0);
  // 끝 페이지 설정
  const [totalPage, setTotalPage] = useState(
    moodStorage.getMangoHistory().length ?? 0
  );

  const itemPopper = (data: any, folderName?: any) => {
    if (moodStorage.popMangoHistory(data.id)) {
      alert("삭제 성공");
      setMangoHistory(moodStorage.getMangoHistory());
      // 데이터 하나를 지웠으니 totalPage 값에서 -1 하기
      setTotalPage(totalPage - 1);

      setNowPage(() => {
        // 한 페이지 아이템들을 다 지웠을 경우 그 전에 페이지로 이동시키게 하기
        return nowPage === totalPage - 1 ? nowPage - 5 : nowPage;
      });
    }
  };
  const clearHistory = () => {
    if (moodStorage.clearMangoHistory()) {
      alert("전체 기록 삭제 하였습니다.");
      setTotalPage(0);
      setNowPage(0);
      setMangoHistory(moodStorage.getMangoHistory());
    }
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        내가 들었던 곡
        <p
          onClick={clearHistory}
          style={{
            color: "grey",
            fontSize: 15,
            display: mangoHistory.length === 0 ? "none" : "block",
          }}
        >
          전체삭제
        </p>
      </div>
      <ThisContents style={{ textAlign: "center", display: "flex" }}>
        {mangoHistory.length !== 0 ? (
          <>
            <Paging
              dataList={mangoHistory}
              setHandler={setMangoHistory}
              nowPage={nowPage}
              setNowPage={setNowPage}
              totalPage={totalPage}
              setTotalPage={setTotalPage}
              itemPopper={itemPopper}
            />
          </>
        ) : (
          <Alarm>마음에 드는 영상을 봐주세요!</Alarm>
        )}
      </ThisContents>
    </>
  );
};

export default MyHistory;

const ThisContents = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  margin: 10px 0px;
  flex-direction: row;
`;

const Alarm = styled.p`
  font-size: 20px;
`;
