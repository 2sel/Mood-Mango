import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Item from "../components/common/Item";
import { moodStorage } from "../components/common/MoodStorage";
const Mypage = () => {
  const [mangoHistory, setMangoHistory] = useState(
    moodStorage.getMangoHistory()
  );
  const [mangoPlayList, setMangoPlayList] = useState(
    moodStorage.getMangoPlayList()
  );
  const [mangoRank, setMangoRank] = useState(() => {
    const cloneHistory = [...mangoHistory];
    // count를 기준으로 정렬
    cloneHistory.sort((a, b): number => {
      if (a.count > b.count) {
        return -1; // a가 b보다 앞에 있어야한다.
      }
      if (a.count < b.count) {
        return 1; // b가 a보다 앞에 있어야한다
      }
      return 0; // 순서를 바꾸지 않는다.??ㅅㅂ;
    });
    return cloneHistory; // 정렬된 히스토리 데이터를 mangoRank에 저장
  });

  return (
    <>
      <OneFloor>
        가장 많이 들은 곡(미정)
        <div>
          {mangoHistory.length !== 0 ? (
            <>
              {mangoRank.map((item, index) => {
                return <div key={index}>{item.title}</div>;
              })}
            </>
          ) : (
            <>!!!!!</>
          )}
        </div>
      </OneFloor>
      <TwoFloor>
        내가 들었던 곡(미정)
        {mangoHistory.length !== 0 ? (
          <>
            {mangoHistory.map((item, index) => {
              return <div key={index}>{item.title}</div>;
            })}
          </>
        ) : (
          <>!!!!!</>
        )}
      </TwoFloor>
      <ThirdFloor>
        나의 플레이리스트
        {mangoPlayList.length !== 0 ? (
          <>
            {mangoPlayList.map((item, index) => {
              return <div key={index}>{item.title}</div>;
            })}
          </>
        ) : (
          <>!!!!!</>
        )}
      </ThirdFloor>
    </>
  );
};
export default Mypage;
const OneFloor = styled.div`
  // 가장 많이 들은 곡
`;
const TwoFloor = styled.div`
  // 내가 들었던 곡(히스토리)
`;
const ThirdFloor = styled.div`
  // 나의 플레이리스트
`;
