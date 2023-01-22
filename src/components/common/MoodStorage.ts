export interface DataType {
  // 예시용, 데이터 객체 틀이 만들어지면 교체 예정
  name: string;
  id?: number;
  count: number;
  title?: string;
}

export class moodStorage {
  // 로컬 스토리지에서 데이터 가져오기
  private static storageHistory = localStorage.getItem("mangoHistory");
  private static storagePlayList = localStorage.getItem("mangoPlayList");

  // 로컬 스토리지 데이터를 static 변수에 할당
  private static mangoHistory: DataType[] =
    this.storageHistory !== null ? JSON.parse(this.storageHistory) : []; // 데이터 interface에 내가 본 횟수 추가하기
  private static mangoPlayList: DataType[] =
    this.storagePlayList !== null ? JSON.parse(this.storagePlayList) : []; // 데이터 interface 사용하기

  //스토리지 있는지 체크, 생성자 대체용
  // static setMoodStorage() {
  //   const historyData: string | null = localStorage.getItem("mangoHistory");
  //   const playListData: string | null = localStorage.getItem("mangoPlayList");

  //   if (typeof historyData === "string") {
  //     this.mangoHistory = JSON.parse(historyData);
  //   }
  //   if (typeof playListData === "string") {
  //     this.mangoPlayList = JSON.parse(playListData);
  //   }
  // }
  static getMangoHistory() {
    return this.mangoHistory;
  }
  static getMangoPlayList() {
    return this.mangoPlayList;
  }

  static addMangoHistory(param: any) {
    // 내가 들었던 곡
    // 처음 듣는 음악인지 아닌지 찾아보기
    const [data]: any = this.mangoHistory.filter(
      (item) => item.id === param.id
    );

    if (!!data) {
      // 들었던 거임
      // 기존 해당 음악을 지운다.
      const newHistory = this.mangoHistory.filter(
        (item) => item.id !== param.id
      );
      // 배열 맨 앞으로 생성후 count+1 을 한다(가장 많이 들은 음악 작업하기위해).
      this.mangoHistory = [{ ...param, count: data.count + 1 }, ...newHistory];
    } else {
      // 처음 들음
      this.mangoHistory = [{ ...param, count: 1 }, ...this.mangoHistory];
    }
    localStorage.setItem("mangoHistory", JSON.stringify(this.mangoHistory));
  }

  static addMangoPlayList(param: any): void {
    if (window.confirm("마이 플레이 리스트에 저장 하시겠습니까")) {
      if (!!this.mangoPlayList.filter((item) => item.id === param.id).length) {
        alert("이미 저장된 음악입니다.");
        return;
      } else {
        //저장한 기록이 없다면
        this.mangoPlayList.push(param);
        localStorage.setItem(
          "mangoPlayList",
          JSON.stringify(this.mangoPlayList)
        );
        alert("플레이 리스트에 추가 되었습니다.");
        return;
      }
    } else {
      return;
    }
  }

  static popMangoHistory(param: DataType) {
    this.mangoHistory = this.mangoHistory.filter(
      (item) => item.id !== param.id
    );
    localStorage.setItem("mangoHistory", JSON.stringify(this.mangoHistory));
  }
  static popMangoPlay(param: DataType) {
    this.mangoPlayList = this.mangoPlayList.filter(
      (item) => item.id !== param.id
    );
    localStorage.setItem("mangoPlayList", JSON.stringify(this.mangoPlayList));
  }

  static allClearHistory() {
    this.mangoHistory = [];
    localStorage.setItem("mangoHistory", JSON.stringify(this.mangoHistory));
  }
  static allClearPlayList() {
    this.mangoPlayList = [];
    localStorage.setItem("mangoPlayList", JSON.stringify(this.mangoPlayList));
  }
}
