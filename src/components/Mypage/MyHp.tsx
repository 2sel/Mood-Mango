import { useState, useEffect } from "react";
import Item from "./ImageCircle";
import { moodStorage } from "../common/MoodStorage";
import Icon from "../common/Icon";
import { DataType } from "../common/MoodStorage";
import styled from "styled-components";
import History from "./History";

const MyHp = (props: any) => {
  const [mangoHistory, setMangoHistory] = useState(
    moodStorage.getMangoHistory()
  );
  const [mangoPlayList, setMangoPlayList] = useState(
    moodStorage.getMangoPlayList()
  );
  // 한 페이지당 데이터 5개씩 보여줄꺼임

  // 예시 )
  // ㅇㅇㅇㅇㅇ|ㅇㅇㅇㅇㅇ|ㅇㅇ
  // 01234|56789|1011 (index)
  // 1페이지  |  2페이지| 3페이지

  // 현재 페이지 설정, 0번 인덱스로 초기값 설정
  const [nowPage, setNowPage] = useState(0);
  // 끝 페이지 설정
  const [totalPage, setTotalPage] = useState(
    moodStorage.getMangoHistory().length ?? 0
  );
  // 게시글이 5개 이상 있는 경우 버튼 보이게 하기
  const [nextPage, setNextPage] = useState(() => {
    return totalPage >= 5 ? true : false;
    // return props.length > 0 ? true : false;
  });

  // 이전 버튼은 처음에 보여주지 않아야함.
  const [prevPage, setPrevPage] = useState(false);

  // 앞으로,뒤로 버튼 클릭시
  const pageHandler = (nowPage: number) => {
    // 지금 nowPage에서 +5, 또는 -5 로 들어올꺼임
    // 그래야 페이지 이동이 가능함
    setNowPage(nowPage);
    // 이전 버튼 표시 여부
    setPrevPage(() => {
      return nowPage >= 5 ? true : false;
    });
    // 앞으로 버튼 표시 여부
    setNextPage(() => {
      return nowPage < totalPage - 5 ? true : false;
    });
  };

  const pagingSort = (mangoList: any) => {
    const result = [];

    for (let i = nowPage; i < totalPage; i++) {
      result.push(
        <div style={{ textAlign: "center", display: "block" }}>
          <Item
            key={i}
            storageData={props.handler}
            item={{ ...mangoList[i], index: i }}
            circleStyle={{ width: 180, height: 180 }}
          />
          <button
            //onClick={() => itemPopper(mangoList[i])}
            style={{ all: "unset" }}
          >
            <Icon kind={"trash"} color={"white"} />
          </button>
        </div>
      );
      if (result.length === 5) break; //5개씩 뽑을꺼여서
    }
    return result;
  };

  const itemPopper = (data: DataType, setHanlder: any, handler: any) => {
    if (moodStorage.popMangoHistory(data.id)) {
      alert("해당 기록 삭제 성공");
      setHanlder(handler);
      // 데이터 하나를 지웠으니 totalPage 값에서 -1 하기
      setTotalPage(totalPage - 1);

      setNowPage(() => {
        // 한 페이지 아이템들을 다 지웠을 경우 그 전에 페이지로 이동시키게 하기
        return nowPage === totalPage - 1 ? nowPage - 5 : nowPage;
      });
    }
  };

  //   const more = () => {
  //     setDetaily(!detaily);
  //     setHowFlex(() => {
  //       return howFlex === "flex" ? "block" : "flex";
  //     });
  //     dispatch(getPlaylist(moodStorage.getMangoHistory()));
  //   };

  const clearHistory = () => {
    if (moodStorage.clearMangoHistory()) {
      alert("전체 기록 삭제 하였습니다.");
      setTotalPage(0);
      setNowPage(0);
      //setMangoList(props.handler);
    }
  };

  useEffect(() => {
    setPrevPage(() => {
      return nowPage >= 5 ? true : false;
    });

    setNextPage(() => {
      return nowPage < totalPage - 5 ? true : false;
    });
  }, [nowPage, totalPage]);
  return (
    <>
      <History
        prevPage={prevPage}
        nextPage={nextPage}
        pagingSort={pagingSort}
        pageHandler={pageHandler}
        clearHandler={clearHistory}
      />
    </>
  );
};

export default MyHp;

const ThisContents = styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: 50px;
  flex-direction: row;
`;

const Wrapper = styled.div`
  margin-right: 20%;
  display: flex;
  margin-left: 20%;
`;

const Alarm = styled.p`
  font-size: 20px;
`;
