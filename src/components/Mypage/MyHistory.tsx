import { useState } from "react";
import { DataType, moodStorage } from "../common/MoodStorage";
import styled from "styled-components";
import { Introduce, Clear, Alarm, IconArea } from "./style";
import Paging from "../common/Paging";
import Icon from "../common/Icon";

const MyHistory = () => {
  const [mangoHistory, setMangoHistory] = useState(
    moodStorage.getMangoHistory()
  );
  const [indexPage, setIndexPage] = useState(0);
  // 끝 페이지 설정
  const [totalCount, setTotalCount] = useState(
    moodStorage.getMangoHistory().length ?? 0
  );

  const itemPopper = (data: DataType) => {
    if (moodStorage.popMangoHistory(data.id)) {
      alert("삭제 성공");
      setMangoHistory(moodStorage.getMangoHistory());
      // 데이터 하나를 지웠으니 totalPage 값에서 -1 하기
      setTotalCount(totalCount - 1);

      setIndexPage(() => {
        // 한 페이지 아이템들을 다 지웠을 경우 그 전에 페이지로 이동시키게 하기
        return indexPage === (totalCount - 1) / 5 ? indexPage - 1 : indexPage;
      });
    }
  };
  const clearHistory = () => {
    if (moodStorage.clearMangoHistory()) {
      alert("전체 기록 삭제 하였습니다.");
      setTotalCount(0);
      setIndexPage(0);
      setMangoHistory(moodStorage.getMangoHistory());
    }
  };

  return (
    <>
      <Introduce>
        내가 들었던 곡{" "}
        <IconArea>
          <Icon
            kind={"headSet"}
            size={60}
            style={{ position: "absolute", left: 15, top: 12 }}
            color={"white"}
          />
        </IconArea>
        <Clear
          onClick={clearHistory}
          display={mangoHistory.length}
          width={1350}
        >
          전체삭제
        </Clear>
      </Introduce>
      <ThisContents>
        {mangoHistory.length !== 0 ? (
          <>
            <Paging
              dataList={mangoHistory}
              setHandler={setMangoHistory}
              indexPage={indexPage}
              setIndexPage={setIndexPage}
              totalCount={totalCount}
              setTotalCount={setTotalCount}
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
  width: 1350px;
  display: flex;
  margin: 0 auto;
  height: 300px;
`;
