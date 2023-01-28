import { useState, useEffect } from "react";
import Item from "../Mypage/ImageCircle";
import styled from "styled-components";
import Icon from "./Icon";
import { moodStorage } from "./MoodStorage";
import { DataType } from "./MoodStorage";

const Paging = (props: any) => {
  // 한 페이지당 데이터 5개씩 보여줄꺼임

  // 예시 )
  // ㅇㅇㅇㅇㅇ|ㅇㅇㅇㅇㅇ|ㅇㅇ
  // 01234|56789|1011 (index)
  // 1index  |  2index| 3index

  // 현재 페이지 설정, 0번 인덱스로 초기값 설정

  // 게시글이 5개 이상 있는 경우 버튼 보이게 하기
  const [nextPage, setNextPage] = useState(() => {
    return props.totalPage >= 5 ? true : false;
    // return props.length > 0 ? true : false;
  });

  // 이전 버튼은 처음에 보여주지 않아야함.
  const [prevPage, setPrevPage] = useState(false);

  // 앞으로,뒤로 버튼 클릭시
  const pageHandler = (indexPage: number) => {
    props.setIndexPage(indexPage);
    // 이전 버튼 표시 여부
    setPrevPage(() => {
      return indexPage >= 1 ? true : false;
    });
    // 앞으로 버튼 표시 여부
    setNextPage(() => {
      return indexPage < props.totalCount / 5 - 1 ? true : false;
    });
  };

  useEffect(() => {
    setPrevPage(() => {
      return props.indexPage >= 1 ? true : false;
    });

    setNextPage(() => {
      return props.indexPage < props.totalCount / 5 - 1 ? true : false;
    });
  }, [props.indexPage, props.totalCount]);

  const pagingSort = () => {
    const result = [];

    for (let i = props.indexPage * 5; i < props.totalCount; i++) {
      result.push(
        <div style={{ textAlign: "center", display: "block" }}>
          <Item
            key={i}
            storageData={props.dataList}
            item={{ ...props.dataList[i], index: i }}
            circleStyle={{ width: 180, height: 180 }}
          />
          <button
            onClick={() =>
              props.itemPopper(props.dataList[i], props.folderName)
            }
            style={{ all: "unset" }}
          >
            <Icon kind={"trash"} color={"#ffb52b"} />
          </button>
        </div>
      );
      if (result.length === 5) break; //5개씩 뽑을꺼여서
    }
    return result;
  };
  return (
    <Wrapper>
      {prevPage && (
        <button
          onClick={() => pageHandler(props.indexPage - 1)}
          style={{ all: "unset" }}
        >
          <Icon kind={"leftArrow"} color={"#ffb52b"} size={40} />
        </button>
      )}
      {pagingSort()}
      {nextPage && (
        <button
          onClick={() => pageHandler(props.indexPage + 1)}
          style={{ all: "unset" }}
        >
          <Icon kind={"rightArrow"} color={"#ffb52b"} size={40} />
        </button>
      )}
    </Wrapper>
  );
};

export default Paging;
const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
`;
