import styled, { css } from "styled-components";
import { DataType } from "../common/MoodStorage";
import MusicContainer from "../Rank/MusicContainer";
import { useAppDispatch } from "../../hooks/hooks";

import { moodStorage } from "../common/MoodStorage";
import { useCallback, useEffect } from "react";
import { getPlaylist } from "../../redux/modules/musics";
import MyMusicContainer from "./MyMusicContainer";

// interface ImageCircleType {
//   item: any;
//   circleStyle: { [key: string]: number };
// }

const Item = ({
  item,

  circleStyle,
}: // {
//   item: DataType;

//   circleStyle: { [key: string]: number | string };
// }
any): JSX.Element => {
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(addPlayList(moodStorage.getMangoHistory()));
  // }, []);

  return (
    <Card>
      <Circle
        style={{
          width: circleStyle.width,
          height: circleStyle.height,
          marginLeft: circleStyle.marginLeft,
        }}
      >
        <MyMusicContainer data={item} index={item.index} key={item.id}>
          <img
            src={item.thumbnail}
            style={{
              width: circleStyle.width,
              height: circleStyle.height,
            }}
          />
        </MyMusicContainer>
      </Circle>
      <Info>
        <Title style={{ width: circleStyle.width }}>{item.title}</Title>
        <p style={{ color: "grey", display: "" }}>조회수 : {item.count}</p>
      </Info>
    </Card>
  );
};

export default Item;
const Circle = styled.div`
  border-radius: 100%;
  margin: 20px;

  img {
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    /* border: 4px solid #ffcd48; */
  }
`;
const Title = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  margin-top: 10px;
  font-size: 20px;
`;

const Info = styled.div`
  margin: 20px;
`;

const Card = styled.div`
  font-size: 20px;
  color: white;
  background-color: black;
  border-radius: 15%;

  margin: 5px;
  height: 280px;
`;
