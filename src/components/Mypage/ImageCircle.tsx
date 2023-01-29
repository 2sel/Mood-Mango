import styled, { css } from "styled-components";
import { useAppDispatch } from "../../hooks/hooks";
import { DataType } from "../common/MoodStorage";
import {
  PlayerToggle,
  togglePlay,
  getMusicNum,
} from "../../redux/modules/musicplayer";

import { getPlaylist } from "../../redux/modules/musics";
import { resetMusic } from "../../redux/modules/musicplayer";
import { useAppSelector } from "../../hooks/hooks";
import { moodStorage } from "../common/MoodStorage";

const Item = ({
  item,
  storageData,
}: {
  item: DataType;
  storageData: DataType[];
}): JSX.Element => {
  const { musicreseted } = useAppSelector((state) => state.musicplayer);
  const dispatch = useAppDispatch();
  return (
    <Card>
      <Circle>
        <Image
          src={item.thumbnail}
          onClick={() => {
            dispatch(getPlaylist(storageData));
            dispatch(resetMusic(!musicreseted));

            dispatch(PlayerToggle(true));
            dispatch(togglePlay(true));
            dispatch(getMusicNum(item.index));
            moodStorage.addMangoHistory(item);
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
  width: 200px;
  height: 200px;
  cursor: pointer;
`;
const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
`;

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
