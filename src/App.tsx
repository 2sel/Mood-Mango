import { useEffect } from "react";
import Routers from "./shared/Routers";
import { useAppDispatch } from "./hooks/hooks";
import { getMusic } from "./redux/modules/musics";

interface IMap {
  [key: string]: string;
}

const idMap: any = [
  { playlistId: "PL31nVK1Q1BfHHZoHxUq5LeIUVLQ3ELQYy", location: "popular" },
  // { playlistId: "PLWTycz4el4t4l6uuriz3OhqR2aKy86EEP", location: "popular" },
  { playlistId: "PL31nVK1Q1BfFRnClXGE5CoHp6UlXqX6Pd", location: "뉴에이지" },
  { playlistId: "PL31nVK1Q1BfEvIGvQqw064187wHtsUaWP", location: "발라드" },
  {
    playlistId: "PL31nVK1Q1BfFMgv_jjzaPHpPGpeh_5WdA",
    location: "아이돌댄스곡",
  },
  { playlistId: "PL31nVK1Q1BfF4pgbrGpZ11hZivbnag3Ic", location: "시티팝" },
  { playlistId: "PL31nVK1Q1BfFsOJhlT2HupygWQU1L6kOv", location: "인디음악" },
  { playlistId: "PL31nVK1Q1BfHlnPTrRFakc6Dle9aoW6Fo", location: "RNB힙합" },
  { playlistId: "PL31nVK1Q1BfHKuvkLSs_yR6YZ3sjp1qiR", location: "외국힙합" },
  { playlistId: "PL31nVK1Q1BfHQkWyTPYxen65D_H5XaDCo", location: "디스코펑크" },
  { playlistId: "PL31nVK1Q1BfF3rvKxLqo5FuIcMbjTf5k3", location: "재즈" },
  { playlistId: "PL31nVK1Q1BfHDVl1BJAO2lb8cWe-9I2un", location: "로파이" },
];

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    idMap.map((data: any) => {
      dispatch(getMusic(data));
    });
  }, []);

  return <Routers />;
}

export default App;
