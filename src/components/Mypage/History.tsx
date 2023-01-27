import styled from "styled-components";
import Icon from "../common/Icon";
const History = (props: any) => {
  return (
    <>
      <div style={{ display: "flex" }}>
        내가 들었던 곡
        <p
          onClick={props.clearHandler}
          style={{
            color: "grey",
            fontSize: 15,
            // display: props.dataList.length === 0 ? "none" : "block",
          }}
        >
          전체삭제
        </p>
      </div>
      <ThisContents style={{ textAlign: "center", display: "flex" }}>
        {props.dataList.length !== 0 ? (
          <>
            {props.prevPage && (
              <button
                onClick={() => props.pageHandler(props.nowPage - 5)}
                style={{ all: "unset" }}
              >
                <Icon kind={"leftArrow"} color={"white"} />
              </button>
            )}
            <Wrapper>{props.pagingSort()}</Wrapper>
            {props.nextPage && (
              <button
                onClick={() => props.pageHandler(props.nowPage + 5)}
                style={{ all: "unset" }}
              >
                <Icon kind={"rightArrow"} color={"white"} />
              </button>
            )}
          </>
        ) : (
          <Alarm>마음에 드는 영상을 봐주세요!</Alarm>
        )}
      </ThisContents>
    </>
  );
};

export default History;

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
