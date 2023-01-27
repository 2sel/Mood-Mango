import { useState } from "react";
import styled from "styled-components";
import MyHistory from "../components/Mypage/MyHistory";
import MyPlayList from "../components/Mypage/MyPlayList";
import MyRank from "../components/Mypage/MyRank";
import MyHp from "../components/Mypage/MyHp";

import { moodStorage } from "../components/common/MoodStorage";
const Mypage = () => {
  // const [mangoPlayList, setMangoPlayList] = useState(
  //   moodStorage.getMangoPlayList()
  // );
  // const mangoHistory = moodStorage.getMangoHistory();
  // const mangoPlayList = moodStorage.getMangoPlayList();
  const [mangoRank, setMangoRank] = useState(() => {
    const cloneHistory = [...moodStorage.getMangoHistory()];
    // count를 기준으로 정렬

    cloneHistory.sort((a, b): number => {
      return a.count > b.count ? -1 : a.count > b.count ? 1 : 0;
    });
    return cloneHistory; // 정렬된 히스토리 데이터를 mangoRank에 저장
  });

  const sliceData = mangoRank.slice(0, 3);
  console.log(sliceData);
  return (
    <MyPage>
      <MyRank props={sliceData} />
      <MyHistory />
      <MyPlayList />
    </MyPage>
  );
};
export default Mypage;

const MyPage = styled.div`
  font-weight: 300;
  font-family: "Noto Sans KR", sans-serif;
  background-color: black;
  color: white;
  font-size: 40px;
  overflow: hidden;
`;
