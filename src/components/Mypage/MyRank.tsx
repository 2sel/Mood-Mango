import { useState } from "react";
import styled from "styled-components";
import Item from "./ImageCircle";
import { moodStorage } from "../common/MoodStorage";
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
      <div>가장 많이 들었던 곡</div>
      <ThisContents
        style={{ justifyContent: mangoRank.length === 3 ? "center" : "left" }}
      >
        {mangoRank.length === 3 ? (
          <>
            <Wrapper>
              <Icon kind={"tiara"} color={"#a47c6d"} />
              <Item // 3등
                key={2}
                item={{ ...mangoRank[2], index: 2 }}
                storageData={mangoRank}
              />
              <Text>조회수 : {mangoRank[2].count}</Text>
            </Wrapper>
            <Wrapper>
              <Icon kind={"tiara"} color={"#ffb52b"} size={50} />
              <Item // 1등
                key={0}
                item={{ ...mangoRank[0], index: 0 }}
                storageData={mangoRank}
              />
              <Text>조회수 : {mangoRank[0].count}</Text>
            </Wrapper>
            <Wrapper>
              <Icon kind={"tiara"} color={"silver"} />
              <Item // 2등
                key={1}
                item={{ ...mangoRank[1], index: 1 }}
                storageData={mangoRank}
              />
              <Text>조회수 : {mangoRank[1].count}</Text>
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
