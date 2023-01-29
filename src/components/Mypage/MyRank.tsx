import { useState } from "react";
import styled from "styled-components";
import Item from "./ImageCircle";
import { moodStorage } from "../common/MoodStorage";
import { Introduce, Alarm, IconArea } from "./style";
import Icon from "../common/Icon";
const MyRank = () => {
  const [mangoRank, setMangoRank] = useState(() => {
    const cloneHistory = [...moodStorage.getMangoRank()];
    // count를 기준으로 정렬

    cloneHistory.sort((a, b): number => {
      return a.count > b.count ? -1 : a.count > b.count ? 1 : 0;
    });
    return cloneHistory.slice(0, 3); // 정렬된 히스토리 데이터를 mangoRank에 저장
  });

  return (
    <>
      <Introduce>
        가장 많이 들었던 곡{" "}
        <IconArea>
          <Icon
            kind={"chart"}
            size={60}
            style={{ position: "absolute", left: 12, top: 13 }}
            color={"white"}
          />
        </IconArea>
      </Introduce>
      <ThisContents rankLength={mangoRank.length}>
        {mangoRank.length === 3 ? (
          <>
            <Wrapper>
              <Icon kind={"tiara"} color={"#a47c6d"} />
              <Item // 3등
                key={2}
                item={{ ...mangoRank[2], index: 2 }}
                storageData={mangoRank}
              />
              <Text>들은 횟수 : {mangoRank[2].count}</Text>
            </Wrapper>
            <Wrapper>
              <Icon kind={"tiara"} size={50} color={"#ff830a"} />
              <Item // 1등
                key={0}
                item={{ ...mangoRank[0], index: 0 }}
                storageData={mangoRank}
              />
              <Text>들은 횟수 : {mangoRank[0].count}</Text>
            </Wrapper>
            <Wrapper>
              <Icon kind={"tiara"} color={"silver"} />
              <Item // 2등
                key={1}
                item={{ ...mangoRank[1], index: 1 }}
                storageData={mangoRank}
              />
              <Text>들은 횟수 : {mangoRank[1].count}</Text>
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

const ThisContents = styled.div<{
  rankLength: number;
}>`
  width: 100%;
  height: 300px;
  margin: 140px auto;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const Wrapper = styled.div`
  text-align: center;
`;

const Text = styled.p`
  color: gray;
  font-size: 15px;
  margin-top: 40px;
`;
