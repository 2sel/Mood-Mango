import styled, { css } from "styled-components";
import { useAppDispatch } from "../../hooks/hooks";

import {
  PlayerToggle,
  togglePlay,
  getMusicNum,
} from "../../redux/modules/musicplayer";

import { getPlaylist } from "../../redux/modules/musics";

const Item = ({ item, storageData, circleStyle }: any): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <Card>
      <Circle
        style={{
          width: circleStyle.width,
          height: circleStyle.height,
          marginLeft: circleStyle.marginLeft,
        }}
      >
        <img
          src={item.thumbnail}
          style={{
            width: circleStyle.width,
            height: circleStyle.height,
          }}
          onClick={() => {
            dispatch(getPlaylist(storageData));
            dispatch(PlayerToggle(true));
            dispatch(togglePlay(true));
            dispatch(getMusicNum(item.index));
          }}
        />
        <Text>{item.title}</Text>
      </Circle>
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
  }
`;
const Title = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-size: 20px;
`;

const Info = styled.div``;

const Card = styled.div`
  font-size: 20px;
  color: white;
  background-color: black;
  border-radius: 15%;

  margin: 5px;
`;

const Text = styled.p`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
