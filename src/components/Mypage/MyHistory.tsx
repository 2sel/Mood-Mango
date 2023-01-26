import { useState } from "react";
import { DataType, moodStorage } from "../common/MoodStorage";
import styled from "styled-components";
import Item from "./ImageCircle";
import MusicContainer from "../Rank/MusicContainer";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { getMusic } from "../../redux/modules/musics";

export const allPlay = (playList: DataType[]) => {};
const MyHistory = () => {
  const [mangoHistory, setMangoHistory] = useState(
    moodStorage.getMangoHistory()
  );

  //const playlistId = "PLWTycz4el4t4l6uuriz3OhqR2aKy86EEP";
  //const playlistId = "PLSUHIk4VSHCUT6yEZuwVRuXjjOUeQqxhl";

  const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(addPlayList(moodStorage.getMangoHistory()));
  //   //Aos.init();
  // }, []);
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

  // 더보기/간략히 상태값
  // false면 더보기가 보일꺼고 true이면 간략히 버튼이 보일꺼임
  const [detaily, setDetaily] = useState(false);
  // 간략히 볼때는 flex, 더보기 볼때는 block으로
  const [howFlex, setHowFlex] = useState("flex");

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

  const pagingSort = () => {
    const result = [];

    for (let i = nowPage; i < totalPage; i++) {
      result.push(
        <div style={{ display: "block" }}>
          <Item
            key={i}
            item={{ ...mangoHistory[i], index: i }}
            circleStyle={{ width: 180, height: 180 }}
          />
          <button onClick={() => itemPopper(mangoHistory[i])}>-</button>
        </div>
      );
      if (result.length === 5) break; //5개씩 뽑을꺼여서
    }
    return result;
  };

  const itemPopper = (data: DataType) => {
    if (moodStorage.popMangoHistory(data.id)) {
      alert("해당 기록 삭제 성공");
      setMangoHistory(moodStorage.getMangoHistory());
      // 데이터 하나를 지웠으니 totalPage 값에서 -1 하기
      setTotalPage(totalPage - 1);

      setNowPage(() => {
        // 한 페이지 아이템들을 다 지웠을 경우 그 전에 페이지로 이동시키게 하기
        return nowPage === totalPage - 1 ? nowPage - 5 : nowPage;
      });
    }
  };

  const more = () => {
    setDetaily(!detaily);
    setHowFlex(() => {
      return howFlex === "flex" ? "block" : "flex";
    });
  };

  const clearHistory = () => {
    if (moodStorage.clearMangoHistory()) {
      alert("전체 기록 삭제 하였습니다.");
      setTotalPage(0);
      setNowPage(0);
      setMangoHistory(moodStorage.getMangoHistory());
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
      <div>
        내가 들었던 곡
        <p
          onClick={clearHistory}
          style={{ display: !!mangoHistory.length ? "flex" : "none" }}
        >
          전체삭제
        </p>
      </div>
      <ThisContents style={{ display: howFlex }}>
        {mangoHistory.length !== 0 ? (
          <>
            {!detaily ? (
              <>
                <button
                  onClick={more}
                  style={{ display: !!mangoHistory.length ? "flex" : "none" }}
                >
                  더보기
                </button>

                {nextPage && (
                  <button onClick={() => pageHandler(nowPage + 5)}>
                    앞으로
                  </button>
                )}
                {prevPage && (
                  <button onClick={() => pageHandler(nowPage - 5)}>뒤로</button>
                )}

                <Wrapper>{pagingSort()}</Wrapper>
              </>
            ) : (
              <>
                <button
                  onClick={more}
                  style={{ display: !!mangoHistory.length ? "flex" : "none" }}
                >
                  간략히
                </button>
                {mangoHistory.map((item, idx) => {
                  return (
                    <>
                      <MusicContainer
                        data={item}
                        index={item.index}
                        key={idx}
                      />
                    </>
                  );
                })}
              </>
            )}
          </>
        ) : (
          <>처음이시군요!</>
        )}
      </ThisContents>
    </>
  );
};

export default MyHistory;

const ThisContents = styled.div`
  display: flex;
  font-size: 14px;
  margin-right: 130px;
  margin-left: 30px;
`;

const Wrapper = styled.div`
  margin-top: 70px;
  width: 100%;
  height: 400px;
  display: flex;
`;
