import React, { useEffect } from "react";
import { DataType } from "../common/MoodStorage";
import styled from "styled-components";
import Item from "./ImageCircle";
import { useDispatch } from "react-redux";
import { getPlaylist } from "../../redux/modules/musics";
import Icon from "../common/Icon";
const MyRank = ({ props }: { props: DataType[] }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div>가장 많이 들었던 곡</div>
      <ThisContents
        style={{ justifyContent: props.length === 3 ? "center" : "left" }}
      >
        {props.length === 3 ? (
          <>
            <Wrapper>
              <Icon kind={"tiara"} color={"gray"} />
              <Item
                key={2}
                item={{ ...props[2], index: 2 }}
                storageData={props}
                circleStyle={{ width: 200, height: 200 }}
              />

              <Text>조회수 : {props[2].count}</Text>
            </Wrapper>
            <Wrapper>
              <Icon kind={"tiara"} color={"#ffb52b"} size={50} />
              <Item
                key={0}
                item={{ ...props[0], index: 0 }}
                storageData={props}
                circleStyle={{ width: 200, height: 200 }}
              />
              <Text>조회수 : {props[0].count}</Text>
            </Wrapper>
            <Wrapper>
              <Icon kind={"tiara"} color={"gray"} />
              <Item
                key={1}
                item={{ ...props[1], index: 1 }}
                storageData={props}
                circleStyle={{ width: 200, height: 200 }}
              />
              <Text>조회수 : {props[1].count}</Text>
            </Wrapper>
          </>
        ) : (
          <Alarm>데이터 수집중입니다!</Alarm>
        )}
      </ThisContents>
    </>
  );
};

export default MyRank;

const ThisContents = styled.div`
  width: 100%;
  height: 500px;
  display: flex;

  flex-direction: row;
`;

const Wrapper = styled.div`
  margin-top: 90px;
  text-align: center;
`;
const Alarm = styled.p`
  font-size: 20px;
`;

const Text = styled.p`
  color: gray;
  font-size: 15px;
`;
