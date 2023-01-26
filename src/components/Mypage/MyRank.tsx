import React from "react";
import { DataType } from "../common/MoodStorage";
import styled from "styled-components";
import Item from "./ImageCircle";

const MyRank = ({ props }: { props: DataType[] }) => {
  return (
    <>
      <div>가장 많이 들었던 곡</div>
      <ThisContents>
        {props.length > 3 ? (
          <>
            <Wrapper style={{ marginTop: 180 }}>
              <Item
                key={2}
                item={props[2]}
                circleStyle={{ width: 200, height: 200 }}
              />
            </Wrapper>
            <Wrapper style={{ marginTop: 50 }}>
              <Item
                key={0}
                item={props[0]}
                circleStyle={{ width: 200, height: 200 }}
              />
            </Wrapper>
            <Wrapper>
              <Item
                key={1}
                item={props[1]}
                circleStyle={{ width: 200, height: 200 }}
              />
            </Wrapper>
          </>
        ) : (
          <>데이터 수집중입니다!</>
        )}
      </ThisContents>
    </>
  );
};

export default MyRank;

const ThisContents = styled.div`
  width: 100%;
  height: 480px;
  display: flex;
  margin-bottom: 100px;
  flex-direction: row;
  justify-content: center;
`;

const Wrapper = styled.div`
  margin-top: 120px;
`;
